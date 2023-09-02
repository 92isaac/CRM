import React from "react";
import { userPlaceholder } from "../helpers/images";
import { Button } from "../helpers/Button";
import { useNavigate } from "react-router-dom";

export const CliProfile: React.FC = () => {
    const navigate  = useNavigate()
  return (
    <div className="lg:px-16 lg:py-8">
      <div>
        <h1 className="font-bold text-lg">Client Profile</h1>
        <p className="text-gray-400">View client profile here</p>
      </div>

      <div className="rounded-md shadow md:mt-4 px-4 md:px-8 py-4 bg-[#e5e5e5]">
        <h3>Client Profile</h3>
        <div className="flex gap-10 mt-6">
          <div className="w-24 h-24 rounded-full">
            <img
              src={userPlaceholder}
              alt="placeholder"
              className="object-cover rounded-full"
            />
          </div>
          <div className="">
            <h1 className="font-semibold mb-2">Odusote Mayorkun</h1>
            <p className="text-gray-400 font-semibold text-sm mb-2">
              adegoketemitope1909@gmail.com
            </p>
            <p className="font-semibold text-gray-400 text-sm mb-2">
              <span>Female </span> <span>54 years Old</span>{" "}
              <span> Nigeria</span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 mt-6">
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">Name</p>
          <h3 className="font-bold">Odusote Mayorkun</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">Email</p>
          <h3 className="font-bold">adegoketemitope1909@gmail.com</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Applicant Fullname{" "}
            <span className="text-red-600">(as shown in passport)</span>
          </p>
          <h3 className="font-bold">adegoketemitope1909@gmail.com</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">Gender</p>
          <h3 className="font-bold">Female</h3>
        </div>
        <div className="my-3 flex lg:gap-40 items-center">
          <div>
            <p className="text-gray-400 font-semibold text-sm pb-2">
              Place of Birth
            </p>
            <h3 className="font-bold">Nigeria</h3>
          </div>
          <div>
            <p className="text-gray-400 font-semibold text-sm pb-2">
              Date of Birth
            </p>
            <h3 className="font-bold">04/11/2014</h3>
          </div>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Country of Citizenship
          </p>
          <h3 className="font-bold">Nigeria, Uganda</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Marrital Status
          </p>
          <h3 className="font-bold">Married</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Education{" "}
            <span className="text-red-600">
              (Client's highest level of Education)
            </span>
          </p>
          <h3 className="font-bold">Bachelor's Degeree</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Current Occupation
          </p>
          <h3 className="font-bold">Enginner</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Phone Number
          </p>
          <h3 className="font-bold">+234(0)8160730668</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Residential Address
          </p>
          <h3 className="font-bold">
            No 2, olonade close, monota, Ibadan Oyo state Nigeria
          </h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Mailing Address
          </p>
          <h3 className="font-bold">
            No 2, olonade close, monota, Ibadan Oyo state Nigeria
          </h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Country of intrest
          </p>
          <h3 className="font-bold">Iceland</h3>
        </div>
        <div className="my-3">
          <p className="text-gray-400 font-semibold text-sm pb-2">
            Purpose of travelling
          </p>
          <h3 className="font-bold">Trade</h3>
        </div>
      </div>
      <div className="flex justify-end mt-6 mb-4 md:mb-8 md:mt-12">
        <Button title='Back' className="text-white bg-[#FCB900] rounded-md px-6 py-2" OnClick={()=>navigate(-1)}/>
      </div>
    </div>
  );
};