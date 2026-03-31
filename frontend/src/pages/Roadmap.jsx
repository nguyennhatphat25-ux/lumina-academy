import React, { useState } from 'react';

const ROADMAP_DATA = {
  'IELTS': {
    title: 'Lộ trình IELTS 8.0+ Chuyên sâu',
    subtitle: 'Chặng đường từ con số 0 đến làm chủ hoàn toàn 4 kỹ năng.',
    icon: '📚',
    steps: [
      { step: '0 - 3.0', title: 'IELTS Starter', desc: 'Củng cố nền tảng ngữ âm, từ vựng theo chủ đề cơ bản và ngữ pháp cốt lõi.', color: 'border-l-orange-500' },
      { step: '3.0 - 4.5', title: 'IELTS Foundation', desc: 'Làm quen với format đề thi. Luyện nghe các đoạn hội thoại ngắn và đọc hiểu cơ bản.', color: 'border-l-emerald-500' },
      { step: '4.5 - 5.5', title: 'IELTS Breakthrough', desc: 'Bắt đầu luyện tập Speaking Part 1 & 2. Rèn kỹ năng Skimming & Scanning cho Reading.', color: 'border-l-blue-500' },
      { step: '5.5 - 6.5', title: 'IELTS Intensive', desc: 'Tập trung chuyên sâu vào Writing Task 1 (Biểu đồ) và mở rộng từ vựng học thuật (Academic).', color: 'border-l-purple-500' },
      { step: '6.5 - 7.5', title: 'IELTS Masterclass', desc: 'Sửa lỗi sai cấu trúc Writing Task 2. Luyện phản xạ nhanh Speaking Part 3.', color: 'border-l-red-500' },
      { step: '7.5 - 8.0+', title: 'IELTS Expert', desc: 'Thực chiến luyện đề liên tục dưới áp lực thời gian. Tối ưu hóa điểm số tuyệt đối.', color: 'border-l-navy-900' },
    ]
  },
  'TOEIC': {
    title: 'Lộ trình TOEIC 4 Kỹ Năng 900+',
    subtitle: 'Lộ trình thăng tiến cho sinh viên và người đi làm.',
    icon: '🎯',
    steps: [
      { step: '0 - 350', title: 'TOEIC Basic', desc: 'Xây dựng 3000 từ vựng cốt lõi thường gặp nhất trong môi trường công sở.', color: 'border-l-orange-500' },
      { step: '350 - 550', title: 'TOEIC Pre-Intermediate', desc: 'Luyện kỹ năng nghe Part 1, 2 và đọc hiểu Part 5, 6.', color: 'border-l-emerald-500' },
      { step: '550 - 700', title: 'TOEIC Intermediate', desc: 'Làm quen với bẫy trong Part 3, 4. Tăng tốc độ đọc hiểu văn bản dài Part 7.', color: 'border-l-blue-500' },
      { step: '700 - 850', title: 'TOEIC Advanced', desc: 'Bắt đầu tích hợp luyện TOEIC Speaking & Writing chuẩn quốc tế.', color: 'border-l-purple-500' },
      { step: '850 - 900+', title: 'TOEIC Master', desc: 'Giải đề thi thật, phân tích lỗi sai và mẹo quản lý thời gian làm bài.', color: 'border-l-navy-900' },
    ]
  },
  'Giao tiếp': {
    title: 'Anh văn Giao tiếp Phản xạ',
    subtitle: 'Xóa bỏ rào cản tự ti, tự tin nói tiếng Anh sau 6 tháng.',
    icon: '🗣️',
    steps: [
      { step: 'Tháng 1', title: 'Chuẩn hóa Phát âm', desc: 'Học bảng phiên âm IPA, nắm quy tắc trọng âm, nối âm và ngữ điệu.', color: 'border-l-orange-500' },
      { step: 'Tháng 2', title: 'Giao tiếp sinh tồn', desc: 'Các tình huống đời sống: Mua sắm, hỏi đường, sân bay, nhà hàng.', color: 'border-l-emerald-500' },
      { step: 'Tháng 3-4', title: 'Giao tiếp Công sở', desc: 'Tiếng Anh trong phỏng vấn xin việc, viết email, gọi điện thoại.', color: 'border-l-blue-500' },
      { step: 'Tháng 5', title: 'Thuyết trình', desc: 'Xây dựng cấu trúc bài thuyết trình, ngôn ngữ cơ thể và phản xạ Q&A.', color: 'border-l-purple-500' },
      { step: 'Tháng 6', title: 'Tranh luận', desc: 'Bày tỏ quan điểm cá nhân, đàm phán và thuyết phục đối tác.', color: 'border-l-navy-900' },
    ]
  }
};

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState('IELTS');
  const currentRoadmap = ROADMAP_DATA[activeTab];
  const tabs = Object.keys(ROADMAP_DATA);

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      <section className="bg-navy-900 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">LỘ TRÌNH CHUYÊN SÂU</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Chinh phục tiếng Anh theo lộ trình</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Được thiết kế cá nhân hóa, giúp bạn đạt mục tiêu hiệu quả nhất.</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4 h-20 items-center overflow-x-auto justify-center">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} 
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl border text-sm font-bold transition-all duration-300 ${activeTab === tab ? 'bg-orange-50 border-orange-200 text-orange-600 shadow-sm' : 'bg-white border-transparent text-gray-500 hover:bg-gray-50'}`}>
                <span className="text-xl">{ROADMAP_DATA[tab].icon}</span>
                Lộ trình {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy-900">{currentRoadmap.title}</h2>
            <p className="text-gray-500 mt-2">{currentRoadmap.subtitle}</p>
          </div>
          
          {/* Cấu trúc các bước chạy dọc xuống dài hơn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentRoadmap.steps.map((step, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm border-l-4 ${step.color} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                <span className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 opacity-50 pointer-events-none">{index + 1}</span>
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-bold px-3 py-1 rounded-lg">BƯỚC {index + 1}</span>
                  <span className="text-sm font-extrabold text-orange-500 bg-orange-50 px-3 py-1 rounded-lg">{step.step}</span>
                </div>
                <h3 className="font-extrabold text-navy-900 text-xl mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 relative z-10">{step.desc}</p>
                <button className="text-navy-900 font-bold text-sm hover:text-orange-500 transition-colors flex items-center gap-1 relative z-10">Xem khóa học phù hợp →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;