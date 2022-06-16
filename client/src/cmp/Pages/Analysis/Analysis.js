import React,{useState,useEffect} from 'react'
import './Analysis.css';
import Axios from 'axios';
import {PieChart} from 'react-minimal-pie-chart'
import Header from '../../Header/Student/Header';

function Analysis() {

  return (
    <>
    <>
    <Header/>
    </>
    <div className='title'>
      <h2>Project Categories</h2>
      </div>
    <div className='analysis'>
      
      <div className='piechart'>
      <PieChart
      animate
      animationDuration={500}
      animationEasing="ease-out"
  data={[
    { title: 'Antenna ', value: 5, color: '#FF7300', text:'100', label:'5%'},
    { title: 'Internet Of Things', value: 15, color: '#C13C37' },
    { title: 'Artifical Intelligence', value: 30, color: '#6A2135' },
    { title: 'Machine Learning', value: 20, color: '#52D726' },
    { title: 'Embedded System', value: 10, color: '#FF0000' },
    { title: 'Matlab', value: 20, color: '#007ED6' },
    { title: 'Image Processing', value: 5, color: '#7CDDDD' },

  ]}
/>
      </div>
      <div className='chart-description'>
        <div className='chart-name'>
          <span Style="background-color:#FF7300" className='chart-square'></span>
          <lable className="chart-lable">Antenna</lable>
        </div>
        <div className='chart-name'>
          <span Style="background-color:#C13C37"  className='chart-square'></span>
          <lable className="chart-lable">IOT</lable>
        </div>
        <div className='chart-name'>
          <span Style="background-color:#6A2135"  className='chart-square'></span>
          <lable className="chart-lable">Artifical Intelligence</lable>
        </div>
        <div className='chart-name'>
          <span Style="background-color:#52D726"  className='chart-square'></span>
          <lable className="chart-lable">Machine Learning</lable>
        </div>
        <div className='chart-name'>
          <span Style="background-color:#FF0000"  className='chart-square'></span>
          <lable className="chart-lable">Embedded System</lable>
        </div>
        <div className='chart-name'>
          <span  Style="background-color:#007ED6"  className='chart-square'></span>
          <lable className="chart-lable">Matlab</lable>
        </div>
        <div className='chart-name'>
          <span Style="background-color:#7CDDDD"  className='chart-square'></span>
          <lable className="chart-lable">Image Processing</lable>
        </div>
      </div>
   

    </div>
    </>
    
  )
}

export default Analysis;