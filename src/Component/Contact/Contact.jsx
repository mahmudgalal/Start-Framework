import React from "react";

export default function Contact() {
  return (
    <div className="text-center my-10 mt-28">
      <h1 className="text-5xl text-[#2C3E50] font-bold pb-4">
        CONATCT SECTION
      </h1>
      <div className="text-[#2C3E50] font-bold text-lg flex justify-center gap-5 items-center mb-10">
        <div className="w-24 h-1 bg-[#2C3E50]"></div>
        <i className="fa-solid fa-star"></i>
        <div className="w-24 h-1 bg-[#2C3E50]"></div>
      </div>
      <form className="w-full max-w-lg mx-auto">
        <div className="flex items-center border-b-2 py-2 mb-9">
          <input
            className="bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:outline-none"
            type="text"
            placeholder="UserName"
            aria-label="userName"
          />
        </div>
        <div className="flex items-center border-b-2 py-2 mb-9">
          <input
            className="bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:outline-none"
            type="text"
            placeholder="UserAge"
            aria-label="userAge"
          />
        </div>
        <div className="flex items-center border-b-2 py-2 mb-9">
          <input
            className="bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:outline-none"
            type="email"
            placeholder="UserEmail"
            aria-label="userEmail"
          />
        </div>
        <div className="flex items-center border-b-2 py-2 mb-9">
          <input
            className="bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:outline-none"
            type="password"
            placeholder="UserPassword"
            aria-label="userPassword"
          />
        </div>
        <button
          className="flex justify-start bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
