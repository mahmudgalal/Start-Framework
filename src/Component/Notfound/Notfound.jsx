import React from 'react'

export default function Notfound() {
  return (
    <div className="text-center my-10 relative mt-44">
      <h1 className="text-5xl text-[#2C3E50] font-bold pb-4">
        Page Not Found
      </h1>
      <div className="text-[#2C3E50] font-bold text-lg flex justify-center gap-5 items-center mb-10">
        <div className="w-24 h-1 bg-[#2C3E50]"></div>
        <i className="fa-solid fa-star"></i>
        <div className="w-24 h-1 bg-[#2C3E50]"></div>
      </div>
      <h3 className='text-6xl text-[#2C3E50] pb-4'>We Couldnot Find What You Were Looking For</h3>
</div>
  )
}
