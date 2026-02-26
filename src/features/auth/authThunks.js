import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginRequest } from './authAPI'

export const login = createAsyncThunk(
 'auth/login',
 async (data, { rejectWithValue }) => {
  try {
   const response = await loginRequest(data)

   // берем ТОЛЬКО токен
   return response.data.data
  } catch (error) {
   return rejectWithValue(error.response?.data?.message || 'Login error')
  }
 }
)
