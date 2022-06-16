import React from "react";
import "./Contact.css";
import Header from "../../Header/Student/Header";



function Contact() {
  return (
    <>
   <>
   <Header/>
   </>
    <div className="contact">
      <div className="contact-us">
        <h1>Contact us</h1>
      </div>
      <div className="contact-panel">
        <div className="map-header">
          <h1 className="map-header-title">Principal Office</h1>
          <div className="map-header-contents">
            <div className="map-header-contents-icon">
              <img
                src={require("../../../assets/map.png")}
                height="30px"
                alt="location"
              />
              <h2>
                Okhla Industrial Estate Phase 3 Rd,
                <br /> Okhla Phase III, Okhla Industrial Area, <br /> New Delhi,
                Delhi 110020
              </h2>
            </div>
            <div className="map-header-contents-icon">
              <img
                src={require("../../../assets/phone-call.png")}
                height="30px"
                alt="location"
              />
              <h2>+91-11-26382314</h2>
            </div>
            <div className="map-header-contents-icon">
              <img
                src={require("../../../assets/fax-machine.png")}
                height="30px"
                alt="location"
              />
              <h2>+91-11-26382317</h2>
            </div>
            <div className="map-header-contents-icon">
              <img
                src={require("../../../assets/gmail.png")}
                height="30px"
                alt="location"
              />
              <h2>principal@gbpec.edu.in</h2>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    </>
  );
}

export default Contact;
