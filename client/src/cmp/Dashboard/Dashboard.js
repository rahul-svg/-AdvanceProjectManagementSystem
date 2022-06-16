import React from 'react'
import './Dashboard.css';
import Header from './Header/Header';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className='dashboard'>
        <div className='dashboard-header'>
          <Header/>
        </div>
        <div className="dashboard-section">
        <div className='admin'>
            <button className='dashboard-button'  onClick={() => navigate('/signIn')} ><img src={require('../../assets/admin-dashboard.png')} alt="ADMIN"/></button>
            <h2>Admin</h2>
        </div>
        <div className='student' >
         <button className="dashboard-button" onClick={() => navigate('/student')} ><img src={require('../../assets/student-dashboard.png')} alt="STUDENT"/> 
          <h2>Student</h2></button>
        </div>
        </div>
       
    </div>
  )
}

export default Dashboard;