import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    loginUser: 10,
  },
  reducers: {
    userData: (state, action) => {
        console.log(state.loginUser)
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData } = counterSlice.actions

export default counterSlice.reducer