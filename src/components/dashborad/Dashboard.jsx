import React from 'react'


const Dashboard = () => {




  const logout =()=>{
    localStorage.removeItem('token-info');
    window.location.href = '/';
   
}
  return (
    <div>
      hello world!
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
