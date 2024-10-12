import React from 'react'
import { NavLink } from "react-router-dom";
import Age from './1Age_Calculator/Age';

const Navbar = () => {
  return (
    
    <>
    <div className='bg-slate-700 text-white text-xl px-10 py-8 font-bold uppercase'>
        <span className="bg-slate-700 font-bold uppercase">7 Day Project Challenge with React</span>
        <div className="bg-slate-700 flex md:flex-row flex-wrap gap-3 justify-end ">
           <NavLink to={`/project/Age`} className="font-normal text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white rounded-lg ">01 Age</NavLink >
           <NavLink to={`/project/Weather`}  className="font-normal text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white rounded-lg ">02 Weather</NavLink >
           <NavLink to={`/project/E-commerce`}  className="font-normal text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white rounded-lg  ">02 E-commerce</NavLink >
        </div>
    </div>



    </>
    
  )
}

export default Navbar
