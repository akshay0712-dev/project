import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
    <>
    <div className='bg-slate-700 text-white text-xl px-10 py-8 font-bold uppercase'>
        <span className="bg-slate-700 font-bold uppercase">7 Day Project Challenge with React</span>
        <div className="bg-slate-700 grid grid-cols-2 md:flex md:flex-row md:flex-wrap gap-3 justify-end ">
           <NavLink to={`/project/Age`} className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg ">01 Age</NavLink >
           <NavLink to={`/project/Weather`}  className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg ">02 Weather</NavLink >
           <NavLink to={`/project/E-commerce`}  className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg  ">03 E-commerce</NavLink >
           <NavLink to={`/project/blog`}  className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg  ">04 Blog</NavLink >
           <NavLink to={`/project/Expense`}  className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg  ">05 Expense Tracker</NavLink >
           <NavLink to={`/project/Todo`}  className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg  ">06 ToDo</NavLink >
           <NavLink to={`https://akshay0712-dev.github.io/portfolio/`}  className="font-normal text-sm text-center md:text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white flex items-center justify-center rounded-lg  ">07 Portfolio</NavLink >
        </div>
    </div>



    </>
    
  )
}

export default Navbar
