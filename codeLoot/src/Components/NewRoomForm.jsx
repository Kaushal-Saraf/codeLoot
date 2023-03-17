import React from "react";
import BtnGreen from "./UI/BtnGreen";
import BtnBlack from "./UI/BtnBlack";

const NewRoomForm = () => {
  return (
    <div className="w-full text-[27px] bg-black font-monte text-white h-[100vh] flex flex-col justify-center items-center py-5">
      {/* <form className="flex flex-col px-5 w-[40rem] gap-10 items-start">
        <h2 className="font-sans tracking-wide font-extrabold">Rick Rules</h2>
        <div className="flex  w-full justify-between text-[1.5rem]">
          <label for="topic">Topic</label>
          <select id="topic" name="topic">
            <option value="array">array</option>
            <option value="loop">loop</option>
            <option value="string">string</option>
            <option value="graphs">graphs</option>
          </select>
        </div>
        
          <label>Difficulty</label>
          <input type="text" placeholder="Enter Topic"></input>
        </div>
        <div className="flex w-full justify-between text-[1.5rem]">
          <label>No of Question</label>
          <input type="text" placeholder="Enter Topic"></input>
        </div>
        <div className="flex w-full justify-between text-[1.5rem]">
          <label>Schedule Time</label>
          <input type="text" placeholder="Enter Topic"></input>
        </div>
        <div className="flex w-full justify-between text-[1.5rem]">
          <label>Duration</label>
          <input type="text" placeholder="Enter Topic"></input>
        </div>
        <div className="flex text-[1.5rem] w-[100%] justify-between">
          <button>Cancel</button>
          <button className="bg-primary_green text-black">Create Room</button>
        </div>
      </form> */}
      <form className="grid-cols-2  text-[27px] pt-[5rem] grid px-5 w-[50rem] gap-10 items-start">
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
          <BtnGreen btnLabel="Easy" className=""></BtnGreen>
          <BtnBlack btnLabel="Medium" className=""></BtnBlack>
          <BtnBlack btnLabel="Hard" className=""></BtnBlack>
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
          <BtnGreen btnLabel="15" className=""></BtnGreen>
          <BtnBlack btnLabel="30" className=""></BtnBlack>
          <BtnBlack btnLabel="45" className=""></BtnBlack>
          <BtnBlack btnLabel="60" className=""></BtnBlack>
        </div>

        <div className="flex gap-5 text-[1.5rem] items-center col-span-2">
          <input id="privateRoom" type="checkbox" />
          <span>Private Room</span>
        </div>
        
        <button className="border-2 border-white rounded-md">Cancel</button>
        <BtnGreen btnLabel='Create Room'/>
      </form>
    </div>
  );
};

export default NewRoomForm;
