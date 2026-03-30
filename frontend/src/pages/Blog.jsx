import React from 'react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  { id: 1, title: 'Bí kíp đạt IELTS 8.0 trong 3 tháng với phương pháp Shadowing', category: 'Góc học tập', date: '15/10/2023', author: 'Dr. Minh Nguyen', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', excerpt: 'Chia sẻ lộ trình học tập chi tiết và các tài liệu cần thiết để bạn có thể bứt phá điểm số IELTS trong thời gian ngắn nhất mà không cần cày cuốc ngày đêm.' },
  { id: 2, title: '5 lỗi sai ngữ pháp "chết người" thường gặp trong giao tiếp', category: 'Kinh nghiệm', date: '12/10/2023', author: 'Ms. Lan Huong', image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', excerpt: 'Người Việt học tiếng Anh thường mắc những lỗi nào khi giao tiếp thực tế với người bản xứ? Cùng tìm hiểu và khắc phục ngay hôm nay.' },
  { id: 3, title: 'Nên chọn Business English hay Tiếng Anh giao tiếp thường?', category: 'Định hướng', date: '08/10/2023', author: 'Mr. David Smith', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', excerpt: 'Nên chọn khóa học nào để phục vụ cho công việc thăng tiến? Đọc bài viết này để có quyết định chính xác nhất cho sự nghiệp của bạn.' },
  { id: 4, title: 'Cập nhật cấu trúc đề thi TOEIC năm 2024 mới nhất', category: 'Tin tức', date: '01/10/2023', author: 'Admin Lumina', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', excerpt: 'Cập nhật cấu trúc đề thi TOEIC format mới nhất và những lưu ý quan trọng khi đăng ký dự thi tại trung tâm IIG Việt Nam.' },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-navy-900 mb-4">Blog & Tin tức</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Cập nhật những kiến thức tiếng Anh bổ ích, mẹo học tập và tin tức mới nhất từ Lumina Academy.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-orange-600 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-3 gap-3 font-semibold">
                    <span>📅 {post.date}</span>
                    <span>✍️ {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="text-orange-500 font-bold hover:underline mt-auto inline-flex items-center gap-1">
                    Đọc tiếp <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;