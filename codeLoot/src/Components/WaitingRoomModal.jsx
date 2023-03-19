import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
const WaitingRoomModal = ({ openWaitingRoomModal, onCloseWaitingRoomModal }) => {
  const [{newRoom},dispatch]=useStateValue()
  const TIME=new Date();
  
  // const hour=Math.round(TIME.getTime()/)
  // useEffect(() => {
  //   console.log(TIME.getSeconds())
  
  
  // }, [third])
  
  console.log(TIME.getHours())
  console.log(TIME.getMinutes())

  if (!openWaitingRoomModal) return null;
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[15rem] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
        <div className="text-primary_green font-monte">Room unlocks in</div>
        <div className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black">
          00:04 min
        </div>
        <div
          className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
          onClick={onCloseWaitingRoomModal}
        >
          Cancel
        </div>
      </div>
    </div>,
    document.getElementById("joinRoomPortal")
  );
};

export default WaitingRoomModal;