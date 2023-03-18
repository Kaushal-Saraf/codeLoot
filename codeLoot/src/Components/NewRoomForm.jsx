import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateRoomModal from "./CreateRoomModal";
import {useStateValue} from '../context/stateProvider'
import { v4 as uuid } from 'uuid';
const NewRoomForm = () => {
  const [{newRoom},dispatch]=useStateValue()
  const [createRoomRequest, setcreateRoomRequest] = useState(false);
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("");
  const [question, setQuestion] = useState("");
  const [startTime, setStartTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const newRoomObjectFunction = () => {
    
    const newRoomObject = {
      id:small_id,
      topic: topic,
      duration: duration,
      question: question,
      startTime: startTime,
      difficulty: difficulty,
    };
    dispatch({
      type:"SET_NEW_ROOM",
      newRoom:newRoomObject
    })
    console.log(newRoomObject)
  };
  return (
    <div className="w-full  bg-black font-monte text-white h-[auto] flex flex-col justify-center items-center p-4">
      {
        <CreateRoomModal
          openRoomModal={createRoomRequest}
          onCloseRoomModal={() => {
            setcreateRoomRequest(!createRoomRequest);
          }}
        />
      }
      <form className="grid-cols-2  text-[1.25rem] pt-[4rem] grid px-5 w-[50rem] gap-7 items-start">
        <h2 className="font-sans col-start-1 col-span-2 tracking-wide font-extrabold">
          Rick Rules
        </h2>

        <label for="topic">Topic</label>
        <select required
          id="topic"
          name="topic"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <option value="array">Array</option>
          <option value="loop">Loop</option>
          <option value="string">String</option>
          <option value="graphs">Graphs</option>
        </select>

        <label for="duration">Duration</label>
        <div
          id="duration"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          className="flex justify-between gap-5"
        >
          <input type="radio" id="quater" name="radioDuration" value="15" />
          <label for="quater">15</label>

          <input type="radio" id="half" name="radioDuration" value="30" />
          <label for="half">30</label>

          <input type="radio" id="semi" name="radioDuration" value="45" />
          <label for="semi">45</label>

          <input type="radio" id="full" name="radioDuration" value="60" />
          <label for="full">60</label>
        </div>

        <label for="questions">No of Question</label>
        <select
          id="questions"
          name="number"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label for="roomTime">Schedule Time</label>
        <div
          id="roomTime"
          className="flex gap-5"
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        >
          <input type="date" id="roomtimeDate" name="roomtimeDate" />
          <input type="time" id="roomTimeTime" name="roomTimeTime" />
        </div>

        <label for="difficulty">Difficulty</label>

        <div
          id="difficulty"
          className="flex gap-5 justify-between"
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <input type="radio" id="easy" name="radioDifficulty" value="Easy" />
          <label for="easy">Easy</label>

          <input
            type="radio"
            id="medium"
            name="radioDifficulty"
            value="Medium"
          />
          <label for="medium">Medium</label>

          <input type="radio" id="hard" name="radioDifficulty" value="Hard" />
          <label for="hard">Hard</label>
        </div>

        <div className="flex gap-5 text-[1rem] items-center col-span-2">
          <input id="privateRoom" type="checkbox" />
          <span>Private Room</span>
        </div>

        <button
          onClick={(e) => {
            event.preventDefault();
            newRoomObjectFunction();
            setcreateRoomRequest(!createRoomRequest);
          }}
          className="text-[1rem] py-2 border-white rounded-md bg-primary_green text-black"
        >
          Create Room
        </button>
        <Link
          to="/"
          className="text-[1rem] text-center py-2 border-2 border-white rounded-md"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default NewRoomForm;
