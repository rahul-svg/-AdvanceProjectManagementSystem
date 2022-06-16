const mysql = require("mysql2");


const db = mysql.createConnection({
    user : "mysql",
    host : "localhost",
    password : "R@hul99#",
    database : "project_mangement",
}) 

module.exports = db;


db.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})


/*connection.query('SELECT * FROM project_mangement.students', function(err, rows, fields) 
{
  if (err) throw err;

  console.log(rows);
});
*/
