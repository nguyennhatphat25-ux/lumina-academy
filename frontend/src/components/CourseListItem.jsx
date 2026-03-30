import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // ĐÃ SỬA: Chỉ lùi 1 bước (../)

const CourseListItem = ({ course }) => {
  const cart = useCart();
  const [showToast, setShowToast] = useState(false);

  // Kiểm tra an toàn
  if (!cart) {
    return <div className="p-4 border rounded-xl bg-red-50 text-red-500">Lỗi: Chưa tìm thấy Giỏ hàng (CartContext)</div>;
  }

  const { addToCart } = cart;

  const handleAddToCart = () => {
    addToCart(course);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-bounce">
          ✓ Đã thêm vào giỏ hàng!
        </div>
      )}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all mb-4">
        <img src={course.thumbnail_url} alt={course.title} className="w-full md:w-48 h-32 rounded-xl object-cover" />
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className={`px-2 py-0.5 rounded ${course.level === 'Nâng cao' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'} font-bold`}>{course.level}</span>
              <span className="text-gray-400">| {course.lessons} bài học</span>
              <span className="text-gray-400">| {course.duration}</span>
            </div>
            <h3 className="font-bold text-navy-900 text-lg mb-1">{course.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{course.description}</p>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-navy-900">{Number(course.price).toLocaleString('vi-VN')}đ</span>
            <button 
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors shadow-sm"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseListItem;