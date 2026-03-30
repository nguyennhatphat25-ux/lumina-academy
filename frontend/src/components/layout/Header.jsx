import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

// 🌟 BƯỚC 1: IMPORT HÌNH ẢNH LOGO MỚI
import LogoImage from '../../assets/images/logo_lumina.jpg'; // Kiểm tra kỹ đường dẫn này

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const cartContext = useCart();
  const cartItems = cartContext?.cartItems || [];

  const authContext = useAuth();
  const auth = authContext?.auth || { isAuth: false, user: null };
  const logout = authContext?.logout || (() => {});

  const isActive = (path) => location.pathname === path ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-600 hover:text-navy-900";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🌟 BƯỚC 2: THAY THẾ LOGO CŨ BẰNG HÌNH ẢNH MỚI */}
          {/* Mình đã xóa khối <div relative w-10 h-10...> và khối <span font-extrabold...> cũ */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center group">
            <img 
              src={LogoImage} 
              alt="Lumina Academy Logo" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              // Chiều cao h-14 (khoảng 56px) là kích thước lý tưởng cho header, w-auto để giữ tỷ lệ
            />
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8 h-full items-center">
            <Link to="/catalog" className={`text-sm font-semibold h-full flex items-center ${isActive('/catalog')}`}>Khóa học</Link>
            <Link to="/roadmap" className={`text-sm font-semibold h-full flex items-center ${isActive('/roadmap')}`}>Lộ trình</Link>
            <Link to="/instructors" className={`text-sm font-semibold h-full flex items-center ${isActive('/instructors')}`}>Giảng viên</Link>
            <Link to="/blog" className={`text-sm font-semibold h-full flex items-center ${isActive('/blog')}`}>Tin tức</Link>
          </nav>

          <div className="flex items-center gap-6">
            {/* Giỏ Hàng */}
            <Link to="/checkout" className="text-gray-600 hover:text-navy-900 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Tài khoản */}
            {auth.isAuth ? (
              <div className="relative group cursor-pointer h-10 flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-navy-900 hidden md:block">{auth.user?.name}</span>
                  <div className="w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                    {auth.user?.role === 'admin' ? 'AD' : 'HV'}
                  </div>
                </div>
                
                <div className="hidden group-hover:block absolute top-full right-0 pt-4 z-50">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl w-48 py-2 overflow-hidden">
                     <Link to={auth.user?.role === 'admin' ? '/admin' : '/my-library'} className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                        Bảng điều khiển
                     </Link>
                     <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
                        Đăng xuất
                     </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-sm">
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;