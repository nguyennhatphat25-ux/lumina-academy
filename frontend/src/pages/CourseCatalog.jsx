import React, { useState, useEffect } from 'react';
// LƯU Ý: Nếu lúc nãy bạn chưa kéo file CourseListItem ra ngoài, thì sửa dòng dưới thành: import CourseListItem from '../components/layout/CourseListItem';
import CourseListItem from '../components/CourseListItem';

const CourseCatalog = () => {
  // ĐÂY CHÍNH LÀ BIẾN BỊ THIẾU KHIẾN WEB BỊ TRẮNG NÈ:
  const categories = ['Tất cả', 'Luyện thi IELTS', 'Anh văn Giao tiếp', 'Luyện thi TOEIC'];

  const ENGLISH_COURSES_DB = [
    { id: 1, title: 'IELTS Masterclass 7.0+ Toàn diện', category: 'Luyện thi IELTS', lessons: 45, duration: '60 giờ', level: 'Nâng cao', price: 1490000, studentsCount: 1520, rating: 4.9, instructor: 'Dr. Minh Nguyen', description: 'Làm chủ cả 4 kỹ năng Nghe - Nói - Đọc - Viết. Khóa học thực chiến giúp bạn xây dựng tư duy logic.', thumbnail_url: 'https://via.placeholder.com/400x250/0A1526/FFFFFF?text=IELTS+7.0' },
    { id: 2, title: 'IELTS Foundation - Xây gốc 5.0+', category: 'Luyện thi IELTS', lessons: 30, duration: '45 giờ', level: 'Cơ bản', price: 890000, studentsCount: 950, rating: 4.8, instructor: 'Ms. Lan Huong', description: 'Dành cho người mới bắt đầu hoặc mất gốc, xây dựng nền tảng ngữ pháp và từ vựng.', thumbnail_url: 'https://via.placeholder.com/400x250/F58220/FFFFFF?text=IELTS+5.0' },
    { id: 3, title: 'Chuyên sâu IELTS Writing & Speaking 6.5+', category: 'Luyện thi IELTS', lessons: 25, duration: '35 giờ', level: 'Trung cấp', price: 1250000, studentsCount: 780, rating: 5.0, instructor: 'Mr. David Smith', description: 'Tập trung khắc phục lỗi sai, mở rộng vốn từ vựng học thuật và luyện phản xạ nói trôi chảy.', thumbnail_url: 'https://via.placeholder.com/400x250/112240/FFFFFF?text=IELTS+WS' },
    { id: 4, title: 'Tiếng Anh Giao Tiếp Phản Xạ Tự Nhiên', category: 'Anh văn Giao tiếp', lessons: 24, duration: '32 giờ', level: 'Cơ bản', price: 850000, studentsCount: 2100, rating: 4.7, instructor: 'Ms. Anna Nguyễn', description: 'Học cách giao tiếp trong các tình huống thực tế đời sống, xóa bỏ rào cản sợ nói.', thumbnail_url: 'https://via.placeholder.com/400x250/1E293B/FFFFFF?text=Communication' },
    { id: 5, title: 'Tiếng Anh Doanh Nghiệp Cấp Tốc (Business English)', category: 'Anh văn Giao tiếp', lessons: 20, duration: '30 giờ', level: 'Trung cấp', price: 1100000, studentsCount: 620, rating: 4.9, instructor: 'Mr. Michael Chen', description: 'Luyện kỹ năng email, thuyết trình, đàm phán bằng tiếng Anh chuyên nghiệp.', thumbnail_url: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Business' },
    { id: 6, title: 'TOEIC 850+ Chinh phục đỉnh cao', category: 'Luyện thi TOEIC', lessons: 40, duration: '55 giờ', level: 'Nâng cao', price: 1299000, studentsCount: 1890, rating: 4.9, instructor: 'Dr. Minh Nguyen', description: 'Lộ trình thực chiến luyện đề TOEIC 4 kỹ năng giúp bạn đạt band điểm mơ ước.', thumbnail_url: 'https://via.placeholder.com/400x250/0A1526/FFFFFF?text=TOEIC+850' },
    { id: 7, title: 'TOEIC Cơ bản 500+ Dành cho người mất gốc', category: 'Luyện thi TOEIC', lessons: 32, duration: '40 giờ', level: 'Cơ bản', price: 750000, studentsCount: 1300, rating: 4.6, instructor: 'Ms. Lan Huong', description: 'Củng cố ngữ pháp và từ vựng cốt lõi thường gặp trong đề thi TOEIC.', thumbnail_url: 'https://via.placeholder.com/400x250/F58220/FFFFFF?text=TOEIC+500' },
  ];

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  // Logic lọc dữ liệu
  useEffect(() => {
    setLoading(true);
    let filteredCourses = ENGLISH_COURSES_DB;
    if (activeCategory !== 'Tất cả') {
      filteredCourses = ENGLISH_COURSES_DB.filter(course => course.category === activeCategory);
    }
    setCourses(filteredCourses);
    setLoading(false);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-10 font-sans bg-gray-50 min-h-screen">
      
      {/* SIDEBAR BỘ LỌC */}
      <aside className="w-1/4 hidden md:block space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Danh mục Lộ trình</h2>
          <p className="text-sm text-gray-500 mb-6">Chinh phục tri thức ngoại ngữ</p>
          
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat}>
                <button 
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl border transition-colors ${activeCategory === cat ? 'bg-orange-50 text-orange-500 font-semibold border-orange-100' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium border-transparent'}`}
                >
                  <span className="mr-3">{cat === 'Tất cả' ? '🌐' : cat === 'Luyện thi IELTS' ? '📚' : cat === 'Anh văn Giao tiếp' ? '🗣️' : '🎯'}</span> {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Cấp độ học</h3>
          <div className="space-y-3">
            {['Cơ bản', 'Trung cấp', 'Nâng cao'].map(level => (
               <label key={level} className="flex items-center space-x-3 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500" />
                <span>{level}</span>
               </label>
            ))}
          </div>
        </div>
      </aside>

      {/* DANH SÁCH KHÓA HỌC */}
      <main className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tất cả lớp học</h1>
            <p className="text-gray-500">Đầu tư vào bản thân là khoản đầu tư tốt nhất.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-100">
            <span className="text-sm text-gray-500 pl-2">Sắp xếp:</span>
            <select className="border-transparent rounded-lg px-4 py-1.5 text-sm font-medium focus:outline-none focus:ring-0 text-gray-700 bg-gray-50 cursor-pointer">
              <option>Mới nhất</option>
              <option>Giá tăng dần</option>
              <option>Đánh giá cao</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 font-medium">Đang tải dữ liệu lớp học...</div>
        ) : (
          <div className="space-y-6">
            {courses.length > 0 ? courses.map(course => (
              <CourseListItem key={course.id} course={course} />
            )) : (
              <div className="bg-white rounded-2xl p-20 text-center border border-gray-100 shadow-sm">
                <p className="text-7xl mb-6">🤷‍♂️</p>
                <p className="text-gray-500 font-medium">Chưa có lớp học nào trong danh mục này.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseCatalog;