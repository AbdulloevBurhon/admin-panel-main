export const endpoints = {
 auth: {
  login: '/auth/login',
  register: '/auth/register'
 },

 orders: {
  getAll: '/orders',
  create: '/orders',
  update: (id) => `/orders/${id}`,
  delete: (id) => `/orders/${id}`
 },

 products: {
  getAll: '/products',
  create: '/products',
  update: (id) => `/products/${id}`,
  delete: (id) => `/products/${id}`
 },

 categories: {
  getAll: '/categories'
 }
}
