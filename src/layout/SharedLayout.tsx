import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { DashboardNavbar } from "./Navbar";



const SharedDashboardLayout = () => {
  return (
    <div className="mx-5 md:mx-0 max-h-screen">
      <div className="md:flex gap- justify-between w-full">
        <div className=" md:mx-0 md:w-1/5 md:h-screen shadow my-1 w-full md:fixed">
          {/* <Sidebar /> */}
          <Sidebar />
        </div>
        <div className=" w-full h-full md:w-4/5  mt-1  md:ml-[20%] bg-[#faf9f9]">
          <div className="md:mx-0 md:shadow bg-white">
            <DashboardNavbar />
          </div>
         <main className="w-  md:mb-10 md:h-[83vh] mx-5 overflow-y-scroll mt-5">
            <Outlet />
          </main>
      
        </div>
      </div>
    </div>
  );
};

export default SharedDashboardLayout;
