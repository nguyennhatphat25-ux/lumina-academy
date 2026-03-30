import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden h-full font-sans">
      <div className="relative">
        <img 
          src={course.thumbnail_url || 'https://via.placeholder.com/400x250/0A1526/FFFFFF?text=English+Course'} 
          alt={course.title} 
          className="w-full h-[180px] object-cover"
        />
        <span className="absolute top-3 left-3 bg-white text-[10px] font-bold px-3 py-1.5 rounded-full text-gray-800 tracking-wide uppercase shadow-sm">
          BÁN CHẠY
        </span>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          <span className="text-orange-500 mr-2">{course.category?.name || 'TIẾNG ANH'}</span> • {course.lessons || 15} BÀI HỌC
        </div>
        
        <h3 className="font-bold text-[17px] text-gray-900 leading-snug mb-3 line-clamp-2">
          {course.title}
        </h3>
        
        <div className="flex items-center text-xs text-gray-500 mb-5">
          <span className="text-orange-500 mr-1 text-sm">★</span>
          <span className="font-semibold text-gray-700 mr-1">{course.rating || 4.9}</span>
          <span>({course.studentsCount || 1200} học viên)</span>
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
          <span className="text-lg font-bold text-gray-900">
            {Number(course.price || 0).toLocaleString('vi-VN')}đ
          </span>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white p-2.5 rounded-lg shadow-sm">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
             </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;