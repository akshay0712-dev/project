import { useState } from 'react'
import './App.css'
import Age from './components/1Age_Calculator/Age.jsx'
import Weather from './components/2Weather_App/Weather.jsx'
import Navbar from './components/navbar.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ecommerce from './components/3E-commerce/E_commerce.jsx'
import Blog from './components/4Blog/blog.jsx'


function App() {
  const router = createBrowserRouter([
    {
      path: "/project",
      element: (
        <>
          <Navbar />
          <Blog />
        </>
      ),
    },
    {
      path: "/project/Age",
      element: (
        <>
          <Navbar />
          <Age />
        </>
      ),
    },
    {
      path: "/project/Weather",
      element: (
        <>
          <Navbar />
          <Weather />
        </>
      ),
    },
    {
      path: "/project/E-commerce",
      element: (
        <>
          <Navbar />
          <Ecommerce />
        </>
      ),
    },
    
    {
      path: "/project/Blog",
      element: (
        <>
          <Navbar />
          <Blog />
        </>
      ),
    },
  ]);


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
