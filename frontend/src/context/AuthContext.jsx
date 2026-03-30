import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. DATABASE ẢO: Lấy dữ liệu từ bộ nhớ hoặc tạo mới nếu chưa có
  const [db, setDb] = useState(() => {
    const savedDb = localStorage.getItem('lumina_db');
    if (savedDb) return JSON.parse(savedDb);
    
    // Nếu chưa có DB, tạo sẵn tài khoản Admin
    return {
      users: [
        { email: 'admin@lumina.com', password: '123456', name: 'Quản trị viên', role: 'admin', courses: [], paymentHistory: [] }
      ],
      orders: []
    };
  });

  // 2. TÀI KHOẢN ĐANG ĐĂNG NHẬP
  const [auth, setAuth] = useState({ isAuth: false, user: null });

  // Tự động lưu DB vào LocalStorage mỗi khi có thay đổi
  useEffect(() => {
    localStorage.setItem('lumina_db', JSON.stringify(db));
  }, [db]);

  // HÀM ĐĂNG KÝ
  const registerUser = (name, email, password) => {
    const exists = db.users.find(u => u.email === email);
    if (exists) return false; // Email đã tồn tại
    
    const newUser = { name, email, password, role: 'user', courses: [], paymentHistory: [] };
    setDb(prev => ({ ...prev, users: [...prev.users, newUser] }));
    return true;
  };

  // HÀM ĐĂNG NHẬP
  const login = (email, password) => {
    const user = db.users.find(u => u.email === email && u.password === password);
    if (user) {
      setAuth({ isAuth: true, user });
      return user.role;
    }
    return false;
  };

  const logout = () => setAuth({ isAuth: false, user: null });

  // HÀM THANH TOÁN (LƯU VÀO DB VÀ ADMIN)
  const addPurchasedCourses = (purchasedItems, totalAmount, method, customerName, customerEmail) => {
    const orderId = '#ORD-' + Math.floor(1000 + Math.random() * 9000);
    const date = new Date().toLocaleDateString('vi-VN');
    const courseNames = purchasedItems.map(item => item.title).join(', ');

    // Tạo đơn hàng mới cho Admin xem
    const newOrder = { id: orderId, customer: customerName, email: customerEmail, course: courseNames, amount: totalAmount, method, status: 'ĐÃ THANH TOÁN', date };

    // Cập nhật Database Tổng
    setDb(prev => {
      const updatedUsers = prev.users.map(u => {
        // Nếu user đang đăng nhập mua, thì thêm khóa học vào tủ đồ của họ
        if (auth.isAuth && u.email === auth.user.email) {
           const newCourses = purchasedItems.filter(item => !u.courses.some(c => c.id === item.id));
           return { ...u, courses: [...u.courses, ...newCourses], paymentHistory: [newOrder, ...u.paymentHistory] };
        }
        return u;
      });
      return { ...prev, users: updatedUsers, orders: [newOrder, ...prev.orders] };
    });

    // Cập nhật giao diện của User hiện tại ngay lập tức
    if (auth.isAuth) {
      setAuth(prev => {
        const newCourses = purchasedItems.filter(item => !prev.user.courses.some(c => c.id === item.id));
        return {
          ...prev,
          user: { ...prev.user, courses: [...prev.user.courses, ...newCourses], paymentHistory: [newOrder, ...prev.user.paymentHistory] }
        };
      });
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, registerUser, addPurchasedCourses, db, setDb }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);