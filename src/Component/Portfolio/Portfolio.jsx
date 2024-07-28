import React, { useState } from 'react'
import port1 from '../../assets/images/poert1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'
const arr = [port1 , port2 , port3 , port3 , port1 , port2];

export default function Portfolio() {
    const [openPhoto , setOpenPhoto] = useState(false);
    const [image , setImage] = useState("");
    function handleOpen(imageSelect){
        setOpenPhoto(!openPhoto);
        setImage(imageSelect);
    };
    function handleClose(){
        setOpenPhoto(false);
    }

  return (
    <div className="text-center py-10 relative pt-28">
      <h1 className="text-5xl text-[#2C3E50] font-bold pb-4">
        PORTFOLIO SECTION
      </h1>
      <div className="text-[#2C3E50] font-bold text-lg flex justify-center gap-5 items-center mb-10">
        <div className="w-24 h-1 bg-[#2C3E50]"></div>
        <i className="fa-solid fa-star"></i>
        <div className="w-24 h-1 bg-[#2C3E50]"></div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mx-8'>
        {arr.map((port , index) => (
            <div className=' relative card' onClick={() => handleOpen(port)} key={index}>
            <img src={port} alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-[#1ABC9C] background flex justify-center items-center'>
        <i className="text-white fa-solid fa-plus fa-6x"></i>
        </div>

        </div>
        ))}
       
      </div>
      {openPhoto && (
         <div className='fixed inset-0 flex justify-center items-center photo' onClick={handleClose}>
         <img src={image} alt="" className='w-[500px]' />
     </div>
      )}
      </div>
      
  )
}
