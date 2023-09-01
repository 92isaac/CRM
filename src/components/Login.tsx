import React from "react";
import { logo } from "../helpers/images";

const Login: React.FC = () => {
  return (
    <div className={`pt-[100px]`}>
      <div className="border p-10 md:w-[50%] lg:w-[30%] mx-auto bg-white ">
        <div className="flex justify-between items-center">
          <div className="text-black">
            <h1 className="font-bold">Login</h1>
            <p className="text-xs md:text-lg">Log in to your account</p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <form action="">
            <div className="mb-6">
                <label htmlFor="email" className="block pb-3 font-bold">Email</label>
                <input type="text" className="border-2 p-2 w-full" title="email"/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block pb-3 font-bold">Password</label>
                <input type="password" className="border-2 p-2 w-full" title="email"/>
            </div>
            <div className="w-[90%] mx-auto mt-5">
                    <button className="bg-[#FCB900] w-full p-3 text-white uppercase text-xs">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
