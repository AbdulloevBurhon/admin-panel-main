// // pages/auth/LoginPage.jsx

// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { postLogin } from '../../features/auth/authThunks'
// import AuthLayout from './Authlayout'

// export default function LoginPage() {
//  const { response, loading, error } = useSelector((state) => state.auth)
//  const dispatch = useDispatch()
//  const navigate = useNavigate()
//  const handleSubmit = async (e) => {
//   e.preventDefault()
//   const formData = Object.fromEntries(new FormData(e.target))
//   console.log(formData)
//   dispatch(postLogin(formData))
//   navigate('/dashboard')
//  }
//  console.log(response)

//  return (
//   <AuthLayout>
//    <h2 className="text-[#0d1b2a] text-[28px] font-bold mb-8 tracking-tight">
//     Log in
//    </h2>

//    <form onSubmit={handleSubmit} className="space-y-4">
//     {/* Email */}
//     <div>
//      <input
//       type="text"
//       name="userName"
//       placeholder="Email"
//       required
//       className="w-full h-[52px] px-4 rounded-xl border border-gray-200
//                        text-sm text-gray-800 placeholder:text-gray-400
//                        bg-white outline-none
//                        focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15
//                        transition-all duration-200"
//      />
//     </div>

//     {/* Password */}
//     <div className="relative">
//      <input
//       type="password"
//       name="password"
//       placeholder="Password"
//       required
//       className="w-full h-[52px] px-4 pr-12 rounded-xl border border-gray-200
//                        text-sm text-gray-800 placeholder:text-gray-400
//                        bg-white outline-none
//                        focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15
//                        transition-all duration-200"
//      />
//      <button
//       type="button"
//       className="absolute right-4 top-1/2 -translate-y-1/2
//                        text-gray-400 hover:text-gray-600 transition-colors"
//       aria-label="Toggle password visibility"
//      ></button>
//     </div>

//     {/* Forgot password */}
//     <div className="text-center pt-1">
//      <Link
//       to="/auth/forgot-password"
//       className="text-sm text-[#3b82f6] hover:text-[#2563eb] transition-colors"
//      >
//       Forgot password?
//      </Link>
//     </div>

//     {/* Submit */}
//     <button
//      type="submit"
//      disabled={loading}
//      className="w-full h-[52px] rounded-xl bg-[#3b82f6] hover:bg-[#2563eb]
//                      text-white text-sm font-semibold
//                      transition-all duration-200 active:scale-[0.98]
//                      disabled:opacity-60 disabled:cursor-not-allowed
//                      flex items-center justify-center gap-2 mt-2"
//     >
//      {loading ? <Spinner /> : 'Log in'}
//     </button>
//    </form>
//   </AuthLayout>
//  )
// }

// /* ── tiny inline icons (no extra dep needed) ── */
// function EyeIcon() {
//  return (
//   <svg
//    width="20"
//    height="20"
//    viewBox="0 0 24 24"
//    fill="none"
//    stroke="currentColor"
//    strokeWidth="1.8"
//   >
//    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//    <circle cx="12" cy="12" r="3" />
//   </svg>
//  )
// }
// function EyeOffIcon() {
//  return (
//   <svg
//    width="20"
//    height="20"
//    viewBox="0 0 24 24"
//    fill="none"
//    stroke="currentColor"
//    strokeWidth="1.8"
//   >
//    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
//    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
//    <line x1="1" y1="1" x2="23" y2="23" />
//   </svg>
//  )
// }
// function Spinner() {
//  return (
//   <svg
//    className="animate-spin"
//    width="18"
//    height="18"
//    viewBox="0 0 24 24"
//    fill="none"
//    stroke="currentColor"
//    strokeWidth="2.5"
//   >
//    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
//   </svg>
//  )
// }
// // zxcv0987?
import { login } from '@/features/auth/authThunks'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import { Lock, Mail } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
 const navigate = useNavigate()
 const dispatch = useDispatch()

 const { token, loading, error } = useSelector((state) => state.auth)

 const handleSubmit = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const data = {
   userName: formData.get('userName'),
   password: formData.get('password')
  }

  dispatch(login(data))
 }

 useEffect(() => {
  if (token) {
   navigate('/dashboard')
  }
 }, [token, navigate])

 return (
  <>
   <h2 className="text-3xl font-semibold mb-8 text-gray-800">Log in</h2>

   <form onSubmit={handleSubmit} className="space-y-5">
    <Input
     name="userName"
     type="text"
     placeholder="Username"
     leftIcon={<Mail size={18} />}
    />

    <Input
     name="password"
     type="password"
     placeholder="Password"
     leftIcon={<Lock size={18} />}
     passwordToggle
    />

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <div className="text-right">
     <Link to="/auth/forgot" className="text-sm text-blue-600 hover:underline">
      Forgot password?
     </Link>
    </div>

    <Button type="submit" fullWidth disabled={loading}>
     {loading ? 'Loading...' : 'Log in'}
    </Button>
   </form>
  </>
 )
}
