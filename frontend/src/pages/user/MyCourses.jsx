import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const MyCourses = () => {
  const { auth } = useAuth();
  
  // Lấy danh sách khóa học của user hiện tại
  const myCourses = auth.user?.courses || [];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Khóa học của tôi</h1>
        <p className="text-gray-500 mt-2">Tiếp tục hành trình học tập của bạn.</p>
      </div>

      {myCourses.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
          <p className="text-6xl mb-4">📚</p>
          <h2 className="text-xl font-bold text-navy-900 mb-2">Thư viện trống</h2>
          <p className="text-gray-500 mb-6">Bạn chưa đăng ký khóa học nào. Khám phá các khóa học ngay!</p>
          <Link to="/catalog" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors inline-block">
            Xem danh sách khóa học
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {myCourses.map(course => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <img src={course.thumbnail_url} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-navy-900 text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="mt-auto">
                  <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                    <span>Tiến độ</span>
                    <span className="text-orange-500">0%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  
                  {/* ĐÃ SỬA: Biến thành thẻ Link trỏ về trang /course */}
                  <Link to="/course" className="block w-full text-center bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 rounded-lg transition-colors text-sm mt-2">
                    Bắt đầu học ngay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyCourses;