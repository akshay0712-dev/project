import { useState } from 'react'
import './App.css'
import Age from './components/1Age_Calculator/Age.jsx'
import Weather from './components/2Weather_App/Weather.jsx'
import Navbar from './components/navbar.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ecommerce from './components/3E-commerce/E_commerce.jsx'
import Blog from './components/4Blog/blog.jsx'
import Expense from './components/5Expense Tracker/Expense.jsx'
import ToDo from './components/ToDo/ToDo.jsx'
function ErrorPage() {
  return (
    <div className="h-[30vh] flex flex-col justify-evenly items-center">
      <h1 className="text-3xl text-center">404 - Page Not Found</h1>
      <p className="text-lg md:text-2xl text-center">The page you are looking for does not exist.</p>
    </div>
  );
}

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
    {
      path: "/project/Expense",
      element: (
        <>
          <Navbar />
          <Expense />
        </>
      ),
    },
    {
      path: "/project/Todo",
      element: (
        <>
          <Navbar />
          <ToDo />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Navbar />
          <ErrorPage />
          <Footer />
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
