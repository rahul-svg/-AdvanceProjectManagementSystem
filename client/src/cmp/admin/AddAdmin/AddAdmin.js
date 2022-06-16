import React,{useState} from 'react';
import Header from '../../Header/Admin/Header'
import Axios from 'axios';
import './AddAdmin.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function AddAdmin() {

    const [emailReg,setEmailReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
 
 

  const register = () => {
    Axios.post("/api/admin/register", {
      userEmail: emailReg,
      userPassword: passwordReg,
     }).then((response) => {
        console.log(response.data);
     }).catch((err) => {
       console.log(err);
     });
   };

  return (
    <div>
      <>
      <Header/>
      </>
      <div className='add-admin'>
      <form className='login-form'>
      <Card sx={{ Maxwidth: 600 }}  style={{backgroundColor: "#00b0ff"}}>
      <CardMedia >
        <img src={require('../../../assets/GBPEC.png')} alt="GBPEC"/>
      </CardMedia>
      <CardContent className='card_content'>
        <Typography gutterBottom variant="h5" component="div">
        <Typography variant="body2" color="text.secondary" >
          <label className='signIn'>Sign-Up</label>
         
        </Typography>
        <div className="email-field">
          <span className="email-field-label">Enter your Email</span>
          <br/>
          <input type="email" onChange = {(e) => setEmailReg(e.target.value)}/>
        </div>
        <div className='password-field'>
          <span className="password-label">Enter your Password</span>
          <br/>
          <input type="password"  onChange={(e) => setPasswordReg(e.target.value)} />

        </div>
       
        </Typography>
      </CardContent>
      <CardActions>
       <button className="button" type="submit" onClick = {register}>Submit</button>
      </CardActions>
    </Card>
      </form>
    </div>
    </div>
   
  )
}

export default AddAdmin;