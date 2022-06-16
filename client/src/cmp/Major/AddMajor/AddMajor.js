import React, { useState } from "react";
import Axios from "axios";
import HeaderLogo from "../../Header/Logo/HeaderLogo";
import { useNavigate } from "react-router-dom";
import './AddMajor.css';

function AddMajor() {
  const [addMajor, setAddMajor] = useState({
    Major: "",
    Project_Supervisior: "",
    Project_Year: "",
    Project_Category: "",
    Positions: "",
  });

  const handleMajorForm = (event) => {
    setAddMajor({ ...addMajor, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  console.log(addMajor);

  const registerMajor = () => {
    Axios.post("/api/major/projects", addMajor)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/addminor");
  };

  return (
    <>
      <>
        <HeaderLogo />
      </>
      <div className="addMajor">
        <div className="header">
          <h1>Major Project Details</h1>
        </div>
        <div>
          <form className="form">
            <div className="entity">
              <label>Major Project Title</label>
              <input
                type="text"
                name="Major"
                onChange={handleMajorForm}
                value={addMajor.Major}
              />
            </div>
            <div className ="entity">
              <label>Project Supervisior</label>
              <input
                type="text"
                name="Project_Supervisior"
                onChange={handleMajorForm}
                value={addMajor.Project_Supervisior}
              />
            </div>
            <div className="entity">
              <label>Project Category</label>
              <input
                type="text"
                name="Project_Category"
                onChange={handleMajorForm}
                value={addMajor.Project_Category}
              />
            </div>
            <div className="entity">
              <label>Project Year</label>
              <input
                type="number"
                name="Project_Year"
                onChange={handleMajorForm}
                value={addMajor.Project_Year}
              />
            </div>
            <div className="entity">
              <label>Position</label>
              <input
                type="text"
                name="Positions"
                onChange={handleMajorForm}
                value={addMajor.Positions}
              />
            </div>
            <button className= "button" type="submit" onClick={registerMajor}>
              Submit
            </button>
          </form>
        </div>
        <span className="here">Click Here To Go</span>
        <a className="url" href='/admin'>Home</a>
      </div>
    </>
  );
}

export default AddMajor;
