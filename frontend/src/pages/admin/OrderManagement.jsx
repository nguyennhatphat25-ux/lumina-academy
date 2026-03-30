import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';

const OrderManagement = () => {
  // DỮ LIỆU GIẢ: Đảm bảo giao diện luôn có nội dung chuyên nghiệp
  const [orders, setOrders] = useState([
    { id: '#ORD-1', customer: 'User 1', email: 'user1@lumina.com', course: 'IELTS Masterclass 7.0+', amount: '1.490.000', status: 'CHỜ XỬ LÝ', date: '10/10/2023' },
    { id: '#ORD-2', customer: 'User 2', email: 'user2@lumina.com', course: 'Tiếng Anh Giao Tiếp', amount: '850.000', status: 'ĐÃ THANH TOÁN', date: '09/10/2023' },
    { id: '#ORD-3', customer: 'User 3', email: 'user3@lumina.com', course: 'Luyện thi TOEIC 850+', amount: '1.299.000', status: 'ĐÃ THANH TOÁN', date: '08/10/2023' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const handleDelete = (id) => {
    if(window.confirm("Xóa đơn hàng này?")) {
      setOrders(prev => prev.filter(o => o.id !== id));
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Quản lý Đơn hàng</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-[10px] uppercase text-gray-400">
            <tr><th className="p-4">Mã ĐH</th><th className="p-4">Khách hàng</th><th className="p-4">Khóa học</th><th className="p-4">Số tiền</th><th className="p-4">Trạng thái</th><th className="p-4 text-right">Hành động</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="p-4 font-bold text-navy-900">{o.id}</td>
                <td className="p-4 font-semibold">{o.customer} <br/><span className="text-xs font-normal text-gray-400">{o.email}</span></td>
                <td className="p-4 max-w-[200px] truncate" title={o.course}>{o.course}</td>
                <td className="p-4 font-bold text-orange-500">{o.amount}đ</td>
                <td className="p-4">
                  <select value={o.status} onChange={(e) => handleStatusChange(o.id, e.target.value)} className="text-xs font-bold px-2 py-1.5 rounded outline-none border cursor-pointer">
                    <option value="CHỜ XỬ LÝ">CHỜ XỬ LÝ</option>
                    <option value="ĐÃ THANH TOÁN">ĐÃ THANH TOÁN</option>
                    <option value="ĐÃ HỦY">HỦY ĐƠN</option>
                  </select>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => handleDelete(o.id)} className="text-red-500 hover:text-red-700 font-bold text-xs">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default OrderManagement;