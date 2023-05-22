import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers:{
      signIn:(state,action) =>{
        const newUser = {
          username:action.payload.username,
          password:action.payload.password
        };
        state.push(newUser)
      }
    }
  }
  );
  export const {signIn} = userSlice.actions

  export default userSlice.reducer