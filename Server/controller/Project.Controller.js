const ProjectDataMinor = require('../models/Minor.Project.model');
const ProjectDataMajor = require('../models/Major.Project.model');
const minorModel = require('../models/Minor.Project.model');
const majorModel = require('../models/Major.Project.model');
const studentModel = require('../models/Student.Project.model');


// Get Minor Project List

exports.getMinorProjectsList = (req, res)=> {

ProjectDataMinor.getALLprojects((err, projects) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Projects', projects);
        res.send(projects)
    })
    
}

// Get Major Project List

exports.getMajorProjectsList = (req,res) => {
    ProjectDataMajor.getALLprojects((err, projects) => {
        console.log('We are here')
        if(err)
        res.send(err);
        console.log('Projects',projects)
        res.send(projects);
    })
}

// Create New Minor Project Data 


exports.createNewminor = (req,res) => {

    const minorReqData = new minorModel(req.body);
    console.log('minorReqData', minorReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message : 'Please fill all Details'});
    }else{
        console.log('valid Data');
        minorModel.createMinor(minorReqData, (err,minor) => {
           if(err){
               res.send(err);
               res.json({status: true, message : 'Minor Created Successfully', data: minor})
           }
        })
    };
};


// Create New Major Project Data

exports.createNewmajor = (req,res) => {

    const majorReqData = new majorModel(req.body);
    console.log('majorReqData', majorReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message : 'Please fill all Details'});
    }else{
        console.log('valid Data');
        majorModel.createMajor(majorReqData, (err,major) => {
           if(err){
               res.send(err);
               res.json({status: true, message : 'Major Created Successfully', data: major})
           }
        })
    };
};






// Create New Student Data

exports.createNewStudent = (req,res) => {
    
    const studentReqData = new studentModel(req.body);
    console.log('studentReqData', studentReqData);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill All Details'})
    }else{
        console.log('Valid Data');
        studentModel.createStudent(studentReqData, (err,student) => {
            if(err){
                res.send(err);
                res.json({status: true, message: "Student created Successfully", data:student})
            }
        })
    }
}






