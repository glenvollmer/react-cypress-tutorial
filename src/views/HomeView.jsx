import React from 'react';
import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <div id="auth-container">
      <h1>React Cypress Test</h1>
      <div className="auth-form-item">
        <Link to="../signup" className="auth-form-link">Signup</Link>

        <Link to="../login" className="auth-form-link">Login</Link>

      </div>
    </div>
  );
}

export default HomeView;
