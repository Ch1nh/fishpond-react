import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loginImg from '~/assets/images/img-login.png';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { loginUser } from '~/components/apiService/login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      userName: userName,
      passWord: passWord,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={loginImg} alt="IMG" />
          </div>
          <form className="login100-form " onSubmit={handleLogin}>
            <span className="login100-form-title"></span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Username"
                formcontrolname="userName"
                onChange={(e) => setUserName(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FontAwesomeIcon icon={faUser} aria-hidden="true" />
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                formcontrolname="passWord"
                onChange={(e) => setPassWord(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FontAwesomeIcon icon={faLock} aria-hidden="true" />
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Đăng nhập</button>
            </div>

            <div className="text-center p-t-12"></div>

            <div className="text-center p-t-136"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
