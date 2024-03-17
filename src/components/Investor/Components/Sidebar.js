import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FaUserAlt, FaSafari,  FaHome, FaCashRegister} from 'react-icons/fa';
function Sidebar() {
  return (
    <>
    <div className='d-flex sidebar flex-column flex-shrink-0 bg-dark'style={{ position: 'absolute' }}>
        <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
        <li className='nav-link text-white 'style={{ textAlign: 'center' }}>
            <span>BPC</span>
        </li>
        <li className='nav-item'>                    
            <Link to="/investor/dashboard" className='nav-link text-white btn btn-primary'>
              <FaHome/> <span className='ms-2'>Dashboard</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/investor/timeline" className='nav-link text-white btn btn-primary'>
              <FaSafari/> <span className='ms-2'>Timeline</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/investor/myprofile" className='nav-link text-white btn btn-primary'>
              <FaUserAlt/> <span className='ms-2'>My Profile</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/investor/myinvestments" className='nav-link text-white btn btn-primary'>
              <FaCashRegister/> <span className='ms-2'>My Investments</span>
            </Link>
          </li>
          
        </ul>
      </div>
      <div className='content' style={{ marginLeft: '-700px' }}>
    
        <Outlet/>
</div>

      
      
    </>
  )
}

export default Sidebar
