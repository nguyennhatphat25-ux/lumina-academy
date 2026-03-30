import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLesson, setActiveLesson] = useState(1);

  // Danh sách bài học mẫu
  const lessons = [
    { id: 1, title: 'Bài 1: Giới thiệu khóa học & Phương pháp học', duration: '05:20', isPlaying: true },
    { id: 2, title: 'Bài 2: Cấu trúc đề thi IELTS chuẩn nhất', duration: '12:45', isPlaying: false },
    { id: 3, title: 'Bài 3: Tư duy Mở rộng ý tưởng (Brainstorming)', duration: '18:30', isPlaying: false },
    { id: 4, title: 'Bài 4: Luyện tập Speaking Part 1', duration: '22:15', isPlaying: false },
  ];

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-200 flex flex-col">
      {/* HEADER PHÒNG HỌC */}
      <header className="bg-gray-950 border-b border-gray-800 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold text-sm">
            <span>←</span> Quay lại
          </button>
          <div className="h-6 w-px bg-gray-700"></div>
          <h1 className="text-white font-bold truncate max-w-md">IELTS Masterclass 7.0+ Toàn diện</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-32 bg-gray-800 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <span className="text-xs font-bold text-gray-400">1/4 bài</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
            Đánh giá khóa học
          </button>
        </div>
      </header>

      {/* NỘI DUNG CHÍNH */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* KHU VỰC TRÌNH PHÁT VIDEO (BÊN TRÁI) */}
        <main className="flex-1 flex flex-col">
          {/* Trình phát Video (Dùng iframe YouTube để chạy thật) */}
          <div className="w-full bg-black aspect-video relative">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sQcwOBBmeQU?autoplay=1&rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          {/* Khu vực Tabs thông tin */}
          <div className="bg-white text-gray-800 flex-1 p-8">
            <div className="flex border-b border-gray-200 gap-8 mb-6">
              <button onClick={() => setActiveTab('overview')} className={`pb-4 font-bold text-sm ${activeTab === 'overview' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500 hover:text-navy-900'}`}>Tổng quan</button>
              <button onClick={() => setActiveTab('qa')} className={`pb-4 font-bold text-sm ${activeTab === 'qa' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500 hover:text-navy-900'}`}>Hỏi đáp (Q&A)</button>
              <button onClick={() => setActiveTab('notes')} className={`pb-4 font-bold text-sm ${activeTab === 'notes' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500 hover:text-navy-900'}`}>Tài liệu đính kèm</button>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy-900">Bài 1: Giới thiệu khóa học & Phương pháp học</h2>
                <p className="text-gray-600 leading-relaxed">Trong bài học đầu tiên này, chúng ta sẽ cùng nhau tìm hiểu về cấu trúc tổng quan của bài thi IELTS, các tiêu chí chấm điểm của giám khảo và phương pháp học tập hiệu quả nhất để đạt được band điểm 7.0+.</p>
                <div className="flex items-center gap-4 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 w-max">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xl">GV</div>
                  <div>
                    <p className="font-bold text-navy-900">Dr. Minh Nguyen</p>
                    <p className="text-xs text-gray-500">Giảng viên Chuyên gia IELTS</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'qa' && (
              <div className="text-center py-10">
                <p className="text-gray-500 font-medium">Chưa có câu hỏi nào cho bài học này. Hãy là người đầu tiên đặt câu hỏi!</p>
                <button className="mt-4 border-2 border-orange-500 text-orange-500 font-bold px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors">Đặt câu hỏi mới</button>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3"><span className="text-2xl">📄</span><span className="font-bold text-sm">Slide_Bai_1_GioiThieu.pdf</span></div>
                  <span className="text-sm font-bold text-blue-500">Tải xuống</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3"><span className="text-2xl">📝</span><span className="font-bold text-sm">BaiTap_ThucHanh_1.docx</span></div>
                  <span className="text-sm font-bold text-blue-500">Tải xuống</span>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* SIDEBAR DANH SÁCH BÀI HỌC (BÊN PHẢI) */}
        <aside className="w-full lg:w-96 bg-white border-l border-gray-200 flex flex-col h-[calc(100vh-4rem)]">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-bold text-navy-900">Nội dung khóa học</h3>
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-1">
            {lessons.map(lesson => (
              <button 
                key={lesson.id}
                onClick={() => setActiveLesson(lesson.id)}
                className={`w-full text-left p-4 rounded-xl flex gap-3 transition-colors ${activeLesson === lesson.id ? 'bg-orange-50 border border-orange-200' : 'hover:bg-gray-50 border border-transparent'}`}
              >
                <div className="mt-1">
                  {activeLesson === lesson.id ? (
                    <span className="flex h-4 w-4 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span></span>
                  ) : (
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                  )}
                </div>
                <div>
                  <h4 className={`text-sm font-bold line-clamp-2 ${activeLesson === lesson.id ? 'text-orange-600' : 'text-gray-700'}`}>{lesson.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"><span>▶</span> {lesson.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default CourseDetail;