import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext'; 

// Layouts
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProfileLayout from './components/layout/ProfileLayout';
import AdminLayout from './components/layout/AdminLayout';

// Pages
import Home from './pages/Home';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetail from './pages/CourseDetail';
import Checkout from './pages/Checkout';

// === ĐÃ IMPORT LẠI 3 TRANG BỊ THIẾU ===
import Roadmap from './pages/Roadmap';
import Instructors from './pages/Instructors';
import Enterprise from './pages/Enterprise';
import Blog from './pages/Blog';

// Auth & User Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ProfileSettings from './pages/ProfileSettings';
import MyCourses from './pages/user/MyCourses';
import LearningProgress from './pages/user/LearningProgress'; 
import Certificates from './pages/user/Certificates';
import PaymentHistory from './pages/user/PaymentHistory';

import Dashboard from './pages/admin/Dashboard';
import CourseManagement from './pages/admin/CourseManagement';
import OrderManagement from './pages/admin/OrderManagement';
import StudentManagement from './pages/admin/StudentManagement';

// Bảo vệ Route
const ProtectedRoute = ({ isAllowed, redirectTo = "/login", children }) => {
  if (!isAllowed) return <Navigate to={redirectTo} replace />;
  return children ? children : <Outlet />;
};

const ClientLayout = () => <><Header /><div className="min-h-screen"><Outlet /></div><Footer /></>;

const AppRoutes = () => {
  const { auth } = useAuth(); 

  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CourseCatalog />} />
        <Route path="/course" element={<CourseDetail />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* === ĐÃ THÊM LẠI 3 ĐƯỜNG DẪN NÀY VÀO HỆ THỐNG === */}
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Tuyến đường Học Viên */}
      <Route element={<ProtectedRoute isAllowed={auth.isAuth && auth.user?.role === 'user'} />}>
        <Route element={<ProfileLayout />}>
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/my-library" element={<MyCourses />} />
          <Route path="/progress" element={<LearningProgress />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/billing" element={<PaymentHistory />} />
        </Route>
      </Route>

      {/* Tuyến đường Admin */}
      <Route element={<ProtectedRoute isAllowed={auth.isAuth && auth.user?.role === 'admin'} redirectTo="/" />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/students" element={<StudentManagement />} />
      </Route>

      {/* TÍNH NĂNG CHỐNG TRẮNG MÀN HÌNH: Nếu gõ sai link sẽ tự động bay về trang chủ */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;