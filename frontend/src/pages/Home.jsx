import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LogoImage from '../assets/images/logo_lumina.jpg';

const Home = () => {
  const { addToCart } = useCart(); // Lấy hàm thêm vào giỏ

  const DUMMY_COURSES = [
    { id: 7, title: 'IELTS Masterclass 7.0+ Toàn diện', category: 'Luyện thi IELTS', price: '1.490.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên', category: 'Anh văn Giao tiếp', price: '850.000', rating: 4.8, thumbnail_url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Luyện thi TOEIC 850+ Chinh phục đỉnh cao', category: 'Luyện thi TOEIC', price: '1.299.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1513258496099-4816c02453f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Tiếng Anh Doanh Nghiệp (Business English)', category: 'Anh văn Giao tiếp', price: '1.100.000', rating: 4.9, thumbnail_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="font-sans">
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center relative z-10">
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-[2rem] shadow-2xl mb-10 border border-white/20">
             <img src={LogoImage} alt="Lumina Academy" className="h-20 w-auto mix-blend-multiply" />
          </div>
          <h1 className="text-5xl font-extrabold mb-6">Chinh phục ngoại ngữ, mở khóa tương lai!</h1>
          <div className="flex gap-6">
            <Link to="/catalog" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-md">Xem khóa học</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Khóa học nổi bật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DUMMY_COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <Link to="/course"> {/* Bấm vào ảnh/tên sẽ ra Chi tiết */}
                  <img src={course.thumbnail_url} className="w-full h-40 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform" />
                  <span className="text-orange-600 text-[10px] font-bold px-2 py-0.5 bg-orange-50 rounded">{course.category}</span>
                  <h3 className="font-bold text-navy-900 text-sm mt-2 mb-4 h-10 line-clamp-2">{course.title}</h3>
                </Link>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="font-bold text-navy-900">{course.price}đ</span>
                  <button 
                    onClick={() => addToCart(course)} // Đã gắn hàm thêm vào giỏ thật
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors"
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