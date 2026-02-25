export default function StatusBadge({ status }) {
 const base = 'px-3 py-1 text-xs rounded-full'

 const variants = {
  Paid: 'bg-green-100 text-green-600',
  Pending: 'bg-gray-200 text-gray-600',
  Ready: 'bg-orange-100 text-orange-600',
  Shipped: 'bg-blue-100 text-blue-600',
  Received: 'bg-purple-100 text-purple-600'
 }

 return (
  <span
   className={`${base} ${variants[status] || 'bg-gray-200 text-gray-600'}`}
  >
   {status}
  </span>
 )
}
