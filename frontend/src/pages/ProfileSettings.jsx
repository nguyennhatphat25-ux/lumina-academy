import React from 'react';

const ProfileSettings = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-xl font-bold text-navy-900">Hồ sơ cá nhân</h1>
      </div>

      <div className="bg-navy-900 rounded-3xl p-8 text-white shadow-xl flex items-center gap-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl border-4 border-navy-800 bg-orange-100 text-orange-600 flex items-center justify-center text-3xl font-bold shadow-lg">A</div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Thông tin cá nhân</h2>
          <p className="text-blue-200 text-sm">Cập nhật thông tin chi tiết và quản lý hồ sơ của bạn.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-bold text-navy-900 mb-6">Thông tin cơ bản</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Họ và tên</label>
            <input type="text" defaultValue="Nguyễn Văn A" className="w-full bg-gray-100 border-transparent rounded-xl px-4 py-3 text-gray-900 font-medium outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" defaultValue="nguyenvana@email.com" className="w-full bg-gray-100 border-transparent rounded-xl px-4 py-3 text-gray-900 font-medium outline-none" disabled />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-sm transition-colors">Lưu thay đổi</button>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;