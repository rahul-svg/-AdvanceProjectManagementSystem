const db = require('../config/db');


const projectDataStudent = function(studentData){
    this.Enrollment_No = studentData.Enrollment_No;
    this.Student_Name = studentData.Student_Name;
    this.Branch = studentData.Branch;
    this.Batch = studentData.Batch;
    this.Minor = studentData.Minor;
    this.Major = studentData.Major;
}

const postStudentData = 'INSERT INTO students SET ?';

projectDataStudent.createStudent = (studentReqData,result) => {
    db.query(postStudentData,studentReqData,(err, res) => {
        if(err){
            console.log("Error While Post Student Data");
            result(null,err);
        }else{
            console.log('New Student Created Successfully');
            result(null,res);
        }
    })
}


module.exports = projectDataStudent;