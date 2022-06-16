import React from 'react'
import './Student.css';
import Header from '../../../Header/Student/Header';
import ViewMajor from '../../../Major/Fetch&View/ViewMajor'


function Student() {
  return (
   <div className='home'>
    <>
      <Header/>
    </>
    <>
    <ViewMajor/>
    </>
    
   
   </div>
  )
}

export default Student;