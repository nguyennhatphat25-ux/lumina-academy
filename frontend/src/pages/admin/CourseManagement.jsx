import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';

const CourseManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null); // Lưu ID của khóa học đang sửa
  
  // State quản lý danh sách khóa học
  const [courses, setCourses] = useState([
    { id: 1, title: 'IELTS Masterclass 7.0+', category: 'Luyện thi IELTS', price: '1490000', status: 'ĐANG BÁN', students: 1520 },
    { id: 2, title: 'Tiếng Anh Giao Tiếp', category: 'Anh văn Giao tiếp', price: '850000', status: 'ĐANG BÁN', students: 850 },
    { id: 3, title: 'Luyện thi TOEIC 850+', category: 'Luyện thi TOEIC', price: '1299000', status: 'BẢN NHÁP', students: 0 },
  ]);

  // State quản lý dữ liệu Form
  const [formData, setFormData] = useState({ title: '', category: 'Luyện thi IELTS', price: '', instructor: '', description: '' });

  // === CÁC HÀM XỬ LÝ (CRUD) ===

  // 1. Mở Form Thêm Mới
  const handleOpenAddForm = () => {
    setFormData({ title: '', category: 'Luyện thi IELTS', price: '', instructor: '', description: '' });
    setEditingId(null);
    setShowAddForm(!showAddForm);
  };

  // 2. Mở Form Sửa
  const handleEdit = (course) => {
    setFormData({
      title: course.title,
      category: course.category,
      price: course.price.replace(/\D/g, ''), // Bỏ các ký tự không phải số
      instructor: '',
      description: ''
    });
    setEditingId(course.id);
    setShowAddForm(true);
    // Cuộn lên đầu trang mượt mà
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Xóa Khóa Học
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa khóa học này không? Hành động này không thể hoàn tác!")) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  // 4. Lưu Khóa Học (Cả Thêm mới và Cập nhật)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Logic Cập nhật khóa học đang sửa
      setCourses(courses.map(course => 
        course.id === editingId 
        ? { ...course, title: formData.title, category: formData.category, price: formData.price } 
        : course
      ));
      alert("Đã cập nhật khóa học thành công!");
    } else {
      // Logic Thêm khóa học mới
      const newCourse = {
        id: Date.now(), // Tạo ID ngẫu nhiên bằng thời gian thực
        title: formData.title,
        category: formData.category,
        price: formData.price,
        status: 'BẢN NHÁP',
        students: 0
      };
      setCourses([...courses, newCourse]);
      alert("Đã thêm khóa học mới thành công!");
    }
    
    setShowAddForm(false);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Quản lý Khóa học</h1>
        <button onClick={handleOpenAddForm} className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-sm">
          {showAddForm ? 'Hủy / Đóng Form' : '+ Thêm khóa học mới'}
        </button>
      </div>

      {/* FORM THÊM / SỬA KHÓA HỌC */}
      {showAddForm && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 animate-fade-in">
          <h2 className="text-xl font-bold text-navy-900 mb-6 border-b pb-4">
            {editingId ? 'Sửa thông tin khóa học' : 'Tạo khóa học Tiếng Anh mới'}
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tên khóa học</label>
              <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500" placeholder="VD: IELTS Cơ bản 5.0" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Danh mục</label>
              <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500">
                <option value="Luyện thi IELTS">Luyện thi IELTS</option>
                <option value="Anh văn Giao tiếp">Anh văn Giao tiếp</option>
                <option value="Luyện thi TOEIC">Luyện thi TOEIC</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Giá bán (VNĐ)</label>
              <input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500" placeholder="VD: 1000000" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Giảng viên (Tùy chọn)</label>
              <input type="text" value={formData.instructor} onChange={(e) => setFormData({...formData, instructor: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500" placeholder="Tên giảng viên" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Mô tả ngắn</label>
              <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500" rows="3" placeholder="Mô tả nội dung khóa học..."></textarea>
            </div>
            <div className="md:col-span-2 text-right">
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-md transition-colors">
                {editingId ? 'Lưu Thay Đổi' : 'Lưu Khóa Học'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* DANH SÁCH KHÓA HỌC */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase text-gray-400 font-bold">
            <tr>
              <th className="p-5">Khóa học</th>
              <th className="p-5">Danh mục</th>
              <th className="p-5">Giá bán</th>
              <th className="p-5 text-center">Học viên</th>
              <th className="p-5">Trạng thái</th>
              <th className="p-5 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-5 font-bold text-navy-900">{course.title}</td>
                <td className="p-5"><span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded">{course.category}</span></td>
                <td className="p-5 font-bold text-orange-500">{Number(course.price).toLocaleString('vi-VN')}đ</td>
                <td className="p-5 font-medium text-center">{course.students}</td>
                <td className="p-5">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${course.status === 'ĐANG BÁN' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
                    {course.status}
                  </span>
                </td>
                <td className="p-5 text-right space-x-4">
                  <button onClick={() => handleEdit(course)} className="text-blue-500 hover:text-blue-700 font-bold text-xs uppercase tracking-wide">Sửa</button>
                  <button onClick={() => handleDelete(course.id)} className="text-red-500 hover:text-red-700 font-bold text-xs uppercase tracking-wide">Xóa</button>
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan="6" className="p-10 text-center text-gray-400 font-medium">Chưa có khóa học nào.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default CourseManagement;