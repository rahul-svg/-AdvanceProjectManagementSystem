import React from 'react'
import './ThankYou.css';

function Thankyou() {
  return (
    <div className='thankyou'>
        <img src={require('../../../assets//thankyou.jpg')} alt="Thank You"/>
        <span>Click Here To Go</span>
        <a href='/admin'>Home</a>
    </div>
  )
}

export default Thankyou;