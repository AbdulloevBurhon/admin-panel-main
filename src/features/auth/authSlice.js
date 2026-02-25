import { createSlice } from '@reduxjs/toolkit'
import { postLogin } from './authThunks'

export const loginSlice = createSlice({
 name: 'login',
 initialState: {
  response: {},
  error: null,
  loading: false
 },
 extraReducers: (builder) => {
  builder
   .addCase(postLogin.pending, (state) => {
    state.loading = true
    state.error = null
   })
   .addCase(postLogin.fulfilled, (state, action) => {
    state.loading = false
    state.error = null
    state.response = action.payload
   })
   .addCase(postLogin.rejected, (state, action) => {
    state.loading = false

    state.error = action.payload
   })
 }
})
export default loginSlice.reducer
