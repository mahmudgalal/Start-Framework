import React from "react";

export default function Footer() {
  return (
    <>
    <div className="bg-[#2C3E50] text-white py-28 flex flex-col gap-14 md:flex-row md:gap-0 ">
      <div className="text-center md:w-1/3">
        <h2 className="text-3xl font-bold pb-4">LOCATION</h2>
        <p className="pb-4">2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="text-center md:w-1/3">
        <h2 className="text-3xl font-bold pb-4">AROUND THE WEB</h2>
        <div className="icons">
          <i className="fa-brands fa-facebook mx-1 border rounded-full p-3"></i>
          <i className="fa-brands fa-twitter mx-1 border rounded-full p-3"></i>
          <i className="fa-brands fa-linkedin-in mx-1 border rounded-full p-3"></i>
          <i className="fa-solid fa-globe mx-1 border rounded-full p-3"></i>
        </div>
      </div>
      <div className="text-center lg:w-1/3">
        <h2 className="text-3xl font-bold pb-4 ">ABOUT FREELANCER</h2>
        <p className="pb-4 w-80 mx-auto">
          Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
      </div>
    </div>
    <div className="bg-[#1A252F] text-center text-white py-5">Copyright © Your Website 2021</div>
    </>
  );
}
