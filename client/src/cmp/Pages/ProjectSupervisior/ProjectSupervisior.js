import React from "react";
import "./ProjectSupervisior.css";
import Header from "../../Header/Admin/Header";
import {Card,CardContent,Typography} from '@mui/material'
import { width } from "@mui/system";

function ProjectSupervisior() {
  return (
    <>
      <>
        <Header />
      </>
      <div className='projectSupervisior'>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-block w-100" src="..." alt="First slide">
        <div className="row">
          <div className="col">
          <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img src={require('../../../assets/Aman_Saini_ECE.png')} alt=""/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h1>Miss. Aman Saini</h1> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>H.O.D <span>(Assistant Professor Of ECE)</span></h3>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img src={require('../../../assets/Vanteshwari_P_ECE.png')} alt="Vanteshwari_P_ECE"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Ms P.Vanteshwari</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h4>Assistant Professor Of ECE</h4>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
                      <div className="img">
                      <img src={require('../../../assets/Sanjay_Kumar_ECE.jpg')} alt="Sanjay_Kumar_ECE"/>
                      </div>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Mr. Sanjay Kumar</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>Assistant Professor Of ECE</h4>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img src={require('../../../assets/Deepak_Sant.jpg')} alt="Deepak_Sant"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Mr. Deepak    <br/>Sant</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h4>Assistant Professor Of ECE</h4>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-block w-100" src="..." alt="Second slide">
        <div className="row">
          <div className="col">
            <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img  src={require('../../../assets/Rohit_Anand_ECE.png')} alt=""/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Mr. Rohit Anand</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h4>Assistant Professor Of ECE</h4>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
      <div className="img2" >
      <img  src={require('../../../assets/Dr_Vibhakr_Shrimali_ECE.jpg')}  alt="Vanteshwari_P_ECE"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      <h1>Dr.Vibhakr Shrimali</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3>Assistant Professor Of ECE</h3>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
                      <div className="img">
                      <img src={require('../../../assets/Dr_Krishna_Singh_ECE.jpg')} alt="Sanjay_Kumar_ECE"/>
                      </div>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Dr Krishna Singh </h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h4>Assistant Professor Of ECE</h4>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img src={require('../../../assets/MamtaSingh.png')} alt="Deepak_Sant"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Miss. Mamta Singh</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3>Assistant Professor Of ECE</h3>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-block w-100" src="..." alt="Third slide">
        <div className="row">
          <div className="col">
          
          <div className="card">
                    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img src={require('../../../assets/ChandraMohan_Dharmapuri_ECE.jpg')} alt=""/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>ChandraMohan Dharmapuri</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3>Assistant Professor Of ECE</h3>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#0000ffcc"}}>
      <div className="img">
      <img src={require('../../../assets/Padam_Saini_ECE.png')}  alt="Vanteshwari_P_ECE"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Mr. Padam Saini</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3>Assistant Professor Of ECE</h3>
        </Typography>
      </CardContent>
      
    </Card>
                    </div>
                    <div className="card">
                    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#0000ffcc"}}>
                  
      <div className="img">
      <img src={require('../../../assets/Vadthya_Bheemudu_ECE.jpg')} alt="Vanteshwari_P_ECE"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Vadthya Bheemudu</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3>Assistant Professor Of ECE</h3>
        </Typography>
      </CardContent>
      
    </Card>
      
  
                    </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      </div>
    </>
    
  );
}

export default ProjectSupervisior;
