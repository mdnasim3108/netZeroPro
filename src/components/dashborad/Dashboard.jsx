import React from 'react'
import {getAuth} from 'firebase/auth'

const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user != null ){
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    
  }



  const logout =()=>{
    localStorage.removeItem('token-info');
    window.location.href = '/';
   
}


  return (
    <div>
      <div>hello world!
      email </div> 
      <div>         
      <button onClick={logout}>Logout</button></div>
    </div>
  )
}

export default Dashboard
