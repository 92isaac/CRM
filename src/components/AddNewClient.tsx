import React from 'react'
import { useNavigate } from 'react-router-dom';
import { userPlaceholder } from '../helpers/images';
import { Button } from '../helpers/Button';

export const AddNewClient:React.FC = () => {
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
            <div className="text-center mb-5">
                <label
                  htmlFor="fileInput"
                  className="bg-[#FCB900] text-[white] w-full rounded-md font-semibold py-3 px-12"
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
         <Button title='Use webcam' className='text-red-700 font-semibold border-2 w-full border-red-700 rounded-md px-6 py-2' OnClick/>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 mb-4 md:mb-8 md:mt-12">
          <Button
            title="Back"
            className="text-white bg-[#FCB900] rounded-md px-6 py-2"
            OnClick={() => navigate(-1)}
          />
        </div>
        </div>
      </div>
  )
}
