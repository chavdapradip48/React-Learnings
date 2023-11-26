import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);
    return (
    user ? 
    <div className="main-container-profile">
        Your Most Welcome, <strong>{user.username}</strong>
    </div>
    :
    <></>
  )
}

export default Profile;