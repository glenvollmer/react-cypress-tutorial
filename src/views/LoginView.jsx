import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAsync } from '../restServices/restServices';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    loginAsync(email, password)
      .then((res) => {
        if (res.logged_in) {
          navigate('../loggedin');
        } else {
          setEmail();
          setPassword();
        }
      });
  };

  return (
    <div id="auth-container">
      <form onSubmit={loginSubmit} className="auth-form">
        <div className="auth-form-item">
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div className="auth-form-item">
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="auth-form-item">
          <button type="button">Sign In</button>
        </div>
        <div className="auth-form-item">
          <em>
            Not registered?
            <Link to="../signup" className="auth-form-link">Register</Link>
          </em>
        </div>
      </form>
    </div>
  );
}

export default Login;
