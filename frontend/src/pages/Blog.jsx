import React, { useState } from 'react';

const BLOG_POSTS = [
  { id: 1, title: 'Bí kíp đạt IELTS 8.0 trong 3 tháng với phương pháp Shadowing', category: 'Góc học tập', date: '15/10/2023', author: 'Dr. Minh Nguyen', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80', excerpt: 'Chia sẻ lộ trình học tập chi tiết và các tài liệu cần thiết để bạn có thể bứt phá điểm số IELTS...', content: 'Shadowing là phương pháp bắt chước y hệt ngữ điệu, cách ngắt nghỉ của người bản xứ. Để đạt IELTS 8.0 Speaking và Listening, bạn cần thực hành mỗi ngày ít nhất 30 phút. Các bước bao gồm: \n1. Chọn nguồn audio chuẩn (BBC, CNN). \n2. Nghe và nhìn script. \n3. Đọc nhẩm theo audio. \n4. Tắt script và nói đuổi theo.' },
  { id: 2, title: '5 lỗi sai ngữ pháp "chết người" thường gặp trong giao tiếp', category: 'Kinh nghiệm', date: '12/10/2023', author: 'Ms. Lan Huong', image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80', excerpt: 'Người Việt học tiếng Anh thường mắc những lỗi nào khi giao tiếp thực tế với người bản xứ?...', content: 'Có 5 lỗi phổ biến nhất: \n1. Quên chia động từ ở ngôi thứ 3 số ít. \n2. Nhầm lẫn giữa Much và Many. \n3. Quên mạo từ A/An/The. \n4. Lạm dụng thì hiện tại tiếp diễn. \n5. Dịch word-by-word từ tiếng Việt sang tiếng Anh.' },
  { id: 3, title: 'Nên chọn Business English hay Tiếng Anh giao tiếp thường?', category: 'Định hướng', date: '08/10/2023', author: 'Mr. David Smith', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', excerpt: 'Nên chọn khóa học nào để phục vụ cho công việc thăng tiến? Đọc bài viết này để có quyết định...', content: 'Tiếng Anh giao tiếp thông thường tập trung vào đời sống hàng ngày (đi siêu thị, hỏi đường). Trong khi đó, Business English cung cấp từ vựng chuyên ngành, cách viết email chuyên nghiệp, kỹ năng đàm phán và thuyết trình trong phòng họp. Tùy vào mục tiêu nghề nghiệp mà bạn nên có lựa chọn phù hợp.' },
  { id: 4, title: 'Cập nhật cấu trúc đề thi TOEIC năm 2024 mới nhất', category: 'Tin tức', date: '01/10/2023', author: 'Admin Lumina', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80', excerpt: 'Cập nhật cấu trúc đề thi TOEIC format mới nhất và những lưu ý quan trọng khi đăng ký dự thi...', content: 'Từ năm 2024, đề thi TOEIC có một số thay đổi nhỏ ở Part 3, 4 (Listening) và Part 7 (Reading) với việc xuất hiện tin nhắn nhóm chat và cấu trúc đoạn văn đa phương tiện. Bài thi đánh giá sát hơn năng lực sử dụng ngôn ngữ trong môi trường làm việc hiện đại.' },
  { id: 5, title: 'Làm thế nào để duy trì động lực học ngoại ngữ?', category: 'Góc học tập', date: '28/09/2023', author: 'Ms. Anna Nguyễn', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80', excerpt: 'Sự chán nản là kẻ thù lớn nhất. Hãy áp dụng quy tắc 5 phút để đánh lừa bộ não của bạn...', content: 'Thay vì đặt mục tiêu học 2 tiếng/ngày, hãy cam kết chỉ học đúng 5 phút. Khi đã ngồi vào bàn học 5 phút, bộ não sẽ tự động muốn làm tiếp. Ngoài ra, hãy gắn việc học tiếng Anh với sở thích (như xem phim, nghe nhạc) để không cảm thấy áp lực.' },
  { id: 6, title: 'Top 10 Podcast luyện nghe IELTS từ cơ bản đến nâng cao', category: 'Tài liệu', date: '25/09/2023', author: 'Dr. Minh Nguyen', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80', excerpt: 'Nghe podcast là cách tắm ngôn ngữ hiệu quả nhất. Dưới đây là danh sách các kênh bạn nên nghe...', content: '1. 6 Minute English (BBC)\n2. IELTS Energy (BBC)\n3. TED Radio Hour\n4. All Ears English Podcast\n5. Luke’s English Podcast\nHãy nghe chủ động (có chép chính tả) và nghe thụ động (khi nấu ăn, dọn dẹp).' },
];

const Blog = () => {
  // State để lưu trữ bài viết đang được click để mở Popup
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased relative">
      <section className="bg-navy-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog & Tin tức</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Cập nhật kiến thức tiếng Anh bổ ích, mẹo học tập và tin tức từ Lumina Academy.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer group"
                onClick={() => setSelectedPost(post)} // MỞ POPUP KHI CLICK
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img src={post.image} alt={post.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-3 gap-3 font-semibold">
                    <span>📅 {post.date}</span>
                    <span>✍️ {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                  <span className="text-orange-500 font-bold mt-auto inline-flex items-center gap-1 group-hover:underline">Đọc tiếp <span>→</span></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 POPUP (MODAL) CHI TIẾT TIN TỨC */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedPost(null)}>
          {/* Ngăn việc click vào nội dung bị đóng modal */}
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-white text-gray-500 hover:text-red-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-colors"
            >
              ✕
            </button>
            <img src={selectedPost.image} className="w-full h-64 object-cover rounded-t-3xl" alt="" />
            <div className="p-8">
              <div className="flex gap-3 mb-4">
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-lg">{selectedPost.category}</span>
                <span className="text-gray-500 text-xs font-semibold py-1">{selectedPost.date} - Bởi {selectedPost.author}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-900 mb-6">{selectedPost.title}</h2>
              <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;