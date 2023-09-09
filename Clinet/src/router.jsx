import {createBrowserRouter, Navigate} from "react-router-dom";
import React  from "react";
import Layout from './components/Layout';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/' ,
        element : <Home />
      },
    {
      path: '/',
      element: <DefaultLayout/>,
      children: [
        { 
          path : '/cart' ,
          element : <Cart />
        },
        { 
          path : '/wishlist' ,
          element : <Wishlist />
        },
        { 
          path : '/profile' ,
          element : <Profile />
        },
        
  
      ]
    },
    {
      path: '/',
      element: <GuestLayout/>,
      children: [
        
        { 
          path : '/login' ,
          element : <Login />
        },
        { 
          path : '/sign_up' ,
          element: <SignUp />
        },
        
        { 
          path : '/forgot-password' ,
          element: <ForgotPassword />
        },
        { 
          path : '/reset-password' ,
          element: <ResetPassword />
        },
      ]
    },
    { 
          path : '/store' ,
          element : <OurStore />
    },
    {
      path: '/product/:id/:slug',
      element : <SingleProduct />
    },
    { 
      path : '/contact' ,
      element: <Contact />
    },
    {
      path: "*",
      element: <NotFound/>
    },
]
}
])

export default router;
