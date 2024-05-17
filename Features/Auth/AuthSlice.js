import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
}

export const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
    setToken(state, value) {
        // console.log(state.token)
      state.token = value.payload;
      localStorage.setItem("token", JSON.stringify(state.token))
    //   console.log(state.token)
    },
    logout : (state, value)=>{
        localStorage.clear();
    }
    }
})

export const {setToken, logout} = AuthSlice.actions
export default AuthSlice.reducer;
