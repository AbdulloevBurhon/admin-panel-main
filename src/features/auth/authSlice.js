import { getToken, removeToken, setToken } from '@/shared/lib/auth'
import { createSlice } from '@reduxjs/toolkit'
import { login } from './authThunks'

const initialState = {
 token: getToken() || null,
 loading: false,
 error: null
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  logout: (state) => {
   state.token = null
   removeToken()
  }
 },
 extraReducers: (builder) => {
  builder
   .addCase(login.pending, (state) => {
    state.loading = true
    state.error = null
   })
   .addCase(login.fulfilled, (state, action) => {
    state.loading = false
    state.token = action.payload
    setToken(action.payload)
   })
   .addCase(login.rejected, (state, action) => {
    state.loading = false
    state.error = action.payload
   })
 }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
