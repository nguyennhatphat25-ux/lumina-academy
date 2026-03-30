import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { db } = useAuth(); // Lấy DB ảo

  // TÍNH TOÁN SỐ LIỆU THẬT
  const totalRevenue = db.orders.reduce((sum, order) => sum + order.amount, 0);
  const totalStudents = db.users.filter(u => u.role === 'user').length;
  const totalOrders = db.orders.length;

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Tổng quan hệ thống</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">TỔNG DOANH THU</p>
          <h2 className="text-3xl font-bold text-navy-900">{totalRevenue.toLocaleString('vi-VN')}đ</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">HỌC VIÊN HOẠT ĐỘNG</p>
          <h2 className="text-3xl font-bold text-navy-900">{totalStudents}</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ĐƠN HÀNG MỚI</p>
          <h2 className="text-3xl font-bold text-navy-900">{totalOrders}</h2>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;