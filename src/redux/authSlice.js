import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
      toast.success('Đăng nhập thành công');
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = false;
      toast.error('Đăng nhập thất bại');
    },
    logoutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
