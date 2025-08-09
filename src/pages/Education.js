import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div className='education-wrapper'>
        <div className="about">
          <h1 className="about-box-heading">Education</h1>
          <h3>St Joseph Engineering College Vamanjoor, Manglore</h3>
          <ol>
            <li>III Year CGPA : </li>
            <li>II Year CGPA  : </li>
            <li>I Year CGPA   : </li>
          </ol>
          <h3>Government PU College, Karwar</h3>
          <ol>
            <li>Karnataka Pre-University Education</li>
            <li>II PUC Boards Percentage  : 95.67%</li>
          </ol>
          <h3>St Michael's Convent High School Karwar</h3>
          <ol>
            <li>Karnataka State Board</li>
            <li>X Boards Percentage :94.72%</li>
          </ol>
      </div>
    </div>
  )
}

export default Education