import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    let [open , setOpen] = useState(false);
    const menu = () =>{
        setOpen(!open);
    }
  return (
    <div className="bg-[#2C3E50] flex flex-col md:flex-row items-center md:px-10 text-white py-5 fixed w-full z-40 top-0">
   <div className='w-full flex justify-around md:justify-start items-center ps-5 md:mb-0'>
       <Link to={""}><h1 className='uppercase font-bold text-2xl sm:text-4xl'>Start Framework</h1></Link>
        <button className='md:hidden me-6' onClick={() => menu()}><i className='fa-solid fa-bars '></i></button>
   </div>
   <div className= {open? "flex flex-col md:flex-row flex-nowrap gap-y-7 mt-9 overflow-hidden md:mt-0 h-[200px] transition-all duration-700" : "h-0 overflow-hidden transition-all flex gap-y-7 flex-nowrap duration-700 flex-col md:flex-row md:flex md:h-8 md:pe-20"}>
    <NavLink to={"about"} className="text-white px-2 me-3 border rounded border-none py-1 text-base uppercase font-bold">About</NavLink>
    <NavLink to={"portfolio"} className="text-white px-2 me-3 border rounded border-none py-1 text-base uppercase font-bold">Portfolio</NavLink>
    <NavLink to={"contact"} className="text-white px-2 me-3 border rounded border-none py-1 text-base uppercase font-bold">Contact</NavLink>
   </div>
   
  </div>
  )
}
