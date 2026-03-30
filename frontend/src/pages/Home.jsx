import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo_lumina.jpg'; // Import Logo vào Trang chủ

const DUMMY_COURSES = [
  { id: 1, title: 'IELTS Masterclass 7.0+ Toàn diện', category: 'Luyện thi IELTS', price: '1.490.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên', category: 'Anh văn Giao tiếp', price: '850.000', rating: 4.8, thumbnail_url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Luyện thi TOEIC 850+ Chinh phục đỉnh cao', category: 'Luyện thi TOEIC', price: '1.299.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1513258496099-4816c02453f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Tiếng Anh Doanh Nghiệp Cấp Tốc (Business English)', category: 'Anh văn Giao tiếp', price: '1.100.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const Home = () => {
  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="bg-navy-900 text-white py-24 md:py-32 relative overflow-hidden">
        {/* Vòng tròn mờ trang trí phía sau */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          
          {/* LOGO CHÍNH GIỮA TRANG CHỦ (Bọc trong hộp phát sáng) */}
          <div className="bg-white/95 backdrop-blur-md p-4 md:px-8 md:py-5 rounded-[2rem] shadow-2xl shadow-orange-500/30 mb-10 transform hover:scale-105 transition-all duration-500 cursor-default border border-white/20">
             <img 
               src={LogoImage} 
               alt="Lumina Academy" 
               className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" 
             />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mb-6">
            Chinh phục ngoại ngữ, <br className="hidden md:block" />mở khóa tương lai!
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Học tiếng Anh thật dễ dàng với các khóa học chất lượng cao, giảng viên chuyên gia, và cộng đồng hỗ trợ nhiệt tình. Bắt đầu ngay hôm nay!
          </p>
          <div className="flex gap-6">
            <Link to="/catalog" onClick={() => window.scrollTo(0, 0)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-md hover:shadow-orange-500/25">
              Xem khóa học
            </Link>
            <Link to="/roadmap" onClick={() => window.scrollTo(0, 0)} className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
              Lộ trình học tập
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">Khóa học nổi bật</h2>
              <p className="text-gray-500 mt-1">Được học viên đánh giá cao và đăng ký nhiều nhất.</p>
            </div>
            <Link to="/catalog" onClick={() => window.scrollTo(0, 0)} className="text-orange-500 font-bold hover:underline">Xem tất cả →</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {DUMMY_COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img src={course.thumbnail_url} alt={course.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                <div className="flex-1">
                  <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded">{course.category}</span>
                  <h3 className="font-bold text-navy-900 text-sm mt-2 mb-2 line-clamp-2">{course.title}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                    <span className="font-bold text-lg text-navy-900">{course.price}đ</span>
                    <span className="flex items-center gap-1 text-orange-500">★ <span className="text-gray-800 font-bold">{course.rating}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;