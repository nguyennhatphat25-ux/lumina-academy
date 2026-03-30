import React from 'react';
import { Link } from 'react-router-dom';

// 🌟 BƯỚC 1: IMPORT HÌNH ẢNH LOGO MỚI (Vẫn dùng file ảnh đuôi .jpg xịn xò)
import LogoImage from '../../assets/images/logo_lumina.jpg'; // Kiểm tra kỹ đường dẫn này

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 py-16 font-sans border-t border-gray-800 relative overflow-hidden">
      
      {/* TRANG TRÍ MỜ: Thêm một vòng tròn cam mờ phía sau để footer có chiều sâu hơn */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            {/* 🌟 BƯỚC 2: HÒA QUYỆN LOGO TUYỆT ĐỐI VÀO BÓNG TỐI */}
            {/* Đã sửa: 
                - bg-white/5 và backdrop-blur-sm: Làm cái card mờ đi thành lớp kính.
                - mix-blend-multiply trên ảnh: Giúp tàng hình nền trắng JPG.
                - hover:shadow-[0_0_25px_8px_rgba(249,115,22,0.15)]: Thêm hiệu ứng phát sáng mờ khi chỉ chuột vào.
            */}
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)} 
              className="inline-flex items-center mb-6 group bg-white/5 backdrop-blur-sm rounded-2xl p-2.5 transition-all duration-300 border border-white/5 hover:border-orange-500/20 hover:shadow-[0_0_25px_8px_rgba(249,115,22,0.15)] shadow-inner shadow-black/10"
            >
              <img 
                src={LogoImage} 
                alt="Lumina Academy Logo" 
                className="h-16 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Nền tảng học tập trực tuyến hàng đầu, giúp bạn chinh phục mọi kỹ năng ngoại ngữ và thăng tiến sự nghiệp.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4">
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