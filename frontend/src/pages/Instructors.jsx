import React from 'react';

const Instructors = () => {
  const instructors = [
    { name: 'David Smith', role: 'Cựu giám khảo IELTS', exp: '15 năm', desc: 'Chuyên gia luyện thi Speaking, giúp hàng ngàn học viên vượt band điểm nhanh chóng.', img: 'https://via.placeholder.com/300?text=David' },
    { name: 'Sarah Jenkins', role: 'Thạc sĩ TESOL', exp: '10 năm', desc: 'Sáng lập phương pháp học từ vựng qua ngữ cảnh, chuyên trị Writing Task 2.', img: 'https://via.placeholder.com/300?text=Sarah' },
    { name: 'Michael Chen', role: 'Chuyên gia TOEIC 990', exp: '8 năm', desc: 'Kinh nghiệm huấn luyện tiếng Anh doanh nghiệp tại các tập đoàn đa quốc gia.', img: 'https://via.placeholder.com/300?text=Michael' },
    { name: 'Anna Nguyễn', role: 'Chuyên gia Phát âm', exp: '5 năm', desc: 'Giúp học viên xóa bỏ rào cản giọng địa phương, tự tin giao tiếp chuẩn Mỹ.', img: 'https://via.placeholder.com/300?text=Anna' },
  ];

  return (
    <div className="font-sans py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Đội ngũ Giảng viên Tinh hoa</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">100% Giảng viên tại Lumina Academy có chứng chỉ giảng dạy quốc tế (CELTA/TESOL) và chứng chỉ IELTS 8.0+ / TOEIC 990.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((inst, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <img src={inst.img} alt={inst.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-1">{inst.name}</h3>
                <p className="text-orange-500 text-sm font-bold mb-3">{inst.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{inst.desc}</p>
                <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-wider border-t border-gray-200 pt-4">
                  <span>Kinh nghiệm: {inst.exp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;