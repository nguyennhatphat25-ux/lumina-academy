import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white font-sans pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Cột 1 */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-orange-500 font-bold text-xl mb-4">Lumina Academy</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">Nền tảng học tập trực tuyến hàng đầu, giúp bạn chinh phục mọi kỹ năng số và thăng tiến sự nghiệp.</p>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors">🌐</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors">✉️</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors">📞</span>
            </div>
          </div>
          
          {/* Cột 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Khóa học của tôi</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Giảng viên tiêu biểu</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog & Tin tức</a></li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Điều khoản</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Đăng ký bản tin</h3>
            <p className="text-sm text-gray-400 mb-4">Nhận thông báo về các khóa học mới và ưu đãi đặc biệt.</p>
            <input type="email" placeholder="Email của bạn" className="w-full bg-white/10 border-transparent rounded-lg px-4 py-3 text-sm text-white mb-3 focus:ring-orange-500 focus:border-orange-500" />
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors text-sm">Đăng ký ngay</button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Lumina Academy. Kiến tạo tương lai số.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Terms</span>
             <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;