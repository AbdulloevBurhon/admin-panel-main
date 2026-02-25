import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../app/axios'

export const postLogin = createAsyncThunk(
 'auth/postLogin',
 async (data, { rejectWithValue }) => {
  try {
   const res = await api.post('/api/Account/login', data)
   return res.data
  } catch (error) {
   return rejectWithValue(error.response?.data || 'Login failed')
  }
 }
)
