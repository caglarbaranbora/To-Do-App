"use client";
import { useState } from "react";

export default function page() {
  const [task, setTask] = useState([]);

  const handleClick = () => {
    const inputBox = document.getElementById("input-box");
    const inputValue = inputBox.value;
    if (inputValue === "") {
      alert("Please enter a task");
    } else {
      setTask([...task, inputValue]);
      inputBox.value = "";
    }
  };

  const handleDelete = (index) => {
    const newTask = task.filter((_, i) => i !== index);
    setTask(newTask);
  };
  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <div className="w-full max-w-[540px] bg-white mt-[100px] mb-[20px] mx-auto px-[30px] pt-[40px] pb-[70px] rounded-[10px]">
        <h2 className="flex text-[#002765] font-bold align-center mb-[20px]">
          TO-DO LIST
        </h2>
        <div className="flex align-center justify-between bg-[#edeef0] rounded-[30px] pl-[20px] mb-[25px]">
          <input
            className="flex outline-none border-none p-[10px] bg-transparent text-[#002765] font-bold"
            type="text"
            placeholder="Add a new task"
            id="input-box"
          />
          <button
            onClick={handleClick}
            className="border-none outline-none px-[50px] py-[16px] bg-[#ff5945] color-white text-[16px] cursor-pointer rounded-[40px]"
          >
            ADD
          </button>
        </div>
        <ul>
          <li>
            {task.map((task, index) => (
              <div
                key={index}
                className="flex justify-between align-center bg-[#edeef0] rounded-[30px] pl-[20px] mb-[10px] py-[10px] text-[#002765] font-bold"
              >
                {task}
                <button
                  className="border-none outline-none px-[20px] py-[10px] bg-[#ff5945] color-white text-[16px] cursor-pointer rounded-[40px]"
                  onClick={() => handleDelete(index)}
                >
                  DELETE
                </button>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
