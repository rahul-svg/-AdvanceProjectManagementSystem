import React,{useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './SignUp.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Login() {

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [logged , setLogged] = useState("");
  const [role,setRole] = useState(false);

 
  const navigate = useNavigate();

 
 
  
  const login = () => {
    Axios.post("/api/admin/login", {
       userEmail: userEmail,
       userPassword: userPassword,
    }).then((response) => {
      if (!response.data.message) {
        setLogged( response.data.message);
     } else {
      alert("Succes")
        setLogged (response.data[0].message);
     }
     
    }).catch((err) => {
      console.log(err);
    });
    navigate('/admin')
      
    };

    
   

   
  return (
    
    <div className='login'>
      <div className='logo'>
        <img src={require('../../../../assets/DESU.png')} alt="DSEU"/>
      </div>
      <form className='login-form'>
      <Card sx={{ Maxwidth: 600 }}  style={{backgroundColor: "#00b0ff"}}>
      <CardMedia >
        <img src={require('../../../../assets/GBPEC.png')} alt="GBPEC"/>
      </CardMedia>
      <CardContent className='card_content'>
        <Typography gutterBottom variant="h5" component="div">
        <Typography variant="body2" color="text.secondary" >
          <span className='signIn'>Sign-In</span>
         
        </Typography>
        <div className="email-field">
          <span className="email-field-label">Enter your Email</span>
          <br/>
          <input type="email" onChange={(e)=>setUserEmail(e.target.value)}/>
        </div>
        <div className='password-field'>
          <span >Enter your Password</span>
          <br/>
          <input type="password"  onChange={(e) => setUserPassword(e.target.value)}/>

        </div>
       
        </Typography>
      </CardContent>
      <CardActions>
       <button className="button"  onClick={login}>Submit</button>
      </CardActions>
     
    </Card>
    <h1>Status{logged}</h1>
      </form>
    </div>
  )
}

export default Login