import React from 'react';

import './TableMajor.css';

function TableMajor({majors}) {

  return (
    <div className='table-data'>
        <table className="content-table">
              <thead>
                <tr>
                  <th>Project Title</th>
                  <th>Project Supervisior</th>
                  <th>Project Category</th>
                  <th>Branch</th>
                  <th>Batch/Project Year</th>
                  <th>Position</th>
                  <th>Students and Enrollment No</th>
                </tr>
              </thead>
              <tbody>
              {majors.map((major) => (
                  <tr>
                  <td className='major'>{major.Major}</td>
                  <td>{major.Project_Supervisior}</td>
                  <td>{major.Project_Category}</td>
                  <td>{major.Branch}</td>
                  <td>{major.Batch}/{major.Project_Year}</td>
                  <td>{major.Positions}</td>
                  <td>{major.StudentDATA}</td>
                </tr>
                ))}
              
              </tbody>
            </table>
    </div>
  )
}

export default TableMajor;