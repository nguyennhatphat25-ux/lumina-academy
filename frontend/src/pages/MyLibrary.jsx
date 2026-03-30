import React from 'react';
import { Link } from 'react-router-dom';

const MyLibrary = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xl">HV</div>
          <div>
            <h3 className="font-bold text-navy-900 leading-tight">Học Viên VIP</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Premium Learner</p>
          </div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-500 hover:text-navy-900 hover:bg-gray-50 rounded-xl transition-colors">👤 Hồ sơ cá nhân</Link>
          <Link to="/my-library" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-orange-600 bg-orange-50 rounded-xl transition-colors border-l-4 border-orange-500">📚 Khóa học của tôi</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-64 p-8">
        <div className="bg-navy-900 rounded-3xl p-10 text-white shadow-xl flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">Chào mừng trở lại!</h1>
            <p className="text-blue-100 text-sm">Bạn đang làm rất tốt. Hãy tiếp tục học tập để chinh phục mục tiêu IELTS 7.0 nhé!</p>
          </div>
          <div className="flex gap-10 bg-navy-800/50 p-6 rounded-2xl">
            <div className="text-center"><p className="text-3xl font-bold">2</p><p className="text-[10px] text-blue-300">KHÓA ĐANG HỌC</p></div>
            <div className="text-center"><p className="text-3xl font-bold">45h</p><p className="text-[10px] text-blue-300">GIỜ HỌC</p></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy-900 mb-4">Khóa học đang diễn ra</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase mb-4 inline-block">ĐANG HỌC</span>
            <h3 className="font-bold text-navy-900 text-lg mb-2">IELTS Masterclass 7.0+</h3>
            <p className="text-sm text-gray-500 mb-6">Chương 3: Kỹ năng Reading - Dạng True/False/Not Given</p>
            <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase mb-4 inline-block">ĐANG HỌC</span>
            <h3 className="font-bold text-navy-900 text-lg mb-2">Tiếng Anh Giao Tiếp Phản Xạ</h3>
            <p className="text-sm text-gray-500 mb-6">Chương 2: Giao tiếp tại công sở</p>
            <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyLibrary;