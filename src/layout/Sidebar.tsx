import React from 'react'
import { logo } from '../helpers/images'
import { NavLink } from 'react-router-dom'
import { CiGrid31 } from 'react-icons/ci'
import { FaUsers, FaTasks } from 'react-icons/fa'
import { GrScheduleNew } from 'react-icons/gr'
import { MdPayment } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { TbReport } from 'react-icons/tb'

const Sidebar:React.FC = () => {
  return (
    <div className=''>
        <img src={logo} alt="" className='mx-auto'/>

        <nav>
            <ul>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace' className='pl-3'> <CiGrid31  className="text-2xl mr-4 inline-block" /> Workspace</NavLink>
                </li>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace/clients' className='pl-3'> <FaUsers  className="text-2xl mr-4 inline-block" /> Client</NavLink>
                </li>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace/schedule-appointment' className='pl-3'> <GrScheduleNew  className="text-2xl mr-4 inline-block" /> Schedule Appointment</NavLink>
                </li>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace/payment' className='pl-3'> <MdPayment  className="text-2xl mr-4 inline-block" /> Payment</NavLink>
                </li>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace/task' className='pl-3'> <FaTasks  className="text-2xl mr-4 inline-block" /> Task</NavLink>
                </li>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace/message' className='pl-3'> <AiOutlineMessage  className="text-2xl mr-4 inline-block" /> Message</NavLink>
                </li>
                <li className='text-lg mb-8'>
                    <NavLink to='/workspace/report' className='pl-3'> <TbReport  className="text-2xl mr-4 inline-block" /> Report</NavLink>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar