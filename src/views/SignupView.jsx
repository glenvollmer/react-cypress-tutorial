import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAsync } from '../restServices/restServices';

function SignupView() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const navigate = useNavigate();

  const registerClick = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      signupAsync(email, password)
        .then((res) => {
          if (res.user_created) {
            navigate('../login');
          } else {
            setEmail();
            setPassword();
            setConfirmPassword();
          }
        });
    }
  };

  return (
    <div id="auth-container">
      <form onSubmit={registerClick} className="auth-form">
        <div className="auth-form-item">
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              name="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="auth-form-item">
          <button type="button">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default SignupView;
