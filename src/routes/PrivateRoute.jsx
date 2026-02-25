import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
 const isAuthenticated = true // потом заменим на Redux или token

 if (!isAuthenticated) {
  return <Navigate to="/auth/login" replace />
 }

 return children
}
