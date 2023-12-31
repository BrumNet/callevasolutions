import React from 'react';
import Home from './pages/home/home'
import DashBoard from './pages/dashboard/dashboard';
import Results from './pages/results/results';
import Categories from './pages/categories/categories'
import LandingPage from './pages/landing/landingpage';
import {createBrowserRouter, ScrollRestoration} from "react-router-dom";

import './App.css';
import { Sign } from './pages/login/sign';


  const router = createBrowserRouter([
    {
      path: "/", element: <><Home/><ScrollRestoration /></>,
      errorElement: <center>Page Not Found</center>,//error page
      //loader: rootLoader,
    },
    {
      path: "/dashboard", element: <><DashBoard/> <ScrollRestoration /></>
    },
    {
      path: '/browse', element: <><Results/><ScrollRestoration/></>
    },
    {
      path: '/service', element: <><LandingPage/><ScrollRestoration/></>
    },
    {
      path: '/account', element: <><Sign/><ScrollRestoration/></>
    },
    {
      path: '/categories', element: <><Categories/><ScrollRestoration/></>
    },
    {
      path: '/*', element:  <><Home/><ScrollRestoration /></>
    },
        ],  { basename: "/callevasolutions" })

export default router;

