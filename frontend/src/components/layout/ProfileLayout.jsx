import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProfileLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, logout } = useAuth(); // Lấy tên thật và hàm đăng xuất
  
  const isActive = (path) => location.pathname === path 
    ? "text-orange-600 bg-orange-50 border-l-4 border-orange-500 font-bold" 
    : "text-gray-500 hover:text-navy-900 hover:bg-gray-50 font-semibold";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex">
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xl">HV</div>
          <div>
            <h3 className="font-bold text-navy-900 leading-tight line-clamp-1">{auth.user?.name || 'Học viên'}</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Học Viên Cơ Bản</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link to="/profile" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors ${isActive('/profile')}`}><span>👤</span> Hồ sơ cá nhân</Link>
          <Link to="/my-library" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors ${isActive('/my-library')}`}><span>📚</span> Khóa học của tôi</Link>
          <Link to="/progress" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors ${isActive('/progress')}`}><span>📈</span> Tiến độ học tập</Link>
          <Link to="/certificates" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors ${isActive('/certificates')}`}><span>🎓</span> Chứng chỉ</Link>
          <Link to="/billing" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors ${isActive('/billing')}`}><span>🧾</span> Lịch sử thanh toán</Link>
        </nav>

        {/* Sửa Nút Đăng Xuất ở đây */}
        <div className="mt-auto p-4 border-t border-gray-50">
           <Link to="/" className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors mb-2">
             <span>🏠</span> Về trang chủ
           </Link>
           <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-500 hover:text-red-500 transition-colors">
             <span>🚪</span> Đăng xuất
           </button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-8">
        <Outlet /> 
      </main>
    </div>
  );
};

export default ProfileLayout;