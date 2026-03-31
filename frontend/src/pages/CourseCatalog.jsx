import React, { useState, useEffect } from 'react';
import CourseListItem from '../components/CourseListItem';

// 🌟 DỮ LIỆU ĐƯỢC MỞ RỘNG (12 Khóa học)
const ENGLISH_COURSES_DB = [
  { id: 12, title: 'IELTS Masterclass 7.0+ Toàn diện', category: 'Luyện thi IELTS', price: 1490000, level: 'Nâng cao', rating: 4.9, description: 'Làm chủ cả 4 kỹ năng Nghe - Nói - Đọc - Viết. Khóa học thực chiến giúp bạn xây dựng tư duy logic.', thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80' },
  { id: 11, title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên', category: 'Anh văn Giao tiếp', price: 850000, level: 'Cơ bản', rating: 4.8, description: 'Học cách giao tiếp trong các tình huống thực tế đời sống, xóa bỏ rào cản sợ nói.', thumbnail_url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80' },
  { id: 10, title: 'TOEIC 850+ Chinh phục đỉnh cao', category: 'Luyện thi TOEIC', price: 1299000, level: 'Nâng cao', rating: 4.9, description: 'Lộ trình thực chiến luyện đề TOEIC 4 kỹ năng giúp bạn đạt band điểm mơ ước.', thumbnail_url: 'https://images.unsplash.com/photo-1513258496099-4816c02453f4?w=600&q=80' },
  { id: 9, title: 'Tiếng Anh Doanh Nghiệp (Business English)', category: 'Doanh nghiệp', price: 1100000, level: 'Trung cấp', rating: 4.9, description: 'Luyện kỹ năng email, thuyết trình, đàm phán bằng tiếng Anh chuyên nghiệp.', thumbnail_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80' },
  { id: 8, title: 'IELTS Foundation - Xây gốc 5.0+', category: 'Luyện thi IELTS', price: 890000, level: 'Cơ bản', rating: 4.7, description: 'Dành cho người mới bắt đầu hoặc mất gốc, xây dựng nền tảng ngữ pháp và từ vựng.', thumbnail_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80' },
  { id: 7, title: 'Chuyên sâu IELTS Writing & Speaking 6.5+', category: 'Luyện thi IELTS', price: 1250000, level: 'Trung cấp', rating: 5.0, description: 'Tập trung khắc phục lỗi sai, mở rộng vốn từ vựng học thuật và luyện phản xạ.', thumbnail_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80' },
  { id: 6, title: 'TOEIC Cơ bản 500+ (Mất gốc)', category: 'Luyện thi TOEIC', price: 750000, level: 'Cơ bản', rating: 4.6, description: 'Củng cố ngữ pháp và từ vựng cốt lõi thường gặp trong đề thi TOEIC.', thumbnail_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80' },
  { id: 5, title: 'Phát Âm Tiếng Anh Chuẩn Giọng Mỹ', category: 'Anh văn Giao tiếp', price: 650000, level: 'Cơ bản', rating: 4.8, description: 'Luyện IPA, trọng âm, nối âm giúp bạn nói tiếng Anh tự nhiên như người bản xứ.', thumbnail_url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80' },
  { id: 4, title: 'Tiếng Anh Trẻ Em Mầm Non (Kids Starter)', category: 'Trẻ em', price: 1500000, level: 'Cơ bản', rating: 4.9, description: 'Phương pháp học qua bài hát và trò chơi, giúp bé yêu thích tiếng Anh từ nhỏ.', thumbnail_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80' },
  { id: 3, title: 'IELTS Intensive Reading & Listening', category: 'Luyện thi IELTS', price: 950000, level: 'Trung cấp', rating: 4.8, description: 'Bí kíp Skimming, Scanning và Keyword bắt Keyword nhanh chuẩn xác 100%.', thumbnail_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80' },
  { id: 2, title: 'Tiếng Anh Thuyết Trình Trước Đám Đông', category: 'Doanh nghiệp', price: 1350000, level: 'Nâng cao', rating: 4.9, description: 'Vượt qua nỗi sợ, xây dựng cấu trúc bài nói và Body Language tự tin.', thumbnail_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
  { id: 1, title: 'Ngữ Pháp Tiếng Anh Toàn Diện 2024', category: 'Anh văn Giao tiếp', price: 590000, level: 'Cơ bản', rating: 4.7, description: 'Tổng hợp mọi cấu trúc ngữ pháp từ A-Z, thích hợp cho học sinh và sinh viên.', thumbnail_url: 'https://images.unsplash.com/photo-1456752003758-0aa34ab7f1fb?w=600&q=80' },
];

const categories = ['Tất cả', 'Luyện thi IELTS', 'Luyện thi TOEIC', 'Anh văn Giao tiếp', 'Doanh nghiệp', 'Trẻ em'];
const levels = ['Cơ bản', 'Trung cấp', 'Nâng cao'];

const CourseCatalog = () => {
  const [courses, setCourses] = useState(ENGLISH_COURSES_DB);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [activeLevels, setActiveLevels] = useState([]);
  const [sortBy, setSortBy] = useState('Mới nhất');

  const handleLevelToggle = (level) => {
    setActiveLevels(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]);
  };

  useEffect(() => {
    setLoading(true);
    let result = [...ENGLISH_COURSES_DB];

    if (activeCategory !== 'Tất cả') result = result.filter(c => c.category === activeCategory);
    if (activeLevels.length > 0) result = result.filter(c => activeLevels.includes(c.level));

    if (sortBy === 'Giá tăng dần') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Giá giảm dần') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Đánh giá cao') result.sort((a, b) => b.rating - a.rating);
    else result.sort((a, b) => b.id - a.id);

    setTimeout(() => { setCourses(result); setLoading(false); }, 400);
  }, [activeCategory, activeLevels, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-10 font-sans bg-gray-50 min-h-screen">
      
      {/* CỘT TRÁI - BỘ LỌC */}
      <aside className="w-full md:w-1/4 space-y-10">
        <div>
          <h2 className="text-xl font-extrabold text-navy-900 mb-1">Danh mục khóa học</h2>
          <ul className="space-y-2 mt-6">
            {categories.map(cat => (
              <li key={cat}>
                <button onClick={() => setActiveCategory(cat)} className={`w-full text-left px-5 py-3.5 rounded-2xl border transition-all font-bold text-sm ${activeCategory === cat ? 'bg-navy-900 text-white border-navy-900 shadow-md' : 'bg-white text-gray-600 hover:border-orange-500 hover:text-orange-500 border-gray-100'}`}>
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold text-navy-900 mb-4 text-lg">Cấp độ học</h3>
          <div className="space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            {levels.map(level => (
               <label key={level} className="flex items-center space-x-3 text-sm text-gray-700 cursor-pointer hover:text-orange-500 transition-colors">
                <input type="checkbox" checked={activeLevels.includes(level)} onChange={() => handleLevelToggle(level)} className="h-5 w-5 text-orange-500 rounded-md border-gray-300 focus:ring-orange-500 cursor-pointer" />
                <span className="font-bold">{level}</span>
               </label>
            ))}
          </div>
        </div>
      </aside>

      {/* CỘT PHẢI - DANH SÁCH */}
      <main className="w-full md:w-3/4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm gap-4">
          <p className="text-gray-500 font-medium">Tìm thấy <strong className="text-orange-500 text-lg">{courses.length}</strong> khóa học.</p>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-500">Sắp xếp theo:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-200 font-bold text-navy-900 bg-gray-50 rounded-xl px-4 py-2.5 cursor-pointer outline-none focus:border-orange-500">
              <option value="Mới nhất">Mới nhất</option>
              <option value="Giá tăng dần">Giá tăng dần</option>
              <option value="Giá giảm dần">Giá giảm dần</option>
              <option value="Đánh giá cao">Đánh giá cao</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-32"><div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-orange-500"></div></div>
        ) : (
          <div className="space-y-6">
            {courses.length > 0 ? courses.map(course => <CourseListItem key={course.id} course={course} />) : 
            <div className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm">
               <span className="text-6xl block mb-4">🕵️‍♂️</span>
               <h3 className="text-xl font-bold text-navy-900">Không tìm thấy khóa học phù hợp</h3>
               <p className="text-gray-500 mt-2">Thử bỏ bớt các bộ lọc bên trái xem sao nhé!</p>
            </div>}
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseCatalog;