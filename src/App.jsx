import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import LoggedInView from './views/LoggedInView';
import SignupView from './views/SignupView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  }, {
    path: '/login',
    element: <LoginView />,
  }, {
    path: '/signup',
    element: <SignupView />,
  }, {
    path: '/logedin',
    element: <LoggedInView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
