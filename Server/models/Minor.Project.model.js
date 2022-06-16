const db = require('../config/db');



const ProjectDataMinor = function(projectData) {
    this.Minor = projectData.Minor;
    this.Project_Supervisior = projectData.Project_Supervisior;
    this.Project_Year = projectData.Project_Year;
    this.Project_Category = projectData.Project_Category;
    this.Positions = projectData.Positions;
}



const getMinorProjectData =  'SELECT minor_project.Minor,minor_project.Project_Supervisior, minor_project.Project_Category,minor_project.Positions,students.Branch,students.Batch,minor_project.Project_Year,GROUP_CONCAT(students.Enrollment_No  ,": ",students.Student_Name SEPARATOR ",  ") AS StudentDATA FROM students INNER JOIN minor_project ON minor_project.Minor = students.Minor GROUP BY students.Minor';
const postMinorProjectData = ' INSERT INTO minor_project SET ?'



// Get All projectData
ProjectDataMinor.getALLprojects = (result) => {
    db.query(
       getMinorProjectData, (err,res) => {
        if(err){
            console.log("Error While Fetching Data from DataBase")
            result(null,err);
        }else{
            console.log("Employee Fetching Data from DataBase Successfully")
            result(null,res);
        }

    })
}


// Create New Minor 
ProjectDataMinor.createMinor = (minorReqData,result) => {
    db.query(postMinorProjectData,minorReqData,(err, res) => {
        if(err){
            console.log("Error While Post Minor Data");
            result(null,err);
        }else{
            console.log('New Minor Created Successfully');
            result(null,res);
        }
    })
}


module.exports = ProjectDataMinor;