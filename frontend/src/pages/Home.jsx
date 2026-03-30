import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const trendingCourses = [
    { id: 1, title: 'IELTS Masterclass 7.0+ Toàn diện', category: { name: 'Luyện thi IELTS' }, lessons: 45, price: 1490000, studentsCount: 4250, rating: 4.9, thumbnail_url: 'https://via.placeholder.com/400x250/0A1526/FFFFFF?text=IELTS+Masterclass' },
    { id: 2, title: 'Tiếng Anh Giao Tiếp Phản Xạ Nhanh', category: { name: 'Giao Tiếp' }, lessons: 34, price: 890000, studentsCount: 2180, rating: 4.8, thumbnail_url: 'https://via.placeholder.com/400x250/F58220/FFFFFF?text=Giao+Tiep' },
    { id: 3, title: 'Tiếng Anh Doanh Nghiệp Cấp Tốc', category: { name: 'Doanh Nghiệp' }, lessons: 40, price: 1450000, studentsCount: 1560, rating: 4.7, thumbnail_url: 'https://via.placeholder.com/400x250/112240/FFFFFF?text=Business+English' },
    { id: 4, title: 'TOEIC 850+ Chinh phục đỉnh cao', category: { name: 'Luyện thi TOEIC' }, lessons: 45, price: 799000, studentsCount: 5200, rating: 5.0, thumbnail_url: 'https://via.placeholder.com/400x250/1E293B/FFFFFF?text=TOEIC+850' },
  ];

  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="inline-block bg-white/10 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">Học tiếng Anh không giới hạn</span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Kiến tạo tương lai <br/><span className="text-orange-500">toàn cầu</span> của bạn
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">Khám phá lộ trình học ngoại ngữ chuyên sâu từ các chuyên gia hàng đầu. Tự tin giao tiếp, chinh phục IELTS/TOEIC và thăng tiến sự nghiệp ngay hôm nay.</p>
            <div className="flex gap-4">
              <Link to="/catalog" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors">Bắt đầu học ngay →</Link>
            </div>
          </div>
          <div className="lg:w-1/2">
             <img src="https://via.placeholder.com/600x500/112240/FFFFFF?text=English+Learning" alt="Hero" className="w-full rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>

      {/* DANH MỤC PHỔ BIẾN */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-2">Lộ trình học tập</h2>
              <p className="text-gray-500">Lựa chọn mục tiêu của bạn để bắt đầu.</p>
            </div>
            <Link to="/catalog" className="text-orange-500 font-bold text-sm hover:underline">Tất cả danh mục →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 cursor-pointer transition-colors group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">Luyện thi IELTS</h3>
              <p className="text-sm text-gray-500">Từ mất gốc đến 7.0+</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 cursor-pointer transition-colors group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🗣️</div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">Tiếng Anh Giao Tiếp</h3>
              <p className="text-sm text-gray-500">Phản xạ tự nhiên, tự tin nói</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 cursor-pointer transition-colors group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">Tiếng Anh Doanh Nghiệp</h3>
              <p className="text-sm text-gray-500">Email, Thuyết trình, Đàm phán</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 cursor-pointer transition-colors group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">Luyện thi TOEIC</h3>
              <p className="text-sm text-gray-500">Cam kết đầu ra 800+</p>
            </div>
          </div>
        </div>
      </div>

      {/* KHÓA HỌC TIÊU BIỂU */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Khóa học tiêu biểu</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Những khóa học được đánh giá cao nhất từ hàng ngàn học viên.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {trendingCourses.map(course => (
              <Link to="/course" key={course.id} className="block">
                <CourseCard course={course} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;