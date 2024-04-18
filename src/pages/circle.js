import React, { useState } from 'react';
import {Card} from "antd"

import Divider from '@mui/material/Divider';
 import svg from "../assets/svg.png"
 import SOFT from "../assets/SOFT.jpg"
 import automate from "../assets/automate.jpg"
 import tools from "../assets/tools.jpg"
 import leapx from "../assets/leapx.PNG"
 import crisis from "../assets/crisis.jpg"
 import "../pages/circle.css"
 
 import { Link, useNavigate } from 'react-router-dom';
 
// import Hmicoe from "../assets/Hmicoe.PNG"
// import hmicoe1 from "../assets/hmicoe1.PNG"
// import svg1 from "../assets/svg1.png"
// import automotive from "../assets/automotive.png"


const Homepage=()=>{
    const navigate = useNavigate(); // Use useNavigate hook here
    console.log("Card clicked");
    const [isHovered, setIsHovered] = useState(false);
 
    

  
    return(
    <div>
        <Card style={{height:"30%"}}>
        <h1 style={{paddingLeft:"2%",marginTop:"-10px",textAlign:"center",fontWeight:"5px"}}> HMI Centre of Excellence (CoE)</h1>
        
        {/* <h5 style={{paddingLeft:".1%",marginTop:"-35px",color:"#3275a8"}}>Centre of Excellence</h5>
        
        <Divider textAlign="left"></Divider>
        <h3 style={{paddingLeft:"10%",marginTop:"-7.5%",color:"#3275a8"}}><b>HMI CoE</b> : <b>H</b>uman <b>M</b>achine <b>I</b>nterface - <b>C</b>entre <b>o</b>f <b>E</b>xcellence</h3> */}
        
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' ,justifyContent:"centre"}}>
            
      <Card style={{ width: 300 ,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/HMI")} >
        
        <div className="custom-image">
          <img alt="example" width="100%" src={svg} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px",marginTop:"50px"}}>UX/UI</h3>
          
          </div>
          
          
      </Card>

      <Card style={{ width: 300 ,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }}  onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={SOFT} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px"}}>HMI SOFTWARE DEVELOPMENT</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card>

      <Card style={{ width: 300,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }} onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={automate} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px",paddingLeft:"30px"}}>AUTOMATED HMI V&V</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card></div></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px' }}>
    


      <Card style={{ width: 300,cursor:"pointer" }} bodyStyle={{ padding: 0 }}  onClick={() => navigate("/HMI")}>
      
        <div className="custom-image">
          <img alt="example" width="100%" src={tools} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px"}}>TOOLS</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card>
      <Card style={{ width: 300 ,cursor:"pointer"}} bodyStyle={{ padding: 0 }}  onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={leapx}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px"}}>LeapX</h3>
          
        </div>
      </Card>
      <Card style={{ width: 300 ,cursor:"pointer"}} bodyStyle={{ padding: 0 }} onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={crisis}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px"}}>HMI Analytics Framework</h3>
          
        </div>
      </Card>
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
      
      
      {/* First row of cards */}
      
        </div>
       </div> 
      {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'centre' ,paddingLeft:"19%",marginTop:"10px"}}>
      <div style={{ flexDirection: 'column', alignItems: 'centre' }}> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px' }}>
      <Card style={{ width: 300,cursor:"pointer" }} bodyStyle={{ padding: 0 }} onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={crisis}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px"}}>Evoco </h3>
          
        </div>
      </Card>
      <Card style={{ width: 300,cursor:"pointer" }} bodyStyle={{ padding: 0 }} onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={crisis}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px"}}>HMI Visualizer </h3>
          
        </div>
      </Card>
      <Card style={{ width: 300,cursor:"pointer" }} bodyStyle={{ padding: 0 }} onClick={() => navigate("/HMI")}>
        <div className="custom-image">
          <img alt="example" width="100%" src={crisis}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px"}}>GTS </h3>
         
        </div>
      </Card>
      </div></div>
      </div>
    
      
    
  

    
);
        }

export default Homepage;