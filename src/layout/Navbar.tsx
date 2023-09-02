import React from "react";
import { BsBell } from "react-icons/bs";
import { logo } from "../helpers/images";
import { TfiMenu } from "react-icons/tfi";
import MobileNav from "./MobileNav";
import { GlobalUseContext } from "../hook/Context";

export const DashboardNavbar: React.FC = () => {
  const { toggle,  handleChange } = GlobalUseContext()



  return (
    <div className="relative">
      <TfiMenu className="md:hidden absolute top-4 text-2xl" onClick={()=>{handleChange()}}/>
      {toggle && <MobileNav />}
      <div className="flex justify-end items-center pr-10">
        <div className="flex justify-between items-center gap-3">
         <div className="relative">
         <BsBell className="md:text-2xl" />
         <span className="absolute -top-1 -right-1 md:w-4 md:h-4 text-center w-3 h-3 text-[10px] md:text-xs text-white rounded-full bg-red-700">2</span>
         </div>
          <strong className="">Kelvin</strong>
          <img src={logo} alt="" className="w-14 h-14 rounded-full " />
        </div>
      </div>
    </div>
  );
};
