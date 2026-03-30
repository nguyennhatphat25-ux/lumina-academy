import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';

const StudentManagement = () => {
  const students = [
    { id: 'HV001', name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', enrolled: 2, progress: '45%', status: 'HOẠT ĐỘNG' },
    { id: 'HV002', name: 'Trần Thị B', email: 'tranthib@email.com', enrolled: 1, progress: '100%', status: 'HOÀN THÀNH' },
    { id: 'HV003', name: 'Lê Hoàng C', email: 'hoangc@email.com', enrolled: 3, progress: '10%', status: 'HOẠT ĐỘNG' },
    { id: 'HV004', name: 'Phạm Văn D', email: 'phamvand@email.com', enrolled: 0, progress: '0%', status: 'MỚI' },
  ];

  // Hàm xử lý màu sắc cho trạng thái (Tách ra đây để code HTML ở dưới sạch sẽ, không bị lỗi đỏ)
  const getStatusClass = (status) => {
    switch (status) {
      case 'HOẠT ĐỘNG':
        return 'bg-blue-50 text-blue-600';
      case 'HOÀN THÀNH':
        return 'bg-emerald-50 text-emerald-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Quản lý Học viên</h1>
        <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
          Xuất file Excel
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase text-gray-400 font-bold">
            <tr>
              <th className="p-5">Mã HV</th>
              <th className="p-5">Họ và tên</th>
              <th className="p-5">Email</th>
              <th className="p-5 text-center">Khóa đã mua</th>
              <th className="p-5">Tiến độ chung</th>
              <th className="p-5">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="p-5 font-bold text-gray-500">{student.id}</td>
                <td className="p-5 font-bold text-navy-900">{student.name}</td>
                <td className="p-5">{student.email}</td>
                <td className="p-5 text-center font-bold text-orange-500">{student.enrolled}</td>
                <td className="p-5">
                  <div className="flex items-center gap-2">
                    {/* Đã fix lỗi xung đột w-full và w-24 */}
                    <div className="w-24 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: student.progress }}></div>
                    </div>
                    <span className="text-[10px] font-bold">{student.progress}</span>
                  </div>
                </td>
                <td className="p-5">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${getStatusClass(student.status)}`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default StudentManagement;