import React from "react";
import './HeaderLogo.css';

function HeaderLogo() {
  return (
    <div className="header_logo">
      <div className="logo-strip">
        <div className="phone">
        <img src={require('../../../assets/phone.png')} alt="phoneLogo"/>
          <h3>+91-11-26382314</h3>
       
        </div>
        <div className="email">
        <img src={require('../../../assets/email.png')} alt="phoneLogo"/>
         <h3>info@gbpec.edu.in</h3>
        
        </div>
      </div>
      <div className="logo-img">
      <div className="GBPEC">
        <img src={require("../../../assets/GBPEC.png")} alt="GBPEC" />
      </div>
      <div className="apms">
      <img src={require("../../../assets/amp.png")} alt="GBPEC" />
        <h1>ALMS</h1>
      </div>
      <div className="DSEU">
        <img src={require("../../../assets/DESU.png")} alt="DESU" />
      </div>
      </div>
     
    </div>
  );
}

export default HeaderLogo;
