import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    loginUser: null,
  },
  reducers: {
    userData: (state, action) => {
        // console.log(state.loginUser)
        state.loginUser = action.payload
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData } = counterSlice.actions

export default counterSlice.reducer