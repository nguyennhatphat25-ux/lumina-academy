import React from 'react';

const DUMMY_INSTRUCTORS = [
  { 
    id: 1, 
    name: 'Dr. Minh Nguyen', 
    title: 'Giảng viên Chuyên gia IELTS', 
    experience: '15 năm', 
    courses: 12, 
    rating: 5.0, 
    bio: 'Chuyên gia luyện thi IELTS quốc tế với phương pháp tư duy logic, giúp hàng ngàn học viên chinh phục band 7.5+.', 
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?&fit=crop&w=400&q=80' 
  },
  { 
    id: 2, 
    name: 'Ms. Lan Huong', 
    title: 'Thạc sĩ Anh văn Giao tiếp', 
    experience: '10 năm', 
    courses: 8, 
    rating: 4.9, 
    bio: 'Nổi tiếng với các phương pháp dạy giao tiếp phản xạ tự nhiên, xóa bỏ rào cản sợ nói cho người mất gốc.', 
    avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=400&q=80' 
  },
  { 
    id: 3, 
    name: 'Mr. David Smith', 
    title: 'Chuyên gia TOEIC & Business English', 
    experience: '12 năm', 
    courses: 10, 
    rating: 4.9, 
    bio: 'Cựu giám khảo chấm thi quốc tế, chuyên sâu về tiếng Anh doanh nghiệp và luyện thi TOEIC thực chiến.', 
    avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&fit=crop&w=400&q=80' 
  },
];

const Instructors = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-navy-900 mb-2">Đội ngũ Giảng viên</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Chuyên gia ngoại ngữ, tâm huyết, và luôn đồng hành cùng bạn trên hành trình chinh phục tri thức.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DUMMY_INSTRUCTORS.map(instr => (
              <div key={instr.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <img src={instr.avatar_url} alt={instr.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-100 shadow-inner" />
                <h2 className="text-xl font-bold text-navy-900 mb-1">{instr.name}</h2>
                <p className="text-sm text-orange-500 font-semibold mb-3">{instr.title}</p>
                <div className="flex gap-4 text-xs font-bold text-gray-500 mb-6">
                  <span>EXP: {instr.experience}</span>
                  <span>| {instr.courses} Khóa học</span>
                  <span>| ★ {instr.rating}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">{instr.bio}</p>
                <button className="text-orange-500 font-bold hover:underline">Xem chi tiết các khóa học →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;