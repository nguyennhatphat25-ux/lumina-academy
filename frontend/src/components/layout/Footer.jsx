import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 py-16 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            {/* 🌟 LOGO PREMIUM MỚI CHO FOOTER */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2.5 mb-6 group inline-flex">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 shadow-lg shadow-orange-500/40 group-hover:shadow-orange-500/60 group-hover:-translate-y-0.5 transition-all duration-300">
                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-orange-500 transition-colors">
                Lumina<span className="text-orange-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Nền tảng học tập trực tuyến hàng đầu, giúp bạn chinh phục mọi kỹ năng ngoại ngữ và thăng tiến sự nghiệp.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4">
              {/* ĐÃ THÊM LỆNH NHẢY LÊN ĐẦU TRANG */}
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Về chúng tôi</Link></li>
              <li><Link to="/catalog" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Tất cả Khóa học</Link></li>
              <li><Link to="/instructors" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Đội ngũ Giảng viên</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Tin tức & Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hỗ trợ Học viên</h4>
            <ul className="space-y-4">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Điều khoản dịch vụ</Link></li>
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Chính sách bảo mật</Link></li>
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Trung tâm trợ giúp</Link></li>
              <li><Link to="/checkout" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Hướng dẫn thanh toán</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Đăng ký bản tin</h4>
            <p className="text-sm text-gray-400 mb-4">Nhận thông báo về các khóa học mới và ưu đãi đặc biệt.</p>
            <form className="flex">
              <input type="email" placeholder="Email của bạn..." className="bg-gray-800 text-white px-4 py-3 rounded-l-xl w-full outline-none focus:ring-1 focus:ring-orange-500 border border-gray-700" />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-r-xl text-white font-bold transition-colors">→</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Lumina Academy. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
            <span className="hover:text-white cursor-pointer transition-colors">YouTube</span>
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;