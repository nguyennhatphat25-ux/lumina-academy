import React from 'react';
import { useAuth } from '../../context/AuthContext';

const PaymentHistory = () => {
  const { auth } = useAuth();
  
  // Lấy lịch sử giao dịch thật từ tài khoản
  const history = auth.user?.paymentHistory || [];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Lịch sử thanh toán</h1>
        <p className="text-gray-500 mt-2">Quản lý các giao dịch và hóa đơn của bạn.</p>
      </div>

      {history.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
          <p className="text-6xl mb-4">🧾</p>
          <h2 className="text-xl font-bold text-navy-900 mb-2">Chưa có giao dịch</h2>
          <p className="text-gray-500">Bạn chưa thực hiện bất kỳ giao dịch thanh toán nào.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-[10px] uppercase text-gray-400 font-bold">
              <tr>
                <th className="p-5">Mã Giao Dịch</th>
                <th className="p-5">Ngày mua</th>
                <th className="p-5">Khóa học</th>
                <th className="p-5">Phương thức</th>
                <th className="p-5">Số tiền</th>
                <th className="p-5">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {history.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 font-bold text-navy-900">{item.id}</td>
                  <td className="p-5">{item.date}</td>
                  <td className="p-5 font-medium max-w-xs truncate" title={item.courseNames}>{item.courseNames}</td>
                  <td className="p-5">{item.method}</td>
                  <td className="p-5 font-bold text-orange-500">{Number(item.amount).toLocaleString('vi-VN')}đ</td>
                  <td className="p-5">
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded">{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PaymentHistory;