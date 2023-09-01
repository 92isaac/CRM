import React from 'react'
import { BsBell } from 'react-icons/bs'
import { logo } from '../helpers/images'

export const DashboardNavbar:React.FC = () => {
  return (
    <div>
        <div className="flex justify-end items-center pr-10">
            <div className='flex justify-between items-center gap-3'>
                <BsBell className='md:text-2xl'/>
                <strong className=''>Kelvin</strong>
                <img src={logo} alt=""  className='w-14 h-14 rounded-full '/>
            </div>
        </div>
    </div>
  )
}
