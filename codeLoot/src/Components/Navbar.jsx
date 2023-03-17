import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary_black fixed font-monte text-[1rem] flex w-full py-5 px-2">
      <div className="font-serif font-bold w-[20%]">
        <p className="text-primary_green">Code Loot</p>
      </div>
      <div className="w-full flex">
        <div  className="w-full gap-[3.5rem] flex justify-center">
          <Link to='/' className="">Explore</Link>
          <Link to='/wallet' className="">Wallet</Link>
          <Link to='/history' className="">History</Link>
          <Link to='/friends' className="">Friends</Link>
           
        </div>
      </div>
      <div className="flex w-[20%]">
        <div>Rick Sanchez</div>
      </div>
    </nav>
  );
};

export default Navbar;
