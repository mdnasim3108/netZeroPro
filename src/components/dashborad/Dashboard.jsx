import React from 'react'
import {getAuth} from 'firebase/auth'

const Dashboard = () => {
  const auth = getAuth()
  // console.log(auth.currentUser.displayName);
  const logout =()=>{
    localStorage.removeItem('token-info');
    window.location.href = '/';
   
}
const user = auth.currentUser;
  return (
    <div>
      hello world!
      {user.displayName}             
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
