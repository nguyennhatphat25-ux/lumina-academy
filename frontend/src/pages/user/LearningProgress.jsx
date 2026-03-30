import React from 'react';

const LearningProgress = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Tiến độ học tập</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
        <p className="text-5xl mb-4">📈</p>
        <p className="text-gray-500 font-medium">Biểu đồ tiến độ học tập sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
};

export default LearningProgress;