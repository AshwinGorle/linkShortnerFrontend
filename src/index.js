import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import FrontPage from './components/FrontPage';
import Login from './components/Login';
import { RouterProvider } from 'react-router-dom';
import LinkShortner from './components/LinkShortner';
import Home from './components/Home';

const router = createBrowserRouter([
      {
        path : "/",
        element : <FrontPage/>,
        children : [
           {
            path : "/signup",
            element : <Signup/>
           },
           {
            path : "/",
            element : <Login/>
           },
        ]
      },
      {
        path : "/home",
        element : <Home/>
      }
  

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
