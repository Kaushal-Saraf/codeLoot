import React from "react";
import { FiShare2 } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import BtnGreen from "./UI/BtnGreen";
const ActiveRoomCard = ({ topics, questions, difficulty, duration, price }) => {
  return (
    <div className="flex flex-col bg-primary_gray_light rounded-lg w-[15rem] py-[1rem] px-[.5rem] gap-1 font-monte text-white">
      <div className="flex justify-between">
        <span className="font-extrabold text-[1rem] tracking-widest font-monte">
          Rick Rules
        </span>
        <div className="w-[5rem] py-[3px] rounded-3xl bg-primary_gray justify-center items-center px-[12px] flex gap-2">
          <GrGroup className="text-primary_green" />
          <span className="text-primary_green">40</span>
        </div>
      </div>
      <div className="flex flex-col text-[12px] gap-1">
        <div className="flex">
          <span className="text-gray-400">Topics : </span>
          {topics}
        </div>
        <div className="flex">
          <span className="text-gray-400">Topics : </span>
          {questions}
        </div>
        <div className="flex">
          <span className="text-gray-400">Topics : </span>
          {difficulty}
        </div>
        <div className="flex">
          <span className="text-gray-400">Topics : </span>
          {duration} min
        </div>
        <div className="flex">
          <span className="text-gray-400">Topics : </span>
          {price}
        </div>
        <div className="flex text-primary_green">
          <span className="text-gray-400">Topics : </span>
        </div>
      </div>
      <div className="justify-center flex w-full">
        <BtnGreen
          className="w-[5rem]"
          btnLabel={`Join for ${price}$`}
          btnFont="1.25rem"
        />
      </div>
    </div>
  );
};

export default ActiveRoomCard;
