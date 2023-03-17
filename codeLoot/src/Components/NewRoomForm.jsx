import React from "react";
import BtnGreen from "./UI/BtnGreen";
import BtnBlack from "./UI/BtnBlack";
import { Link, Route, Routes } from "react-router-dom";

const NewRoomForm = () => {
  return (
    <div className="w-full  bg-black font-monte text-white h-[100vh] flex flex-col justify-center items-center py-5">

      <form className="grid-cols-2  text-[1.25rem] pt-[6rem] grid px-5 w-[50rem] gap-7 items-start">
        <h2 className="font-sans col-start-1 col-span-2 tracking-wide font-extrabold">
          Rick Rules
        </h2>

        <label for="topic">Topic</label>
        <select  id="topic" name="topic">
          <option  value="array">Array</option>
          <option value="loop">Loop</option>
          <option value="string">String</option>
          <option value="graphs">Graphs</option>
        </select>

        <label for="difficulty">Difficulty</label>
        <div id="difficulty" className="flex justify-between gap-5">
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_green text-black'>Easy</div>
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_gray text-white'>Medium</div>
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_gray text-white'>Dark</div>
        </div>

        <label for="questions">No of Question</label>
        <input id="questions" type="number" name="questions" min="1" max="5" />

        <label for="roomTime">Schedule Time</label>
        <div id="roomTime" className="flex gap-5">
          <input  type="date" id="roomtimeDate" name="roomtimeDate" />
          <input type="time" id="roomTimeTime" name="roomTimeTime" />
        </div>

        <label for="duration">Duration</label>
        <div id="durationculty" className="flex gap-5 justify-between">
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_green text-black'>15</div>
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_gray text-white'>30</div>
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_gray text-white'>45</div>
          <div className='py-2 px-8 text-[12px] font-poppins flex items-center justify-center tracking-wide rounded-md bg-primary_gray text-white'>60</div>
         
        </div>

        <div className="flex gap-5 text-[1rem] items-center col-span-2">
          <input id="privateRoom" type="checkbox" />
          <span>Private Room</span>
        </div>
        
        <button className="text-[1rem] py-2 border-white rounded-md bg-primary_green text-black">Create Room</button>
        <Link to='/' className="text-[1rem] text-center py-2 border-2 border-white rounded-md">Cancel</Link>

      </form>
    </div>
  );
};

export default NewRoomForm;
