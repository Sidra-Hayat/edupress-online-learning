
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import ForgotPassword from './auth/ForgotPassword.jsx';
import ResetPassword from './auth/ResetPassword.jsx';
import ConfirmPassword from './auth/ConfirmPassword.jsx';
import VerifyEmail from './auth/VerifyEmail.jsx';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Blog from './pages/Blog.jsx';
import FAQs from './pages/FAQs.jsx';

import MainLayout from './layouts/MainLayout.jsx';
import GuestLayout from './layouts/GuestLayout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  return (
    <Routes>
      {/* Public guest pages */}
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* Public pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
      </Route>

      {/* Protected pages */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
