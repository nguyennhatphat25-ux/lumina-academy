import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  // Đã thêm removeFromCart vào đây
  const { cartItems, cartTotal, clearCart, removeFromCart } = useCart();
  const { auth, addPurchasedCourses } = useAuth();
  const navigate = useNavigate();
  
  const [customerName, setCustomerName] = useState(auth.user?.name || '');
  const [customerEmail, setCustomerEmail] = useState(auth.user?.email || '');
  
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [showGateway, setShowGateway] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const discount = cartTotal > 0 ? 200000 : 0;
  const finalTotal = cartTotal - discount;

  const isFormValid = customerName.trim() !== '' && customerEmail.trim() !== '';

  const handleProcessPayment = () => {
    if (!isFormValid) {
      alert("Vui lòng nhập đầy đủ Họ Tên và Email trước khi thanh toán!");
      return;
    }
    setShowGateway(true);
  };

  const handleConfirmPayment = () => {
    const methodString = paymentMethod === 'bank' ? 'Chuyển khoản QR' : 'VNPAY / MoMo';
    addPurchasedCourses(cartItems, finalTotal, methodString, customerName, customerEmail);
    
    setShowGateway(false);
    setPaymentSuccess(true);
    clearCart();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 font-sans relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-orange-500 font-bold"><span>←</span> Quay lại</button>
      </div>

      {showGateway && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl text-center shadow-2xl max-w-sm w-full">
            <h3 className="text-xl font-bold text-navy-900 mb-4">{paymentMethod === 'bank' ? 'Quét QR thanh toán' : 'Cổng VNPAY'}</h3>
            <button onClick={handleConfirmPayment} className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg mb-3 shadow-md">Tôi đã thanh toán</button>
            <button onClick={() => setShowGateway(false)} className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-lg">Hủy</button>
          </div>
        </div>
      )}

      {paymentSuccess && (
         <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl text-center shadow-2xl space-y-4 max-w-sm">
               <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto">✓</div>
               <h2 className="text-2xl font-bold text-navy-900">Thành công!</h2>
               <button onClick={() => navigate('/my-library')} className="bg-navy-900 text-white font-bold w-full py-3 rounded-lg">Vào thư viện</button>
            </div>
         </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy-900 mb-8">Thanh toán</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-navy-900 mb-6 border-b pb-4">Thông tin khách hàng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên <span className="text-red-500">*</span></label>
                  <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500" required />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-navy-900 mb-6 border-b pb-4">Phương thức</h2>
              <div className="space-y-4">
                <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer ${paymentMethod === 'bank' ? 'border-orange-500 bg-orange-50/30' : 'border-gray-200'}`}>
                  <input type="radio" onChange={() => setPaymentMethod('bank')} checked={paymentMethod === 'bank'} className="form-radio h-5 w-5 text-orange-500" />
                  <span className="ml-4 font-bold">Chuyển khoản QR Code</span>
                </label>
                <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer ${paymentMethod === 'vnpay' ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200'}`}>
                  <input type="radio" onChange={() => setPaymentMethod('vnpay')} checked={paymentMethod === 'vnpay'} className="form-radio h-5 w-5 text-blue-500" />
                  <span className="ml-4 font-bold">Ví điện tử VNPAY / MoMo</span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-navy-900 mb-6 border-b pb-4">Tóm tắt đơn hàng</h3>
              
              {/* DANH SÁCH KHÓA HỌC CÓ NÚT XÓA Ở ĐÂY */}
              {cartItems.length === 0 ? (
                <p className="text-gray-500 italic text-sm mb-4">Giỏ hàng đang trống</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 mb-4">
                    <div className="flex-1"><h4 className="text-xs font-bold">{item.title}</h4></div>
                    <span className="font-bold text-sm">{Number(item.price).toLocaleString('vi-VN')}</span>
                    {/* NÚT THÙNG RÁC XÓA KHÓA HỌC */}
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 bg-gray-50 rounded"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                ))
              )}

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between font-bold text-xl"><span className="text-navy-900">Tổng</span><span className="text-orange-500">{Number(finalTotal > 0 ? finalTotal : 0).toLocaleString('vi-VN')}đ</span></div>
              </div>
              <button 
                onClick={handleProcessPayment} 
                disabled={cartItems.length === 0 || !isFormValid} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isFormValid ? 'Thanh toán ngay' : 'Vui lòng nhập thông tin'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;