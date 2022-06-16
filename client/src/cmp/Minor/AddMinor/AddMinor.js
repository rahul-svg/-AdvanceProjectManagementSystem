import React, { useState } from "react";
import Axios from "axios";
import HeaderLogo from "../../Header/Logo/HeaderLogo";
import {  useNavigate } from "react-router-dom";
import './AddMinor.css';

function AddMinor() {
  const [addMinor, setAddMinor] = useState({
    Minor: "",
    Project_Supervisior: "",
    Project_Year: "",
    Project_Category: "",
    Positions: "",
  });

  const handleChange = (event) => {
    setAddMinor({ ...addMinor, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const register = () => {
    Axios.post("/api/minor/projects", addMinor)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate('/thankyou');
  };

  return (
    <>
    <><HeaderLogo/></>
    <div className="addMinor">
      <div className="header">
        <h1>Minor Project Details</h1>
      </div>
      <div>
        <form className="form">
          <div className="entity">
            <label>Minor Project Title</label>
            <input type="text" onChange={handleChange} name='Minor' value={addMinor.Minor} />
          </div>
          <div className="entity">
            <label>Project Supervisior</label>
            <input
              type="text"
              onChange={handleChange} name='Project_Supervisior'
              value={addMinor.Project_Supervisior}
            />
          </div>
          <div className="entity">
            <label>Project Category</label>
            <input
              type="text"
              onChange={handleChange} name='Project_Category'
              value={addMinor.Project_Category}
            />
          </div>
          <div className="entity">
            <label>Project Year</label>
            <input
              type="number"
              onChange={handleChange} name='Project_Year'
              value={addMinor.Project_Year}
            />
          </div>
          <div className="entity">
            <label>Position</label>
            <input
              type="text"
              onChange={handleChange} name='Positons'
              value={addMinor.Positons}
            />
          </div>
          <div>
            <button className="button" type="submit" onClick={register}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <span className="here">Click Here To Go</span>
        <a className="url" href='/admin'>Home</a>
    </div>
    </>
  );
}

export default AddMinor;
