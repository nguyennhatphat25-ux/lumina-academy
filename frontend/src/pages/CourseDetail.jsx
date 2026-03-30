import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <div className="bg-[#0A1526] text-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              KHÓA HỌC BÁN CHẠY NHẤT
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              IELTS Masterclass 7.0+ Toàn diện
            </h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Làm chủ cả 4 kỹ năng Nghe - Nói - Đọc - Viết. Khóa học thực chiến giúp bạn xây dựng tư duy logic bằng tiếng Anh, phản xạ ngôn ngữ nhanh nhạy và tự tin chinh phục band điểm mơ ước.
            </p>
            <div className="flex items-center space-x-4 text-sm border-b border-gray-800 pb-6 mb-6">
              <span className="text-orange-500 font-bold text-lg">★ 4.9/5.0</span>
              <span className="text-gray-400">(2,450 đánh giá)</span>
              <span className="text-gray-400 border-l border-gray-700 pl-4">👥 15,200 học viên</span>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-800 border border-gray-700">
             <img src="https://via.placeholder.com/800x450/112240/FFFFFF?text=IELTS+Preview" alt="Video" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                  <span className="text-white text-2xl ml-1">▶</span>
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* CỘT TRÁI */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Bạn sẽ học được gì?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-orange-500 text-xl mt-1">✓</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Chiến lược làm bài Reading nhanh, kỹ năng Skimming & Scanning chính xác nhất.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-orange-500 text-xl mt-1">✓</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Công thức viết Task 1 & Task 2 ăn trọn điểm từ giám khảo bản xứ.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-orange-500 text-xl mt-1">✓</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Phát âm chuẩn xác, phản xạ Speaking lưu loát, mở rộng vốn từ vựng (Vocabulary).</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-end mb-6">
                 <h2 className="text-2xl font-bold text-navy-900">Nội dung chương trình học</h2>
                 <p className="text-sm text-gray-500">12 Chương • 45 Bài học • Tổng thời lượng 42h 20m</p>
              </div>
              
              <div className="space-y-4">
                <div className="border border-orange-200 rounded-xl p-5 cursor-pointer bg-white shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-orange-600">01. Nền tảng Ngữ pháp & Từ vựng cốt lõi</span>
                    <span className="text-orange-500">⌃</span>
                  </div>
                  <ul className="space-y-4 text-sm text-gray-600 pl-2">
                    <li className="flex justify-between items-center border-l-2 border-orange-200 pl-4">
                      <span className="flex items-center gap-2">▶ 12 Thì trong Tiếng Anh cực dễ nhớ</span>
                      <span className="text-gray-400">15:30</span>
                    </li>
                    <li className="flex justify-between items-center border-l-2 border-orange-200 pl-4">
                      <span className="flex items-center gap-2">▶ Cấu trúc câu ghép, câu phức ăn điểm</span>
                      <span className="text-gray-400">22:15</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (STICKY PRICE BOX) */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 sticky top-24">
              <div className="flex items-end gap-3 mb-6">
                <span className="text-3xl font-bold text-navy-900">1.490.000đ</span>
                <span className="text-lg text-gray-400 line-through mb-1">2.000.000đ</span>
              </div>
              <Link to="/checkout" className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl mb-3 transition-colors text-lg shadow-sm">
                ⚡ Đăng ký học ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;