import React from 'react'
import { logo } from '../helpers/images'
import { NavLink } from 'react-router-dom'

const Sidebar:React.FC = () => {
  return (
    <div className=''>
        <img src={logo} alt="" />

        <nav>
            <ul>
                <li>
                    <NavLink to='/workspace'>Workspace</NavLink>
                </li>
                <li>
                    <NavLink to='/client'>Workspace</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar