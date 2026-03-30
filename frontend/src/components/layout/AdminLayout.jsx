import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // <-- Đã sửa đường dẫn ở đây (chỉ có 2 dấu ../)

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, logout } = useAuth(); // Gọi AuthContext

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { id: 'dashboard', path: '/admin', icon: '📊', label: 'Tổng quan' },
    { id: 'courses', path: '/admin/courses', icon: '📚', label: 'Quản lý Khóa học' },
    { id: 'students', path: '/admin/students', icon: '👥', label: 'Quản lý Học viên' },
    { id: 'orders', path: '/admin/orders', icon: '🧾', label: 'Quản lý Đơn hàng' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex">
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-50 flex items-center gap-3">
          <div className="bg-navy-900 text-white font-bold p-1.5 rounded-lg text-lg leading-none">LA</div>
          <span className="font-bold text-xl text-navy-900 tracking-tight">Lumina Admin</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map(item => (
            <Link key={item.id} to={item.path} className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${location.pathname === item.path ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900 border-l-4 border-transparent'}`}>
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
        </nav>

        {/* Chức năng Đăng xuất thật cho Sidebar */}
        <div className="p-4 border-t border-gray-50 mt-auto">
           <Link to="/" className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors mb-2">
             <span>🏠</span> Về trang chủ
           </Link>
           <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-500 hover:text-red-500 transition-colors">
             <span>🚪</span> Đăng xuất
           </button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-8">
        <header className="flex justify-between items-center mb-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative w-96">
            <input type="text" placeholder="Tìm kiếm khóa học, học viên..." className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>
            
            {/* GIỐNG HỆT MENU HEADER TRANG CHỦ */}
            <div className="relative group cursor-pointer h-10 flex items-center border-l border-gray-100 pl-4">
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-navy-900">{auth.user?.name || 'Quản trị viên'}</p>
                  <p className="text-[10px] text-gray-500 uppercase">Super Admin</p>
                </div>
                <div className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold">AD</div>
              </div>
              
              <div className="hidden group-hover:block absolute top-full right-0 pt-4 z-50">
                <div className="bg-white border border-gray-100 shadow-xl rounded-xl w-48 py-2">
                   <Link to="/" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600">Trang chủ Client</Link>
                   <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50">Đăng xuất</button>
                </div>
              </div>
            </div>

          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;