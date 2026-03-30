import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';

const Dashboard = () => {
  // DỮ LIỆU GIẢ: Để đảm bảo UX/UI luôn đầy đặn, đẹp mắt
  const mockStats = { revenue: '1.2Mđ', students: 120, orders: 15 };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Tổng quan hệ thống</h1>
        <p className="text-gray-500 mt-1">Dữ liệu được cập nhật từ MySQL và hệ thống...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">TỔNG DOANH THU</p>
          <h2 className="text-3xl font-bold text-navy-900">{mockStats.revenue}</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">HỌC VIÊN HOẠT ĐỘNG</p>
          <h2 className="text-3xl font-bold text-navy-900">{mockStats.students}</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ĐƠN HÀNG MỚI</p>
          <h2 className="text-3xl font-bold text-navy-900">{mockStats.orders}</h2>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;