import React, { useState, useEffect } from 'react';
import CourseListItem from '../components/CourseListItem';

// DỮ LIỆU GỐC VỚI ẢNH ĐẸP
const ENGLISH_COURSES_DB = [
  { id: 7, title: 'IELTS Masterclass 7.0+ Toàn diện', category: 'Luyện thi IELTS', lessons: 45, duration: '60 giờ', level: 'Nâng cao', price: 1490000, studentsCount: 1520, rating: 4.9, instructor: 'Dr. Minh Nguyen', description: 'Làm chủ cả 4 kỹ năng Nghe - Nói - Đọc - Viết. Khóa học thực chiến giúp bạn xây dựng tư duy logic.', thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: 'IELTS Foundation - Xây gốc 5.0+', category: 'Luyện thi IELTS', lessons: 30, duration: '45 giờ', level: 'Cơ bản', price: 890000, studentsCount: 950, rating: 4.8, instructor: 'Ms. Lan Huong', description: 'Dành cho người mới bắt đầu hoặc mất gốc, xây dựng nền tảng ngữ pháp và từ vựng.', thumbnail_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 5, title: 'Chuyên sâu IELTS Writing & Speaking 6.5+', category: 'Luyện thi IELTS', lessons: 25, duration: '35 giờ', level: 'Trung cấp', price: 1250000, studentsCount: 780, rating: 5.0, instructor: 'Mr. David Smith', description: 'Tập trung khắc phục lỗi sai, mở rộng vốn từ vựng học thuật và luyện phản xạ nói trôi chảy.', thumbnail_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên', category: 'Anh văn Giao tiếp', lessons: 24, duration: '32 giờ', level: 'Cơ bản', price: 850000, studentsCount: 2100, rating: 4.7, instructor: 'Ms. Anna Nguyễn', description: 'Học cách giao tiếp trong các tình huống thực tế đời sống, xóa bỏ rào cản sợ nói.', thumbnail_url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Tiếng Anh Doanh Nghiệp (Business English)', category: 'Anh văn Giao tiếp', lessons: 20, duration: '30 giờ', level: 'Trung cấp', price: 1100000, studentsCount: 620, rating: 4.9, instructor: 'Mr. Michael Chen', description: 'Luyện kỹ năng email, thuyết trình, đàm phán bằng tiếng Anh chuyên nghiệp.', thumbnail_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'TOEIC 850+ Chinh phục đỉnh cao', category: 'Luyện thi TOEIC', lessons: 40, duration: '55 giờ', level: 'Nâng cao', price: 1299000, studentsCount: 1890, rating: 4.9, instructor: 'Dr. Minh Nguyen', description: 'Lộ trình thực chiến luyện đề TOEIC 4 kỹ năng giúp bạn đạt band điểm mơ ước.', thumbnail_url: 'https://images.unsplash.com/photo-1513258496099-4816c02453f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 1, title: 'TOEIC Cơ bản 500+ Dành cho người mất gốc', category: 'Luyện thi TOEIC', lessons: 32, duration: '40 giờ', level: 'Cơ bản', price: 750000, studentsCount: 1300, rating: 4.6, instructor: 'Ms. Lan Huong', description: 'Củng cố ngữ pháp và từ vựng cốt lõi thường gặp trong đề thi TOEIC.', thumbnail_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const categories = ['Tất cả', 'Luyện thi IELTS', 'Anh văn Giao tiếp', 'Luyện thi TOEIC'];
const levels = ['Cơ bản', 'Trung cấp', 'Nâng cao'];

const CourseCatalog = () => {
  const [courses, setCourses] = useState(ENGLISH_COURSES_DB);
  const [loading, setLoading] = useState(true);
  
  // Các State dùng để Lọc và Sắp xếp
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [activeLevels, setActiveLevels] = useState([]); // Mảng chứa các cấp độ đang được tích
  const [sortBy, setSortBy] = useState('Mới nhất');

  // Hàm xử lý khi người dùng tích/bỏ tích ô Cấp độ
  const handleLevelToggle = (level) => {
    setActiveLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) // Nếu đã có thì bỏ ra
        : [...prev, level]              // Nếu chưa có thì thêm vào
    );
  };

  // Hiệu ứng chạy mỗi khi State (Danh mục, Cấp độ, Sắp xếp) thay đổi
  useEffect(() => {
    setLoading(true);
    
    // 1. Khởi tạo mảng kết quả
    let result = [...ENGLISH_COURSES_DB];

    // 2. Lọc theo Danh mục
    if (activeCategory !== 'Tất cả') {
      result = result.filter(course => course.category === activeCategory);
    }

    // 3. Lọc theo Cấp độ (nếu có tích chọn)
    if (activeLevels.length > 0) {
      result = result.filter(course => activeLevels.includes(course.level));
    }

    // 4. Sắp xếp dữ liệu
    if (sortBy === 'Giá tăng dần') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Giá giảm dần') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Đánh giá cao') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // Mới nhất (xếp theo ID giảm dần)
      result.sort((a, b) => b.id - a.id);
    }

    // Cập nhật lại danh sách hiển thị
    setTimeout(() => {
      setCourses(result);
      setLoading(false);
    }, 300); // Thêm delay nhỏ tạo cảm giác loading thật
  }, [activeCategory, activeLevels, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-10 font-sans bg-gray-50 min-h-screen">
      
      {/* SIDEBAR BỘ LỌC */}
      <aside className="w-full md:w-1/4 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Danh mục Lộ trình</h2>
          <p className="text-sm text-gray-500 mb-6">Chinh phục tri thức ngoại ngữ</p>
          
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat}>
                <button 
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl border transition-colors ${
                    activeCategory === cat 
                      ? 'bg-orange-50 text-orange-500 font-semibold border-orange-100' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium border-transparent'
                  }`}
                >
                  <span className="mr-3">{cat === 'Tất cả' ? '🌐' : cat === 'Luyện thi IELTS' ? '📚' : cat === 'Anh văn Giao tiếp' ? '🗣️' : '🎯'}</span> {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Cấp độ học</h3>
          <div className="space-y-3 bg-white p-5 rounded-xl border border-gray-100">
            {levels.map(level => (
               <label key={level} className="flex items-center space-x-3 text-sm text-gray-700 cursor-pointer hover:text-orange-500 transition-colors">
                <input 
                  type="checkbox" 
                  checked={activeLevels.includes(level)}
                  onChange={() => handleLevelToggle(level)}
                  className="form-checkbox h-5 w-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer" 
                />
                <span className="font-medium">{level}</span>
               </label>
            ))}
          </div>
        </div>
      </aside>

      {/* DANH SÁCH KHÓA HỌC */}
      <main className="w-full md:w-3/4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-navy-900 mb-2">Tất cả lớp học</h1>
            <p className="text-gray-500">Tìm thấy <strong className="text-orange-500">{courses.length}</strong> khóa học phù hợp với bạn.</p>
          </div>
          
          {/* Ô SẮP XẾP */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-sm text-gray-500 pl-2 font-medium">Sắp xếp:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-transparent rounded-lg px-4 py-2 text-sm font-bold text-navy-900 bg-gray-50 cursor-pointer outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Mới nhất">Mới nhất</option>
              <option value="Giá tăng dần">Giá tăng dần</option>
              <option value="Giá giảm dần">Giá giảm dần</option>
              <option value="Đánh giá cao">Đánh giá cao</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-orange-500"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {courses.length > 0 ? courses.map(course => (
              <CourseListItem key={course.id} course={course} />
            )) : (
              <div className="bg-white rounded-3xl p-20 text-center border border-gray-100 shadow-sm">
                <p className="text-7xl mb-6">🤷‍♂️</p>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Không tìm thấy khóa học</h3>
                <p className="text-gray-500 font-medium">Thử bỏ bớt các bộ lọc để xem nhiều kết quả hơn nhé.</p>
                <button 
                  onClick={() => { setActiveCategory('Tất cả'); setActiveLevels([]); }}
                  className="mt-6 text-orange-500 font-bold hover:underline"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseCatalog;