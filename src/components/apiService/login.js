import { loginFailed, loginStart, loginSuccess } from '~/redux/authSlice';
import request from '~/utils/http';

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await request.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    navigate('/');
  } catch {
    dispatch(loginFailed());
  }
};
