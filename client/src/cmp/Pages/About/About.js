import React from 'react'
import './About.css';
import Header from '../../Header/Student/Header'


function About() {
  return (
    <>
    <div className='header'>
      <Header/>
    </div>
     <div className='about'>
      <h1 className='about-title'>About us</h1>
      
      <div className='about-section'>
        
        <div className='about-descripation'>
       <p>G B Pant DSEU Okhla-I Campus (Formerly,konw as, G B Pant Government Engineering College) was established by the Govt. of NCT of Delhi in the year 2007 with the aim of imparting quality technical education for the students not only from Delhi but from the entire nation. 
         Since its inception, the faculty and staff have been tirelessly working towards the growth of the institution.</p>
         <p>Earlier, it was affiliated to Guru Gobind Singh Indraprastha University,
            but now, it is the one of the campus of Delhi Skill and Entrepreneurship University (DSEU) 
            and approved by AICTE, the college started with two branches namely, 
            Mechanical and Automation Engineering, Electronics and Communications Engineering. 
            Increasing its horizon, in the year 2010, a new discipline, 
            Computer Science and Engineering course was started in the college.
            </p>
            <br/>
            <p>With the presence of vibrant and dynamic faculty members of highest academic calibre, 
              selected by UPSC, G. B. Pant has been able to educate students in three engineering 
              discipline enroute to their graduation, who would subsequently be pursuing their 
              careers in Industries/ MNC’s or in higher education in India & abroad to enhance their qualification.
              </p>
              <br/>
              <p>Presently, the college has been operating in one of the buildings of G. B. Pant Institute Technology (G. B. Pant DSEU Okhla-III) 
                campus and has been equipped with ultra modern research facilities at par with apex institutions of the nation. The college has already 
                established various labs for all the branches with a state of art modern equipments, which ensures that the students are trained in the 
                practical realm according to the current industry standards. The Delhi government has already approved the plans for construction of a new campus 
                with an estimate of around five twenty Crores (Rs. 520 Cr) for the institute with the state of art facilities.
                </p>
     </div>
     <div className='about-pictures'>
       <img src={require('../../../assets/DSEU.jpeg')}     alt="DSEU"/>
        <img src={require('../../../assets/reception.jpeg')}  alt="reception"/>
     </div>

      
      </div>
     

      </div>
    </>
   
  )
}

export default About;