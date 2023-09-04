import React from "react";
import { useNavigate } from "react-router-dom";
import { userPlaceholder } from "../helpers/images";
import { Button } from "../helpers/Button";
import { GlobalUseContext } from "../hook/Context";

export const AddNewClient: React.FC = () => {
  const {
    videoRef,
    isCapturing,
    stopCapture,
    captureImage,
    startCapture,
    canvasRef,
  } = GlobalUseContext();
  const navigate = useNavigate();
  return (
    <div className="lg:px-16 lg:py-8 bg-[]">
      <div>
        <h1 className="font-bold text-lg">Client Profile</h1>
        <p className="text-gray-400">View client profile here</p>
      </div>
      <div className="bg-white p-2 md:p-8 rounded-md mt-6">
        <div className="rounded-md shadow md:mt-4 px-4 md:px-8 py-4 bg-[#fcfafa]">
          <h3>Client's Profile</h3>
          <div className="md:flex gap-10 mt-6">
            <div className="w-24 h-24 rounded-full">
              <img
                src={userPlaceholder}
                alt="placeholder"
                className="object-cover rounded-full"
              />
            </div>
            <div className="w-[]">
              <div className="text-center mt-4 md:mt-0 mb-5">
                <label
                  htmlFor="fileInput"
                  className="bg-[#FCB900] text-[white] w-full rounded-md font-semibold py-3 px-6"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="hidden cursor-pointer"
                />
              </div>
              <Button
                title="Use webcam"
                className="text-red-700 font-semibold border-2 w-full border-red-700 rounded-md px-6 py-2"
                OnClick={isCapturing ? stopCapture : startCapture}
              />
            </div>
            {isCapturing && (
              <>
                <video ref={videoRef} autoPlay />
                <button onClick={captureImage}>Capture Image</button>
              </>
            )}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        </div>

        <div className="mt-4">
          <h1 className="font-bold">Enter Client's Details</h1>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
            <div>
              <label htmlFor="fullname" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                title="fullname"
                className="focus:border-[#FCB900] border-2 border-[#8a8989]  focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="fullname" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                title="fullname"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="fullname" className="block font-bold mb-2">
                {" "}
                Applicant Fullname{" "}
                <span className="text-red-600">(as shown in passport)</span>
              </label>
              <input
                type="text"
                title="fullname"
                className="focus:border-[#FCB900] border-2 border-[#8a8989]  focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="gender" className="block font-bold mb-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="lg:flex justify-between items-center gap-x-4">
            <div className="w-full">
              <label htmlFor="fullname" className="block font-bold mb-2">
                Place of Birth
              </label>
              <input
                type="email"
                title="fullname"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            <div className="w-full">
              <label htmlFor="fullname" className="block font-bold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                title="fullname"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            </div>
            <div>
              <label htmlFor="ctitzenship" className="block font-bold mb-2">
                Country of Citizenship
              </label>
              <select
                id="ctitzenship"
                name="ctitzenship"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="maritalstatus" className="block font-bold mb-2">
              Marital Status
              </label>
              <select
                id="maritalstatus"
                name="maritalstatus"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md"
              >
                <option value="male">Married</option>
                <option value="female">Single</option>
              </select>
            </div>
            <div>
              <label htmlFor="education" className="block font-bold mb-2">
                Gender
              </label>
              <select
                id="education"
                name="education"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="fullname" className="block font-bold mb-2">
                Current  Status
              </label>
              <input
                type="email"
                title="fullname"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                title="phone"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">
               Residential Address
              </label>
              <textarea name="" id="" cols={10} rows={3} title="address"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "></textarea>
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">
               Mailing Address
              </label>
              <textarea name="" id="" cols={10} rows={3} title="address"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "></textarea>
            </div>
            <div>
              <label htmlFor="intrest" className="block font-bold mb-2">
                Country of intrest
              </label>
              <select
                id="intrest"
                name="education"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md"
              >
                <option value="male">Nigeria</option>
                <option value="female">Congo</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">
                Purpose of Travelling
              </label>
              <input
                type="text"
                title="Purpose of Travelling"
                className="border-2 border-[#8a8989] focus:border-[#FCB900] focus:outline-none w-full py-3 px-3 rounded-md "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-x-3 mt-6 mb-4 md:mb-8 md:mt-12">
          <Button
            title="Cancel"
            className="text-red-700 border-2 font-bold border-red-700 rounded-md px-6 py-2"
            OnClick={() => navigate(-1)}
          />
          <Button
            title="Back"
            className="text-white bg-[#FCB900] rounded-md px-6 py-2"
            OnClick={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
};
