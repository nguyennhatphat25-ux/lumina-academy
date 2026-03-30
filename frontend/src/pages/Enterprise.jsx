import React from 'react';

const Enterprise = () => {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero */}
      <div className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Nâng tầm năng lực <span className="text-orange-500">Tiếng Anh Doanh Nghiệp</span></h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">Giải pháp đào tạo tiếng Anh chuyên biệt cho đội ngũ nhân sự. Thiết kế riêng theo đặc thù ngành nghề, tối ưu thời gian và chi phí cho doanh nghiệp.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg">Nhận tư vấn & Báo giá</button>
          </div>
          <div className="md:w-1/2">
             <div className="bg-gray-800 rounded-2xl aspect-video w-full border border-gray-700 p-8 flex items-center justify-center">
                <span className="text-gray-500 text-xl font-medium">[Hình ảnh Đào tạo Doanh nghiệp]</span>
             </div>
          </div>
        </div>
      </div>

      {/* Lợi ích */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-16">Vì sao chọn Lumina Academy cho Doanh nghiệp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🎯</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Chương trình tinh gọn</h3>
              <p className="text-gray-600 leading-relaxed">Giáo trình thiết kế riêng bám sát chuyên ngành (IT, Sales, Marketing...) giúp nhân viên áp dụng ngay vào công việc.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📈</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Quản lý chất lượng 360°</h3>
              <p className="text-gray-600 leading-relaxed">Hệ thống báo cáo chi tiết tiến độ học tập, chuyên cần và điểm thi định kỳ của từng nhân sự gửi trực tiếp cho HR.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">⏱️</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Lịch học linh hoạt</h3>
              <p className="text-gray-600 leading-relaxed">Đào tạo trực tiếp tại văn phòng công ty hoặc học online qua hệ thống nền tảng hiện đại của Lumina.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;