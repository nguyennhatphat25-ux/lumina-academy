import React, { useState } from 'react';

const DUMMY_INSTRUCTORS = [
  { id: 1, name: 'Dr. Minh Nguyen', title: 'Chuyên gia IELTS Quốc tế', experience: '15 năm', courses: 12, rating: 5.0, bio: 'Chuyên gia luyện thi IELTS với phương pháp tư duy logic, giúp hàng ngàn học viên chinh phục band 7.5+.', detail: 'Dr. Minh Nguyen tốt nghiệp Tiến sĩ Ngôn ngữ học tại Úc. Từng là giám khảo chấm thi IELTS trong 5 năm. Triết lý giảng dạy: "Hiểu bản chất, không học vẹt".', avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
  { id: 2, name: 'Ms. Lan Huong', title: 'Thạc sĩ Anh văn Giao tiếp', experience: '10 năm', courses: 8, rating: 4.9, bio: 'Nổi tiếng với phương pháp dạy giao tiếp phản xạ tự nhiên, xóa bỏ rào cản sợ nói cho người mất gốc.', detail: 'Cô Lan Hương tốt nghiệp Thạc sĩ TESOL tại Đại học Victoria. Phong cách dạy vui vẻ, năng động, tập trung vào sửa lỗi phát âm và phản xạ tức thì.', avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
  { id: 3, name: 'Mr. David Smith', title: 'Cựu giám khảo TOEIC', experience: '12 năm', courses: 10, rating: 4.9, bio: 'Chuyên sâu về tiếng Anh doanh nghiệp và luyện thi TOEIC thực chiến, mang lại lộ trình học tinh gọn nhất.', detail: 'Thầy David đến từ Anh Quốc, có chứng chỉ giảng dạy quốc tế CELTA. Rất nghiêm khắc nhưng cực kỳ hiệu quả trong việc dạy kỹ năng làm bài thi TOEIC.', avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
  { id: 4, name: 'Ms. Anna Nguyễn', title: 'Chuyên gia Phát âm', experience: '8 năm', courses: 6, rating: 4.8, bio: 'Giúp học viên chuẩn hóa phát âm, tự tin giao tiếp chuẩn giọng Anh-Mỹ với lộ trình độc quyền.', detail: 'Sở hữu kênh YouTube triệu view về phát âm. Cô Anna chuyên trị những lỗi phát âm kinh điển của người Việt và hướng dẫn nối âm, luyến âm như người bản xứ.', avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { id: 5, name: 'Mr. Michael Chen', title: 'Chuyên gia Business English', experience: '14 năm', courses: 9, rating: 4.9, bio: 'Chuyên gia huấn luyện tiếng Anh doanh nghiệp cho các tập đoàn đa quốc gia, kỹ năng đàm phán đỉnh cao.', detail: 'Từng là Giám đốc cấp cao tại tập đoàn đa quốc gia. Thầy chuyên dạy cách viết Email thương mại, thuyết trình, đàm phán hợp đồng 100% bằng tiếng Anh.', avatar_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
  { id: 6, name: 'Ms. Sarah Jenkins', title: 'Thạc sĩ TESOL', experience: '9 năm', courses: 7, rating: 4.8, bio: 'Sáng lập phương pháp học từ vựng qua ngữ cảnh, chuyên trị kỹ năng Writing Task 2 trong IELTS.', detail: 'Cô Sarah là người Mỹ, rất giỏi trong việc hướng dẫn cách lên ý tưởng (Brainstorming) và sắp xếp đoạn văn logic cho phần thi Writing khó nhằn.', avatar_url: 'https://images.unsplash.com/photo-1598550874175-4d0ef43eeed7?w=400&q=80' },
  { id: 7, name: 'Dr. John Vu', title: 'Chuyên gia Ngữ Pháp', experience: '20 năm', courses: 15, rating: 5.0, bio: 'Cây đại thụ trong làng ngữ pháp tiếng Anh. Biến những cấu trúc phức tạp trở nên cực kỳ dễ hiểu.', detail: 'Tác giả của hơn 10 đầu sách học tiếng Anh nổi tiếng. Phương pháp giảng dạy của thầy John giúp người mất gốc xây dựng lại nền tảng vững như bàn thạch.', avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { id: 8, name: 'Ms. Emily Tran', title: 'Giảng viên Tiếng Anh Trẻ Em', experience: '7 năm', courses: 5, rating: 4.9, bio: 'Tràn đầy năng lượng, giúp các học viên nhí yêu thích tiếng Anh một cách tự nhiên thông qua trò chơi.', detail: 'Có chứng chỉ giảng dạy trẻ em quốc tế. Các lớp học của cô Emily luôn tràn ngập tiếng cười, bài hát và các hoạt động thể chất giúp bé tiếp thu nhanh chóng.', avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

const Instructors = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      <section className="bg-navy-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Học từ những người giỏi nhất</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Đội ngũ Giảng viên Lumina</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">Không chỉ là chuyên gia ngôn ngữ, giảng viên của chúng tôi còn là người truyền cảm hứng.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DUMMY_INSTRUCTORS.map(instr => (
              <div key={instr.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                   onClick={() => setSelectedInstructor(instr)}>
                <div className="relative mb-6">
                  <img src={instr.avatar_url} alt={instr.name} className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-gray-100 group-hover:border-orange-200 transition-colors" />
                </div>
                <h2 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-orange-500">{instr.name}</h2>
                <p className="text-sm text-orange-600 font-bold mb-5 bg-orange-50 px-3 py-1 rounded-lg">{instr.title}</p>
                <div className="flex gap-4 text-xs font-bold text-gray-500 mb-6 bg-gray-50 w-full justify-center py-3 rounded-xl border border-gray-100">
                  <div className="flex flex-col"><span className="text-navy-900 text-base">{instr.experience}</span><span className="text-[10px] uppercase">Kinh nghiệm</span></div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="flex flex-col"><span className="text-navy-900 text-base">{instr.courses}</span><span className="text-[10px] uppercase">Khóa học</span></div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">"{instr.bio}"</p>
                <button className="text-orange-500 font-bold group-hover:underline">Xem hồ sơ →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 POPUP CHI TIẾT GIẢNG VIÊN */}
      {selectedInstructor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedInstructor(null)}>
          <div className="bg-white rounded-[2rem] max-w-3xl w-full p-8 relative flex flex-col md:flex-row gap-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedInstructor(null)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">✕</button>
            <div className="md:w-1/3 text-center flex flex-col items-center">
               <img src={selectedInstructor.avatar_url} className="w-48 h-48 rounded-full object-cover border-8 border-orange-50 shadow-lg mb-4" alt=""/>
               <span className="text-orange-500 font-bold text-sm bg-orange-50 px-4 py-1 rounded-full">{selectedInstructor.title}</span>
            </div>
            <div className="md:w-2/3">
               <h2 className="text-4xl font-extrabold text-navy-900 mb-2">{selectedInstructor.name}</h2>
               <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mb-6">
                  <span>🎓 {selectedInstructor.courses} Khóa học</span>
                  <span>⭐ Đánh giá: {selectedInstructor.rating}/5</span>
                  <span>⏳ KN: {selectedInstructor.experience}</span>
               </div>
               <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 mb-6">
                 <p className="text-gray-700 italic font-medium leading-relaxed">"{selectedInstructor.bio}"</p>
               </div>
               <h3 className="font-bold text-navy-900 mb-2 text-lg">Giới thiệu chi tiết</h3>
               <p className="text-gray-600 leading-relaxed">{selectedInstructor.detail}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructors;