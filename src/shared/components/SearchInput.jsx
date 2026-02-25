import { Search } from 'lucide-react'

export default function SearchInput({ className = '', ...props }) {
 return (
  <div className={`relative ${className}`}>
   <Search
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
   />

   <input
    type="text"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
   />
  </div>
 )
}
