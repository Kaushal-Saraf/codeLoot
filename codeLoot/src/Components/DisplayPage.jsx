import React, { useEffect, useState } from "react";
import BtnGreen from "./UI/BtnGreen";
import BtnBlack from "./UI/BtnBlack";
import ActiveRooms from "./ActiveRooms";
import JoinRoomModal from "./JoinRoomModal";
import NewRoomForm from "./NewRoomForm";
import { Link, Route, Routes } from "react-router-dom";

const DisplayPage = () => {
  const [joinRoomRequest,setJoinRoomRequest]=useState(false)
  return (
    
    <main className="w-[full] h-[auto] pt-[4rem] px-[2rem] bg-primary_gray flex flex-col items-center text-white">
      {<JoinRoomModal open={joinRoomRequest} onClose={()=>{setJoinRoomRequest(!joinRoomRequest)}}/>}
      <h2 className="text-[25px] font-semibold">You Are Just One CLick</h2>
      <h2 className="text-[25px] font-semibold">Away From BattleField</h2>
      <p className="text-[1rem] font-monte mt-[10px]">
        One piece is the best piece of fiction ever created.If you don't agree I
        will personally hunt you down.
      </p>
      <div className="flex mt-[30px] gap-5">
        <Link to='/createroom' className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md items-center justify-center flex bg-primary_green text-black" >Create Room</Link>
        <div className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white" onClick={()=>{setJoinRoomRequest(!joinRoomRequest)}} >Join Room</div>
      </div>
      <div className="w-full flex text-[1rem] my-4 font-bold items-start">Active Rooms</div>
      <div className="flex gap-5 flex-wrap">
        <ActiveRooms/>
      </div>
      
    </main>
  );
};

export default DisplayPage;
