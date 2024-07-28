import React from "react";
import avatar from "../../assets/images/avataaars.svg";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="mx-auto py-36 text-center bg-[#1ABC9C] h-full grid place-content-center ">
      <div className="mx-auto">
        <img src={avatar} className="w-[250px] mb-10" alt="avatar" />
      </div>
      <h1 className="text-white my-3 text-4xl uppercase font-bold">
        Start framework
      </h1>
      <div className="text-white font-bold text-lg flex justify-center gap-5 items-center">
        <div className="w-24 h-1 bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className='w-24 h-1 bg-white'></div>
      </div>
      <div className="text-white mt-4">Graphic Artist - Web Designer - Illustrator</div>
    </div>
  );
}
