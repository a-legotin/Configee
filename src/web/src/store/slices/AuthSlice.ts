import axios from 'axios'
import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'

type User = {
    id?: number
    email: string
    password: string
}

type UserCredentials = {
  email: string
  password: string
}

type InitialState = {
    loading: boolean
    users: User[]
    error: boolean
    isLogin: boolean
    isReg: boolean
}
const initialState: InitialState = {
    loading: false,
    users: [],
    error: false,
    isLogin: false,
    isReg: false
}

export const postLogIn = createAsyncThunk(
  "auth/postLogIn",
  async (credentials: UserCredentials) => {
    return Promise.resolve({id: 1, email: credentials.email, password: credentials.password})
  }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {   
      reset: (state) => initialState
    }, 
    extraReducers: (builder) => {
      builder.addCase(postLogIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      });
      builder.addCase(postLogIn.fulfilled, (state ,action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        state.isLogin = true;
        state.users = action.payload;
      });
      builder.addCase(postLogIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.isLogin = false;
      });
    }
  }
)
export const {reset} = authSlice.actions
export default authSlice.reducer