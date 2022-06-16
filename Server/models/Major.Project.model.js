const db = require('../config/db');



let ProjectDataMajor = function(projectData){
    this.Major = projectData.Major
    this.Project_Supervisior = projectData.Project_Supervisior;
    this.Project_Category = projectData.Project_Category;
    this.Project_Year = projectData.Project_Year;
    this.Positions = projectData.Positions;
}




const getMajorProjectData = 'SELECT major_project.Major,major_project.Project_Supervisior, major_project.Project_Category,major_project.Positions,students.Branch,students.Batch,major_project.Project_Year,GROUP_CONCAT(students.Enrollment_No  ,": ",students.Student_Name SEPARATOR ",  ") AS StudentDATA FROM students INNER JOIN major_project ON major_project.major = students.Major GROUP BY students.Major';
const postMajorProjectData = "INSERT INTO major_project SET ?";
// Get All projectData
ProjectDataMajor.getALLprojects = (result) => {
    db.query(
    getMajorProjectData, (err,res) => {
        if(err){
            console.log("Error While Fetching Data from DataBase")
            result(null,err);
        }else{
            console.log("Employee Fetching Data from DataBase Successfully")
            result(null,res);
        }

    })
}

ProjectDataMajor.createMajor = (majorReqData,result) => {
    db.query(postMajorProjectData,majorReqData,(err, res) => {
        if(err){
            console.log("Error While Post Major Data");
            result(null,err);
        }else{
            console.log('New Major Created Successfully');
            result(null,res);
        }
    })
}










module.exports = ProjectDataMajor;