import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function PasswordInput({
 placeholder,
 className = '',
 ...props
}) {
 const [show, setShow] = useState(false)

 return (
  <div className="relative">
   <input
    type={show ? 'text' : 'password'}
    placeholder={placeholder}
    className={`w-full h-[52px] px-4 pr-12 rounded-lg border border-gray-300 bg-white 
        focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
   />

   <button
    type="button"
    onClick={() => setShow(!show)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
   >
    {show ? <EyeOff size={18} /> : <Eye size={18} />}
   </button>
  </div>
 )
}
