import React from 'react'
import './My_profile.css'
import profile_icon from './Investor.jpg'
function My_profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <div className='upc'>
        <div className='gradient'>

        </div>
        <div className='profile-down'>
            <img src={profile_icon} alt=''/>
            <div className='profile-title'>haisam</div>
            <div className='profile-description'>ohGOUOBVUbdvu;bjbuadbaibvdibadjbvsabaubvaiuduibvjdbaivd</div>
        </div>
      </div>
    </div>
  )
}

export default My_profile
