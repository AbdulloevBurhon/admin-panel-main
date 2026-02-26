import { api } from '@/shared/api/axios'

export const loginRequest = (data) => {
 return api.post('/Account/login', data)
}

export const forgotPasswordRequest = (email) => {
 return api.post('/auth/forgot-password', { email })
}

export const resetPasswordRequest = (data) => {
 return api.post('/auth/reset-password', data)
}
