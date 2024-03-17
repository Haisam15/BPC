import React from 'react'
import "./Home.css"
import { Link, Outlet } from 'react-router-dom';
import { FaUserAlt, FaSafari, FaTasks, FaCar, FaHome} from 'react-icons/fa'
function Home() {
  return (
    <div className='d-flex home'>
      <div className='d-flex sidebar flex-column flex-shrink-0 bg-dark'>
        <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
        <li className='nav-item'>                    
            <Link to="/admin" className='nav-link text-white btn btn-primary'>
              <FaHome/> <span className='ms-2'>Home</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/admin/dashboard" className='nav-link text-white btn btn-primary'>
              <FaSafari/> <span className='ms-2'>Dashboard</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/admin/users" className='nav-link text-white btn btn-primary'>
              <FaUserAlt/> <span className='ms-2'>Users</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/admin/investorusers" className='nav-link text-white btn btn-primary'>
              <FaUserAlt/> <span className='ms-2'>Investor</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/admin/entrepreuneurusers" className='nav-link text-white btn btn-primary'>
              <FaUserAlt/> <span className='ms-2'>Entrepreuneur</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/admin/skilledusers" className='nav-link text-white btn btn-primary'>
              <FaUserAlt/> <span className='ms-2'>Skilled Person</span>
            </Link>
          </li>
          <li className='nav-item'>                    
            <Link to="/admin/projects" className='nav-link text-white btn btn-primary'>
              <FaTasks/> <span className='ms-2'>Projects</span>
            </Link>
          </li>
        </ul>
      </div>
      
        <div className='content container mt-3'>
            <div className='row'>
                <div className='col-md-3 text-white col bg-success d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Investors</p>
                    <p>15</p>
                    
                </div>
                <div className='col-md-3 text-white col bg-danger d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Entrepreuneur</p>
                    <p>50</p>
                </div>
                <div className='col-md-3 text-white col bg-warning d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total SkilledPerson</p>
                    <p>45</p>
                </div>
                <div className='col-md-3 text-white col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Projects</p>
                    <p>39</p>
                </div>
                <Outlet/>
            </div>
            
        </div>
        
        
    </div>
    
  )
}

export default Home