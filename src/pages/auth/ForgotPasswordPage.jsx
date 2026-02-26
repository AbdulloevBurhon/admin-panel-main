// // pages/auth/ForgotPasswordPage.jsx
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import AuthLayout from './Authlayout'

// export default function ForgotPasswordPage() {
//  const [email, setEmail] = useState('')
//  const [sent, setSent] = useState(false)
//  const [loading, setLoading] = useState(false)

//  const handleSubmit = async (e) => {
//   e.preventDefault()
//   setLoading(true)
//   // TODO: вызов API reset password
//   await new Promise((r) => setTimeout(r, 1000))
//   setLoading(false)
//   setSent(true)
//  }

//  return (
//   <AuthLayout>
//    {/* Back */}
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

//    {sent ? (
//     <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 text-sm text-[#1d4ed8]">
//      Reset link sent! Check your email <strong>{email}</strong>.
//     </div>
//    ) : (
//     <form onSubmit={handleSubmit} className="space-y-4">
//      <input
//       type="email"
//       placeholder="Email"
//       required
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       className="w-full h-[52px] px-4 rounded-xl border border-gray-200
//                        text-sm text-gray-800 placeholder:text-gray-400
//                        bg-white outline-none
//                        focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15
//                        transition-all duration-200"
//      />

//      <button
//       type="submit"
//       disabled={loading}
//       className="w-full h-[52px] rounded-xl bg-[#3b82f6] hover:bg-[#2563eb]
//                        text-white text-sm font-semibold
//                        transition-all duration-200 active:scale-[0.98]
//                        disabled:opacity-60 disabled:cursor-not-allowed
//                        flex items-center justify-center gap-2"
//      >
//       {loading ? <Spinner /> : 'Send reset link'}
//      </button>
//     </form>
//    )}
//   </AuthLayout>
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
import { Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPasswordPage() {
 const navigate = useNavigate()
 return (
  <>
   <BackLink label="Log in" />

   <h2 className="text-3xl font-semibold mb-8 text-gray-800">
    Forgot password
   </h2>

   <div className="space-y-5">
    <Input type="text" placeholder="Email" leftIcon={<Mail size={18} />} />

    <Button fullWidth onClick={() => navigate('/auth/reset')}>
     Send reset link
    </Button>
   </div>
  </>
 )
}
