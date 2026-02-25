// // src/router.jsx
// import { createBrowserRouter, Navigate } from 'react-router-dom'
// import ForgotPasswordPage from '../pages/auth/Forgotpasswordpage'

// import LoginPage from '../pages/auth/LoginPage'
// import ResetPasswordPage from '../pages/auth/Resetpasswordpage'
// import DashboardPage from '../pages/dashboard/DashboardPage'

// // import DashboardPage from "./pages/dashboard/DashboardPage"; // добавишь позже

// export const router = createBrowserRouter([
//  {
//   path: '/',
//   element: <Navigate to="/auth/login" replace />
//  },
//  {
//   path: '/auth/login',
//   element: <LoginPage />
//  },
//  {
//   path: '/auth/forgot-password',
//   element: <ForgotPasswordPage />
//  },
//  {
//   path: '/auth/reset-password',
//   element: <ResetPasswordPage />
//  },
//  {
//   path: '/dashboard',
//   element: <DashboardPage />
//  }
// ])
import { createBrowserRouter, Navigate } from 'react-router-dom'

import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage'
import LoginPage from '@/pages/auth/LoginPage'
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import OrdersPage from '@/pages/orders/OrdersPage'

import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'

export const router = createBrowserRouter([
 {
  path: '/auth',
  element: <AuthLayout />,
  children: [
   { path: 'login', element: <LoginPage /> },
   { path: 'forgot', element: <ForgotPasswordPage /> },
   { path: 'reset', element: <ResetPasswordPage /> }
  ]
 },
 {
  path: '/',
  element: <DashboardLayout />,
  children: [
   { index: true, element: <Navigate to="dashboard" replace /> },
   { path: 'dashboard', element: <DashboardPage /> },
   { path: 'orders', element: <OrdersPage /> }
  ]
 }
])
