import React from 'react';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <div className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lộ trình chinh phục Tiếng Anh</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Được thiết kế cá nhân hóa cho từng học viên. Dù bạn mất gốc hay muốn nâng band điểm, Lumina Academy đều có lộ trình chuẩn xác dành cho bạn.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16 text-center">
          <span className="bg-orange-100 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">LỘ TRÌNH PHỔ BIẾN NHẤT</span>
          <h2 className="text-3xl font-bold text-navy-900 mt-6">IELTS Từ Mất Gốc Đến 7.0+</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          
          {/* Chặng 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Chặng 1: Nền tảng (Foundation)</h3>
              <p className="text-gray-500 text-sm mb-4">Lấy lại căn bản ngữ pháp, xây dựng vốn từ vựng cốt lõi và luyện phát âm chuẩn IPA.</p>
              <p className="text-xs font-bold text-orange-500">Mục tiêu: Tương đương IELTS 3.5 - 4.0</p>
            </div>
          </div>

          {/* Chặng 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Chặng 2: Tăng tốc (Pre-IELTS)</h3>
              <p className="text-gray-500 text-sm mb-4">Làm quen với cấu trúc đề thi IELTS. Luyện kỹ năng Nghe - Đọc cơ bản, tập phản xạ Nói theo chủ đề.</p>
              <p className="text-xs font-bold text-orange-500">Mục tiêu: IELTS 5.0 - 5.5</p>
            </div>
          </div>

          {/* Chặng 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-navy-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-navy-900">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Chặng 3: Bứt phá (Masterclass)</h3>
              <p className="text-gray-500 text-sm mb-4">Luyện đề thực chiến chuyên sâu. Mở rộng từ vựng học thuật, viết Task 1 & 2 logic, hoàn thiện kỹ năng Speaking trôi chảy.</p>
              <p className="text-xs font-bold text-navy-900">Mục tiêu: IELTS 6.5 - 7.0+</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link to="/course" className="text-sm font-bold text-orange-500 hover:text-orange-600">Xem khóa học phù hợp →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;