import React from "react";
import ReactDOM from "react-dom";
const LoginPage = ({ openLoginModal, oncloseLoginModal }) => {
  if (!openLoginModal) return null;
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[20rem] p-5 w-auto bg-primary_gray flex flex-col gap-5 items-center">
        <div className="w-full font-bold cursor-pointer text-right " onClick={oncloseLoginModal}>
          X
        </div>
        <label className="text-primary_green" htmlFor="loginId">
          Username
        </label>
        <input type="text" name="loginId" id="loginId" />
        <label className="text-primary_green" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" />

        <button
          className="w-[10rem] py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black"
          onClick={() => {
            console.log("first");
          }}
        >
          Submit
        </button>
      </div>
    </div>,
    document.getElementById("loginRoomPortal")
  );
};

export default LoginPage;
