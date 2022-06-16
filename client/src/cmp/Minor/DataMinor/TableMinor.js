import React from 'react';

import './TableMinor.css';

function TableMajor({minors}) {

  return (
    <div className='table-data'>
        <table className="content-table">
              <thead>
                <tr>
                  <th>Project Title</th>
                  <th>Project Supervisior</th>
                  <th>Project Category</th>
                  <th>Batch/Project Year</th>
                  <th>Branch</th>
                  <th>Position</th>
                  <th>Students and Enrollment No</th>
                </tr>
              </thead>
              <tbody>
              {minors.map((minor) => (
                  <tr>
                  <td className='title'>{minor.Minor}</td>
                  <td>{minor.Project_Supervisior}</td>
                  <td>{minor.Project_Category}</td>
                  <td>{minor.Batch}/{minor.Project_Year}</td>
                  <td>{minor.Branch}</td>
                  <td>{minor.Positions}</td>
                  <td>{minor.StudentDATA}</td>
                </tr>
                ))}
              
              </tbody>
            </table>
    </div>
  )
}

export default TableMajor;