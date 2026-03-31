import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CourseListItem = ({ course }) => {
  const { addToCart } = useCart();
  const { auth } = useAuth();
  const navigate = useNavigate();

  // 🌟 Bắt buộc đăng nhập
  const handleAddToCart = () => {
    if (!auth.isAuth) {
      alert("Bạn cần đăng nhập để thêm khóa học vào giỏ!");
      navigate('/login');
    } else {
      addToCart(course);
      alert("Đã thêm khóa học vào giỏ thành công!");
    }
  };

  return (
    <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Link to="/course" className="w-full md:w-64 h-48 block overflow-hidden">
        <img 
          src={course.thumbnail_url} 
          alt={course.title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
        />
      </Link>
      
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-lg">
            {course.category}
          </span>
          <Link to="/course">
            <h4 className="font-bold text-navy-900 text-xl mt-3 mb-2 hover:text-orange-500 transition-colors">
              {course.title}
            </h4>
          </Link>
          <p className="text-sm text-gray-500 line-clamp-2">{course.description}</p>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">
          <span className="text-xl font-extrabold text-orange-500">
            {Number(course.price).toLocaleString('vi-VN')}đ
          </span>
          <button 
            onClick={handleAddToCart} 
            className="bg-navy-900 hover:bg-orange-500 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md hover:shadow-orange-500/30"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseListItem;