import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
  const navigate = useNavigate();
  const { registerUser } = useAuth(); // Gọi hàm từ DB Ảo

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    
    const success = registerUser(formData.name, formData.email, formData.password);
    if (success) {
      alert("Đăng ký thành công! Đang chuyển hướng đến trang đăng nhập...");
      navigate('/login');
    } else {
      alert("Email này đã được sử dụng. Vui lòng chọn email khác!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans px-4 py-12">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">LA</div>
          <h1 className="text-2xl font-bold text-navy-900">Tạo tài khoản mới</h1>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div><label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên</label><input type="text" required onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 rounded-xl px-4 py-3 outline-none" /></div>
          <div><label className="block text-sm font-bold text-gray-700 mb-1">Email</label><input type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 rounded-xl px-4 py-3 outline-none" /></div>
          <div><label className="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label><input type="password" required onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 rounded-xl px-4 py-3 outline-none" /></div>
          <div><label className="block text-sm font-bold text-gray-700 mb-1">Xác nhận</label><input type="password" required onChange={(e) => setFormData({...formData, confirm: e.target.value})} className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 rounded-xl px-4 py-3 outline-none" /></div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl mt-4">Đăng ký</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">Đã có tài khoản? <Link to="/login" className="text-orange-500 font-bold hover:underline">Đăng nhập ngay</Link></p>
      </div>
    </div>
  );
};

export default Register;