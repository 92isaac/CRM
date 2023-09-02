import React from "react";
import { logo } from "../helpers/images";
import { NavLink } from "react-router-dom";
import { CiGrid31 } from "react-icons/ci";
import { FaUsers, FaTasks } from "react-icons/fa";
import { GrScheduleNew } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar: React.FC = () => {
  return (
    <div className="">
      <img src={logo} alt="logo" className="mx-auto" />

      <nav>
        <ul>
          <li className="text-lg mb-8">
            <NavLink to="/workspace" className="pl-3 md:text-sm lg:text-lg">
              {" "}
              <CiGrid31 className="text-2xl mr-4 inline-block" /> Workspace
            </NavLink>
          </li>
          <li className="text-lg mb-8">
            <NavLink
              to="/workspace/clients"
              className="pl-3 md:text-sm lg:text-lg"
            >
              {" "}
              <FaUsers className="text-2xl mr-4 inline-block" /> Client
            </NavLink>
          </li>
          <li className="text-lg mb-8">
            <NavLink
              to="/workspace/schedule-appointment"
              className="pl-3 md:text-sm lg:text-lg"
            >
              {" "}
              <GrScheduleNew className="text-2xl mr-4 inline-block" /> Schedule
              Appointment
            </NavLink>
          </li>
          <li className="text-lg mb-8">
            <NavLink
              to="/workspace/payment"
              className="pl-3 md:text-sm lg:text-lg"
            >
              {" "}
              <MdPayment className="text-2xl mr-4 inline-block" /> Payment
            </NavLink>
          </li>
          <li className="text-lg mb-8">
            <NavLink
              to="/workspace/task"
              className="pl-3 md:text-sm lg:text-lg"
            >
              {" "}
              <FaTasks className="text-2xl mr-4 inline-block" /> Task
            </NavLink>
          </li>
          <li className="text-lg mb-8">
            <NavLink
              to="/workspace/message"
              className="pl-3 md:text-sm lg:text-lg"
            >
              {" "}
              <AiOutlineMessage className="text-2xl mr-4 inline-block" />{" "}
              Message
            </NavLink>
          </li>
          <li className="text-lg mb-8">
            <div className="pl-3 md:text-sm lg:text-lg">
              <TbReport className="text-2xl mr-4 inline-block" /> Report{" "}
                <IoMdArrowDropdown className="inline-block ml-28" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
