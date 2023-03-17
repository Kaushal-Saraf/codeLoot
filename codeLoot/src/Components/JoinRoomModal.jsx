import React from "react";
import ReactDOM from "react-dom";
const JoinRoomModal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[15rem] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
        <div className="text-primary_green font-monte">Enter Room Code</div>
        <input type="text"></input>
        <div className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black">
          Join Room
        </div>
        <div
          className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
          onClick={onClose}
        >
          Cancel
        </div>
      </div>
    </div>,
    document.getElementById("joinRoomPortal")
  );
};

export default JoinRoomModal;
