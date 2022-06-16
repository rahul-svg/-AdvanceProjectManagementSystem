import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li><a href='/admin'>Major Projects</a></li>
            <li><a href='/adminminor'>Minor Projects</a></li>
            <li><a href="/addstudent">Add Project</a></li>
            <li><a href="/addadmin">Add Admin</a></li>
           <li> <a href="/projectsupervisior">Project Supervisiors</a></li>
           
        </ul>
    </div>
  )
}

export default Navbar