const express = require('express');
const db = require('./config/db')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MinorProjectRoute = require('./routes/MinorProject.route');
const MajorProjectRoute = require('./routes/MajorProject.route');
const studentProjectRoute = require('./routes/Student.Project.route')





const app = express();

const PORT = 5000;

const saltRound = 10;



app.use(bodyParser.urlencoded({extended : false}));


app.use(cookieParser());
app.use(bodyParser.json());


app.use (
  session ({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
          expires: 60 * 60 * 24,
      },
  })
);


app.get('/' , (req,res) => {
  res.send("Hello World")
})



app.use('/api/minor/projects', MinorProjectRoute);

app.use('/api/major/projects', MajorProjectRoute);

app.use('/api/add/student', studentProjectRoute );


// Register New Admin

app.post('/api/admin/register', (req, res)=> {
  const userEmail = req.body.userEmail;
  const userPassword = req.body.userPassword;
  bcrypt.hash(userPassword,saltRound, (err, hash) => {
  if (err) {
          console.log(err)
      }
      db.execute( 
          "INSERT INTO admin (userEmail, userPassword) VALUES (?,?)",
          [userEmail, hash], 
          (err, result)=> {
              console.log(err);
          }
      );
  })
});


// Login Session




// Login Existing Admin

app.post('/api/admin/login', (req, res) => {
 const userEmail = req.body.userEmail;
 const userPassword = req.body.userPassword;
 
 db.execute(
        "SELECT * FROM admin WHERE userEmail = ?;",
        [userEmail], 
        (err, result)=> {
            if (err) {
                res.send({err: err});
            }
            if (result.length > 0) {
                bcrypt.compare(userPassword, result[0].userPassword, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else{
                        res.send({message: "Wrong username/ password comination!"}); 
                    }
                });
            } else {
                res.send({ message: "User doesn't exists"});
            }
        }
    );
});
 




app.listen(PORT, () => {
    console.log("running server");
});

