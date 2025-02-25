import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <div className="w-full max-w-[540px] bg-white mt-[100px] mb-[20px] mx-auto px-[30px] pt-[40px] pb-[70px] rounded-[10px]">
        <h2 className="flex text-[#002765] font-bold align-center mb-[20px]">
          TO-DO LIST
        </h2>
        <div className="flex align-center justify-between bg-[#edeef0] rounded-[30px] pl-[20px] mb-[25px]">
          <input
            className="flex outline-none border-none p-[10px] bg-transparent"
            type="text"
            placeholder="Add a new task"
            id="input-box"
          />
          <button className="border-none outline-none px-[50px] py-[16px] bg-[#ff5945] color-white text-[16px] cursor-pointer rounded-[40px]">
            ADD
          </button>
        </div>
        <ul
          id="list-container"
          className="list-none text-[17px] pt-[12px] pr-[50px] pb-[12px] pl-[8px] select-none relative before:content-none before:absolute before:height-[28px] before:rounded-[50%] before:top-[12px] before:content bg-[url('/images/unchecked.png')] before:bg-size-[contain]"
        >
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
        </ul>
      </div>
    </div>
  );
}
