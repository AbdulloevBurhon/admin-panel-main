// // pages/auth/ResetPasswordPage.jsx
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import AuthLayout from './Authlayout'

// export default function ResetPasswordPage() {
//  const navigate = useNavigate()
//  const [form, setForm] = useState({ password: '', confirm: '' })
//  const [show, setShow] = useState({ password: false, confirm: false })
//  const [loading, setLoading] = useState(false)
//  const [error, setError] = useState('')

//  const handleSubmit = async (e) => {
//   e.preventDefault()
//   if (form.password !== form.confirm) {
//    setError('Passwords do not match')
//    return
//   }
//   setError('')
//   setLoading(true)
//   // TODO: API call с токеном из URL (useSearchParams)
//   await new Promise((r) => setTimeout(r, 1000))
//   setLoading(false)
//   navigate('/auth/login')
//  }

//  const toggle = (field) => setShow((s) => ({ ...s, [field]: !s[field] }))

//  return (
//   <AuthLayout>
//    <Link
//     to="/auth/login"
//     className="inline-flex items-center gap-1.5 text-sm text-gray-400
//                    hover:text-gray-600 transition-colors mb-8"
//    >
//     <ArrowLeft /> Log in
//    </Link>

//    <h2 className="text-[#3b82f6] text-[26px] font-bold mb-6 tracking-tight">
//     Forgot password
//    </h2>

//    <form onSubmit={handleSubmit} className="space-y-4">
//     {/* New password */}
//     <div className="relative">
//      <input
//       type={show.password ? 'text' : 'password'}
//       placeholder="Password"
//       required
//       value={form.password}
//       onChange={(e) => setForm({ ...form, password: e.target.value })}
//       className="w-full h-[52px] px-4 pr-12 rounded-xl border border-gray-200
//                        text-sm text-gray-800 placeholder:text-gray-400
//                        bg-white outline-none
//                        focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15
//                        transition-all duration-200"
//      />
//      <ToggleEye show={show.password} onToggle={() => toggle('password')} />
//     </div>

//     {/* Confirm password */}
//     <div className="relative">
//      <input
//       type={show.confirm ? 'text' : 'password'}
//       placeholder="Confirm password"
//       required
//       value={form.confirm}
//       onChange={(e) => setForm({ ...form, confirm: e.target.value })}
//       className={`w-full h-[52px] px-4 pr-12 rounded-xl border text-sm
//                        text-gray-800 placeholder:text-gray-400
//                        bg-white outline-none transition-all duration-200
//                        ${
//                         error
//                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
//                          : 'border-gray-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15'
//                        }`}
//      />
//      <ToggleEye show={show.confirm} onToggle={() => toggle('confirm')} />
//     </div>

//     {error && <p className="text-xs text-red-500 -mt-1">{error}</p>}

//     <button
//      type="submit"
//      disabled={loading}
//      className="w-full h-[52px] rounded-xl bg-[#3b82f6] hover:bg-[#2563eb]
//                      text-white text-sm font-semibold
//                      transition-all duration-200 active:scale-[0.98]
//                      disabled:opacity-60 disabled:cursor-not-allowed
//                      flex items-center justify-center gap-2"
//     >
//      {loading ? <Spinner /> : 'Reset'}
//     </button>
//    </form>
//   </AuthLayout>
//  )
// }

// function ToggleEye({ show, onToggle }) {
//  return (
//   <button
//    type="button"
//    onClick={onToggle}
//    className="absolute right-4 top-1/2 -translate-y-1/2
//                  text-gray-400 hover:text-gray-600 transition-colors"
//   >
//    {show ? (
//     <svg
//      width="20"
//      height="20"
//      viewBox="0 0 24 24"
//      fill="none"
//      stroke="currentColor"
//      strokeWidth="1.8"
//     >
//      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
//      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
//      <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//    ) : (
//     <svg
//      width="20"
//      height="20"
//      viewBox="0 0 24 24"
//      fill="none"
//      stroke="currentColor"
//      strokeWidth="1.8"
//     >
//      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//      <circle cx="12" cy="12" r="3" />
//     </svg>
//    )}
//   </button>
//  )
// }
// function ArrowLeft() {
//  return (
//   <svg
//    width="16"
//    height="16"
//    viewBox="0 0 24 24"
//    fill="none"
//    stroke="currentColor"
//    strokeWidth="2"
//   >
//    <path d="M19 12H5M12 5l-7 7 7 7" />
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
import BackLink from '@/shared/ui/BackLink'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import { Lock } from 'lucide-react'

export default function ResetPasswordPage() {
 return (
  <>
   <BackLink label="Log in" />

   <h2 className="text-3xl font-semibold mb-8 text-gray-800">Reset password</h2>

   <div className="space-y-5">
    <Input
     placeholder="Password"
     leftIcon={<Lock size={18} />}
     passwordToggle
    />

    <Input
     placeholder="Confirm password"
     leftIcon={<Lock size={18} />}
     passwordToggle
    />

    <Button fullWidth>Reset</Button>
   </div>
  </>
 )
}
