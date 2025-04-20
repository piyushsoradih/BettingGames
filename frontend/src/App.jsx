import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from './Home/Home';
import ValueMatcher from './Games/ValueMatcher/ValueMatcher';
import Payments from './Payments/Payments';
import Aviator from './Games/Aviator/Aviator';
import Bet from './Games/Aviator/Bet';
import Login from './LoginSignup/Login/Login';
import Signup from './LoginSignup/SignUp/Signup';
import Eleven from './Payments/Denominations/Eleven';
import TwentyOne from './Payments/Denominations/TwentyOne';
import ThirtyOne from './Payments/Denominations/ThirtyOne';
import FortyOne from './Payments/Denominations/FortyOne';
import LoginSign from './LoginSignup/SignUp/LoginSign';
import Withdrawal from './Wallets/Withdrawal';
import BankForm from './Wallets/Bank/BankForm';
import Check from './Check';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/Check",
    element: <Check/>

  },
  {
    path: "/LoginSign",
    element: <LoginSign/>,

  },
  {
    path: "/Login",
    element: <Login/>,

  },
  {
    path: "/Signup",
    element: <Signup/>,

  },
  {
    path: "/Check",
    element: <Check/>,

  },

  {
    path: "/Bet",
    element: <Bet />

  },
  {
    path: "/ValueMatcher",
    element: <ValueMatcher />,

  },
  {
    path: "/Withdraw",
    element: <Withdrawal/>,

  },
  {
    path: "/BankForm",
    element: <BankForm/>,

  },
  {
    path: "/Payments",
    element: <Payments />

  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
  {
    path: "/Eleven",
    element: <Eleven/>

  },
  {
    path: "/TwentyOne",
    element: <TwentyOne/>

  },
  {
    path: "/ThirtyOne",
    element: <ThirtyOne/>

  },
  {
    path: "/FortyOne",
    element: <FortyOne/>

  },
]);

export default App


