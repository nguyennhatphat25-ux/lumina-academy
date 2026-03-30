import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // LỘ TRÌNH ĐÃ ĐƯỢC CẬP NHẬT TỪ ẢNH BẠN GỬI
  const MOCK_COURSES = [
    { id: 101, title: 'IELTS Foundation (0-3.0)', category: 'IELTS', price: '2.490.000', instructor: 'Dr. Minh Nguyen', level: '0 - 3.0', description: 'Củng cố nền tảng ngữ pháp và phát âm chuẩn.', thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 102, title: 'IELTS Breakthrough (3.0-5.0)', category: 'IELTS', price: '3.490.000', instructor: 'Dr. Minh Nguyen', level: '3.0 - 5.0', description: 'Rèn luyện kỹ năng Nghe - Đọc cơ bản và làm quen đề thi.', thumbnail_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 201, title: 'TOEIC Starter (0-450)', category: 'TOEIC', price: '1.990.000', instructor: 'Mr. David Smith', level: '0 - 450', description: 'Luyện thi TOEIC cơ bản cho người mới bắt đầu.', thumbnail_url: 'https://images.unsplash.com/photo-1513258496099-4816c02453f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 301, title: 'Tiếng Anh Trẻ em Level 1', category: 'Trẻ em', price: '2.990.000', instructor: 'Ms. Anna Nguyễn', level: 'Level 1', description: 'Học tiếng Anh qua bài hát, trò chơi vui vẻ.', thumbnail_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('lumina_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('lumina_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course) => {
    setCartItems((prev) => {
      const exists = prev.find(item => item.id === course.id);
      if (exists) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.price.replace(/\./g, '').replace('đ', '')), 0);

  return (
    <CartContext.Provider value={{ MOCK_COURSES, cartItems, addToCart, removeFromCart, cartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);