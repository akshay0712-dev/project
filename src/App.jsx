import { useState } from 'react'
import './App.css'
import Age from './components/1Age_Calculator/Age.jsx'
import Weather from './components/2Weather_App/Weather.jsx'
import Navbar from './components/navbar.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/project",
      element: (
        <>
          <Navbar />
          <Age />
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
  ]);


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
