import React, { useState } from "react";
import "./AddStudent.css";
import Axios from "axios";
import HeaderLogo from "../Header/Logo/HeaderLogo";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [newStudent, setNewStudent] = useState({
    Enrollment_No: "",
    Student_Name: "",
    Branch: "",
    Batch: "",
    Minor: "",
    Major: "",
  });

  const handleStudentForm = (event) => {
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
  };

  console.log(newStudent);
  const navigate = useNavigate();

  const registerStudent = () => {
    Axios.post("/api/add/student", newStudent)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/addmajor");
  };

  return (
    <>
      <>
        <HeaderLogo />
      </>

      <div className="addStudent">
        <div className="header">
          <h1>Student Details</h1>
        </div>
          <form className="form">
            <div className="entity">
              <label>Enrollment No.</label>
              <input
                type="number"
                name="Enrollment_No"
                onChange={handleStudentForm}
                value={newStudent.Enrollment_No}
              />
            </div>
            <div className="entity">
              <label>Student Name</label>
              <input
                type="text"
                name="Student_Name"
                onChange={handleStudentForm}
                value={newStudent.Student_Name}
              />
            </div>
            <div className="entity">
              <label>Branch</label>
              <input
                type="text"
                name="Branch"
                onChange={handleStudentForm}
                value={newStudent.Branch}
              />
            </div>
            <div className="entity">
              <label>Batch</label>
              <input
                type="number"
                name="Batch"
                onChange={handleStudentForm}
                value={newStudent.Batch}
              />
            </div>
            <div className="entity">
              <label>Minor Project</label>
              <input
                type="text"
                name="Minor"
                onChange={handleStudentForm}
                value={newStudent.Minor}
              />
            </div>
            <div className="entity">
              <label>Major Project</label>
              <input
                type="text"
                name="Major"
                onChange={handleStudentForm}
                value={newStudent.Major}
              />
            </div>
            <button className="button" type="submit" onClick={registerStudent}>
              Submit
            </button>
          </form>
          <span className="here">Click Here To Go</span>
        <a className="url" href='/admin'>Home</a>
      </div>
    </>
  );
}

export default AddStudent;
