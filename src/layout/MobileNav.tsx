import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiGrid31 } from 'react-icons/ci'
import { FaUsers, FaTasks, FaTimes } from 'react-icons/fa'
import { GrScheduleNew } from 'react-icons/gr'
import { MdPayment } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { TbReport } from 'react-icons/tb'
import { GlobalUseContext } from '../hook/Context'
import { IoMdArrowDropdown } from "react-icons/io";



const MobileNav:React.FC = () => {
    const { handleChange } = GlobalUseContext()
  return (
    <nav className='z-50 absolute bg-[#f6edd3] min-h-screen transform transition-transform px-6 py-3 duration-300 ease-in-out '>
        <div className="flex justify-end">
            <FaTimes onClick={handleChange}/>
        </div>
    <ul>
        <li className='text-lg mb-8'>
            <NavLink to='/workspace' className='pl-3 text-sm' onClick={handleChange}> <CiGrid31  className="text-lg mr-4 inline-block" /> Workspace</NavLink>
        </li>
        <li className='text-lg mb-8'>
            <NavLink to='/workspace/clients' className='pl-3 text-sm' onClick={handleChange}> <FaUsers  className="text-lg mr-4 inline-block" /> Client</NavLink>
        </li>
        <li className='text-lg mb-8'>
            <NavLink to='/workspace/schedule-appointment' className='pl-3 text-sm' onClick={handleChange}> <GrScheduleNew  className="text-lg mr-4 inline-block" /> Schedule Appointment</NavLink>
        </li>
        <li className='text-lg mb-8'>
            <NavLink to='/workspace/payment' className='pl-3 text-sm' onClick={handleChange}> <MdPayment  className="text-lg mr-4 inline-block" /> Payment</NavLink>
        </li>
        <li className='text-lg mb-8'>
            <NavLink to='/workspace/task' className='pl-3 text-sm' onClick={handleChange}> <FaTasks  className="text-lg mr-4 inline-block" /> Task</NavLink>
        </li>
        <li className='text-lg mb-8'>
            <NavLink to='/workspace/message' className='pl-3 text-sm' onClick={handleChange}> <AiOutlineMessage  className="text-lg mr-4 inline-block" /> Message</NavLink>
        </li>
        <li className="text-lg mb-8">
            <div className="pl-3 text-sm">
              <TbReport className="text-2xl mr-4 inline-block" /> Report{" "}
                <IoMdArrowDropdown className="inline-block ml-28" />
            </div>
          </li>
        
    </ul>
</nav>
  )
}

export default MobileNav