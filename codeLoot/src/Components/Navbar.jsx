import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary_black fixed font-monte text-[1rem] flex w-full py-5 px-2">
      <div className="font-serif font-bold w-[20%]">
        <p className="text-primary_green">Code Loot</p>
      </div>
      <div className="w-full flex">
        <div  className="w-full gap-[3.5rem] flex justify-center">
          <div className="">Explore</div>
          <div className="">Wallet</div>
          <div className="">History</div>
          <div className="">Friends</div>
        </div>
      </div>
      <div className="flex w-[20%]">
        <div>Rick Sanchez</div>
      </div>
    </nav>
  );
};

export default Navbar;
