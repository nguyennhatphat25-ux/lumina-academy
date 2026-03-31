import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import LogoImage from '../assets/images/logo_lumina.jpg';

const Home = () => {
  const { addToCart } = useCart();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (course) => {
    if (!auth.isAuth) {
      alert("Bạn cần đăng nhập để đăng ký khóa học này!");
      navigate('/login');
    } else {
      addToCart(course);
      alert("Đã thêm khóa học vào giỏ thành công!");
    }
  };

  const DUMMY_COURSES = [
    { id: 7, title: 'IELTS Masterclass 7.0+ Toàn diện', category: 'Luyện thi IELTS', price: '1.490.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên', category: 'Anh văn Giao tiếp', price: '850.000', rating: 4.8, thumbnail_url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'TOEIC 850+ Chinh phục đỉnh cao', category: 'Luyện thi TOEIC', price: '1.299.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1513258496099-4816c02453f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Tiếng Anh Doanh Nghiệp (Business English)', category: 'Anh văn Giao tiếp', price: '1.100.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="font-sans antialiased">
      {/* KHỐI TIÊU ĐỀ CHÍNH */}
      <section className="bg-navy-900 text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[30rem] h-[30rem] bg-orange-500 rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[20rem] h-[20rem] bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center relative z-10">
          
          {/* 🌟 ĐÃ SỬA LẠI THÀNH HÌNH CHỮ NHẬT BO GÓC SIÊU MƯỢT */}
          <div className="bg-white/95 backdrop-blur-md p-4 md:px-8 md:py-5 rounded-[2rem] shadow-2xl shadow-orange-500/20 mb-10 border border-white/20 transform hover:scale-105 transition-all duration-500">
             <img src={LogoImage} alt="Lumina Academy" className="h-16 md:h-20 w-auto mix-blend-multiply" />
          </div>

          <span className="text-orange-500 font-bold tracking-[0.25em] uppercase text-sm mb-5 block">
            Khơi Dậy Tiềm Năng - Thắp Sáng Tương Lai
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Chinh phục ngoại ngữ,<br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              mở khóa tương lai!
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Hệ thống học tập thông minh với lộ trình cá nhân hóa từ các chuyên gia hàng đầu. Chúng tôi đồng hành cùng bạn xây dựng nền tảng vững chắc để vươn tầm quốc tế.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
            <Link to="/catalog" onClick={() => window.scrollTo(0,0)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1">
              Khám phá khóa học
            </Link>
            <Link to="/roadmap" onClick={() => window.scrollTo(0,0)} className="border-2 border-white/10 hover:bg-white/5 text-white font-bold px-10 py-4 rounded-2xl transition-all">
              Xem lộ trình học
            </Link>
          </div>
        </div>
      </section>

      {/* KHÓA HỌC NỔI BẬT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-14">
            <div>
              <h2 className="text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Khóa học tiêu biểu</h2>
              <p className="text-gray-500 text-lg font-medium">Chương trình đào tạo được học viên đánh giá cao nhất</p>
            </div>
            <Link to="/catalog" onClick={() => window.scrollTo(0,0)} className="text-orange-500 font-bold hover:underline hidden md:block">Xem tất cả →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DUMMY_COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col hover:-translate-y-2">
                <Link to="/course" onClick={() => window.scrollTo(0,0)} className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl mb-5">
                    <img src={course.thumbnail_url} className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                    <span className="absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-navy-900 text-lg mb-4 h-14 line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
                    {course.title}
                  </h3>
                </Link>
                <div className="flex justify-between items-center border-t border-gray-100 pt-5 mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 font-medium italic">Học phí</span>
                    <span className="font-black text-navy-900 text-xl">{course.price}đ</span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(course)} 
                    className="bg-navy-900 hover:bg-orange-500 text-white p-3 rounded-xl transition-all duration-300 shadow-lg shadow-navy-900/10 hover:shadow-orange-500/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </button>
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