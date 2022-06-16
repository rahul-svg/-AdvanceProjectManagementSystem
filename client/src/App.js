import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './cmp/Dashboard/Dashboard';
import Student from './cmp/Pages/Home/Student/Student'
import Admin from './cmp/Pages/Home/Admin/Admin';
import SignUp from './cmp/admin/authentcation/Login/SignUp'
import StudentMinor from './cmp/Minor/Student/StudentMinor'
import Analysis from './cmp/Pages/Analysis/Analysis';
import About from './cmp/Pages/About/About';
import Contact from './cmp/Pages/Contact/Contact'
import AddAdmin from './cmp/admin/AddAdmin/AddAdmin';
import ProjectSupervisior from './cmp/Pages/ProjectSupervisior/ProjectSupervisior';
import AdminMinor from './cmp/Minor/Admin/AdminMinor'
import AddStudent from './cmp/AddStudent/AddStudent';
import AddMajor from './cmp/Major/AddMajor/AddMajor';
import AddMinor from './cmp/Minor/AddMinor/AddMinor';
import Thankyou from './cmp/Pages/Auxillary/Thankyou';
import AProjectSupervisior from './cmp/Pages/ProjectSupervisior/AProjectSupervisior';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ='/' element = {<Dashboard/>}/>
      <Route exact path='/student' element = {<Student/>}/>
      <Route exact path = '/signIn' element = {<SignUp/>}/> 
      <Route exact path = '/admin' element ={<Admin/>}/>
      <Route exact path='/studentminor' element = {<StudentMinor/>}/>
      <Route exact path = '/adminminor' element={<AdminMinor/>}/>
      <Route exact path = '/analysis' element = {<Analysis/>}/>
      <Route exact path = '/about' element = {<About/>}/>
      <Route exact path = '/contact' element = {<Contact/>}/>
      <Route exact path = '/addadmin' element = {<AddAdmin/>}/>
      <Route exact path = '/projectsupervisior' element={<ProjectSupervisior/>}/>
      <Route exact path = '/addstudent' element = {<AddStudent/>}/>
      <Route exact path = '/addminor' element ={<AddMinor/>}/>
      <Route exact path = '/addmajor' element = {<AddMajor/>}/>
      <Route exact path = '/Aprojectsupervisior' element ={<AProjectSupervisior/>}/>
      <Route exact path = '/thankyou' element = {<Thankyou/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
