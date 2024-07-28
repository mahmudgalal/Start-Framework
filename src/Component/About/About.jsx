import React from 'react'

export default function About() {
  return (
    <div className="mx-auto py-36 text-center bg-[#1ABC9C] h-full grid place-content-center">
    <h1 className="text-white my-3 text-5xl uppercase font-bold">
    ABOUT COMPONENT
    </h1>
    <div className="text-white font-bold text-lg flex justify-center gap-5 items-center">
      <div className="w-24 h-1 bg-white"></div>
      <i className="fa-solid fa-star"></i>
      <div className='w-24 h-1 bg-white'></div>
    </div>
    <div className="text-white mt-4 flex w-9/12 mx-auto gap-11 text-start about">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
  )
}
