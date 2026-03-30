import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = login(email, password);
    
    // Đã sửa lại luồng: Cho dù Admin hay User, đăng nhập xong cũng về trang chủ
    if (role === 'admin' || role === 'user') {
      navigate('/');
    } else {
      alert("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans px-4 py-12 relative">
      <button onClick={() => navigate(-1)} className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-orange-500 font-bold transition-colors">
        <span>←</span> Quay lại
      </button>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-navy-900 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">LA</div>
          <h1 className="text-2xl font-bold text-navy-900">Đăng nhập hệ thống</h1>
          <p className="text-sm text-gray-500 mt-2">Dùng <strong className="text-navy-900">admin@lumina.com</strong> (Pass: 123456) để vào Admin.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Nhập email của bạn..."
              className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 rounded-xl px-4 py-3 outline-none transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Mật khẩu</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Nhập mật khẩu..."
              className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 rounded-xl px-4 py-3 outline-none transition-all" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md text-lg">
            Đăng nhập
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">Chưa có tài khoản? <Link to="/register" className="text-orange-500 font-bold hover:underline">Đăng ký tại đây</Link></p>
      </div>
    </div>
  );
};

export default Login;