import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import Loader from '../layout/Loader';
import { ProtectedRoute, PublicRoute } from './Routes';

// Lazy load components
const AdminDashboard = lazy(() => import('../components/adminPannel/AdminDashboard'));
const Users = lazy(() => import('../components/adminPannel/Users'));
const Reports = lazy(() => import('../components/adminPannel/Reports'));
const Notifications = lazy(() => import('../components/adminPannel/Notifications'));
const Packages = lazy(() => import('../components/adminPannel/Packages'));
const Settings = lazy(() => import('../components/adminPannel/Settings'));
const Login = lazy(() => import('../pages/AdminLogin'));
// const SignUp = lazy(() => import('../pages/SignUp'));  // Assuming you have this component
// const ForgotPassword = lazy(() => import('../pages/ForgotPassword')); // Assuming this page exists
const ChangePassword = lazy(() => import('../components/adminPannel/ChangePassword'));
const AddPackage = lazy(() => import('../components/adminPannel/AddPackage'));
const Department = lazy(() => import('../components/adminPannel/Department'));
const Designation = lazy(() => import('../components/adminPannel/Designation'));
const Details = lazy(() => import('../pages/Details'));
const Demo = lazy(() => import('../pages/Demo'));

function AppContent() {
const isPackageTaken =true

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute component={isPackageTaken? MainLayout:Demo} />}>
          <Route  index element={<AdminDashboard />} />
          <Route path="employees" element={<Users />} />
          <Route path="packages" element={<Packages />} />
          <Route path="add-package" element={<AddPackage />} />
          <Route path="department" element={<Department />} />
          <Route path="designation" element={<Designation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<PublicRoute component={Login} />} />
          <Route path="signup" element={<PublicRoute component={Demo} />} /> {/* SignUp Page */}
          <Route path="forgot-password" element={<PublicRoute component={Demo} />} /> {/* Forgot Password Page */}
        </Route>

        {/* Public Routes */}
        <Route path="/admin/details" element={<ProtectedRoute component={Details} />} />
        <Route path="/admin/demo" element={<ProtectedRoute component={Demo} />} />
      </Routes>
    </Suspense>
  );
}

export default AppContent;
