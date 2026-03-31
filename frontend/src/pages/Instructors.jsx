import React from 'react';

// Đã thêm 1 giảng viên nữa cho chẵn 4 người, lên giao diện lưới (grid) sẽ rất đẹp
const DUMMY_INSTRUCTORS = [
  { 
    id: 1, 
    name: 'Dr. Minh Nguyen', 
    title: 'Chuyên gia IELTS Quốc tế', 
    experience: '15 năm', 
    courses: 12, 
    rating: 5.0, 
    bio: 'Chuyên gia luyện thi IELTS với phương pháp tư duy logic, giúp hàng ngàn học viên chinh phục band 7.5+.', 
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?&fit=crop&w=400&q=80' 
  },
  { 
    id: 2, 
    name: 'Ms. Lan Huong', 
    title: 'Thạc sĩ Anh văn Giao tiếp', 
    experience: '10 năm', 
    courses: 8, 
    rating: 4.9, 
    bio: 'Nổi tiếng với phương pháp dạy giao tiếp phản xạ tự nhiên, xóa bỏ rào cản sợ nói cho người mất gốc.', 
    avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=400&q=80' 
  },
  { 
    id: 3, 
    name: 'Mr. David Smith', 
    title: 'Cựu giám khảo TOEIC', 
    experience: '12 năm', 
    courses: 10, 
    rating: 4.9, 
    bio: 'Chuyên sâu về tiếng Anh doanh nghiệp và luyện thi TOEIC thực chiến, mang lại lộ trình học tinh gọn nhất.', 
    avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&fit=crop&w=400&q=80' 
  },
  { 
    id: 4, 
    name: 'Ms. Anna Nguyễn', 
    title: 'Chuyên gia Phát âm', 
    experience: '8 năm', 
    courses: 6, 
    rating: 4.8, 
    bio: 'Tốt nghiệp xuất sắc Ngôn ngữ Anh. Giúp học viên chuẩn hóa phát âm, tự tin giao tiếp chuẩn giọng Mỹ.', 
    avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?&fit=crop&w=400&q=80' 
  },
];

const Instructors = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      
      {/* 🌟 HERO SECTION: TIÊU ĐỀ & GIỚI THIỆU CHUYÊN NGHIỆP */}
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden">
        {/* Hào quang mờ trang trí */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-orange-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          
          {/* Slogan */}
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Học từ những người giỏi nhất
          </span>
          
          {/* Tiêu đề Phông chữ đậm, khoảng cách chữ khít (tracking-tight) */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Đội ngũ Giảng viên <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Lumina Academy
            </span>
          </h1>
          
          {/* Đoạn giới thiệu */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Không chỉ là những chuyên gia ngôn ngữ hàng đầu, giảng viên của chúng tôi còn là những người truyền cảm hứng, tận tâm đồng hành cùng bạn trên con đường phá vỡ rào cản ngoại ngữ.
          </p>
        </div>
      </section>

      {/* 🌟 DANH SÁCH GIẢNG VIÊN */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {DUMMY_INSTRUCTORS.map(instr => (
              <div 
                key={instr.id} 
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Avatar có hiệu ứng viền phát sáng khi hover */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                    src={instr.avatar_url} 
                    alt={instr.name} 
                    className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-white shadow-lg" 
                  />
                </div>
                
                {/* Thông tin giảng viên */}
                <h2 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-orange-500 transition-colors">
                  {instr.name}
                </h2>
                <p className="text-sm text-orange-600 font-bold mb-5 bg-orange-50 px-3 py-1 rounded-lg">
                  {instr.title}
                </p>
                
                {/* Chỉ số kinh nghiệm */}
                <div className="flex gap-4 text-xs font-bold text-gray-500 mb-6 bg-gray-50 w-full justify-center py-3 rounded-xl border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-navy-900 text-base">{instr.experience}</span>
                    <span className="text-[10px] uppercase">Kinh nghiệm</span>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="flex flex-col">
                    <span className="text-navy-900 text-base">{instr.courses}</span>
                    <span className="text-[10px] uppercase">Khóa học</span>
                  </div>
                </div>
                
                {/* Mô tả */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">
                  "{instr.bio}"
                </p>
                
                {/* Nút bấm */}
                <button className="text-navy-900 font-bold hover:text-orange-500 transition-colors flex items-center gap-2 group-hover:underline border-t border-gray-100 w-full pt-4 justify-center">
                  Xem chi tiết hồ sơ <span>→</span>
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 🌟 BANNER KÊU GỌI HÀNH ĐỘNG (CTA) DƯỚI CÙNG */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            Bạn muốn trở thành giảng viên tại Lumina?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Chúng tôi luôn chào đón những chuyên gia ngôn ngữ tâm huyết gia nhập đội ngũ.
          </p>
          <button className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all">
            Ứng tuyển ngay
          </button>
        </div>
      </section>

    </div>
  );
};

export default Instructors;