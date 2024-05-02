import React, { useState } from 'react';
import hmi from "../assets/hmi.png"
import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
//  import bosl from "../assets/bosl.PNG"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input,Space,Typography ,message} from 'antd';
import Divider from '@mui/material/Divider';
 import ux from "../assets/ux.jpg"
 import SOFT from "../assets/SOFT.jpg"
 import automate from "../assets/automate.jpg"
 import tools from "../assets/tools.jpg"
 import leapx from "../assets/leapx.png"
 import evoco from "../assets/evoco.jpg"
 import gts from "../assets/gts.jpg"
 import crisis from "../assets/crisis.jpg"
 import press from "../assets/press.jpg"
 import Hoverview from "../assets/Hoverview.png"
 import Hsoft from "../assets/Hsoft.png"
 import Htest from "../assets/Htest.png"
 import Hdev from "../assets/Hdev.png"
 import Dev from "../assets/Dev.png"
 import Maya from "../assets/Maya.png"
 import "../pages/circle.css"
 
 import { Link, useNavigate } from 'react-router-dom';


 
// import Hmicoe from "../assets/Hmicoe.PNG"
// import hmicoe1 from "../assets/hmicoe1.PNG"
// import svg1 from "../assets/svg1.png"
// import automotive from "../assets/automotive.png"
const { Title, Text } = Typography;

const Homepage=()=>{
    const navigate = useNavigate(); // Use useNavigate hook here
    
    const [isHovered, setIsHovered] = useState(false);
 
    

  
    return(
    
      
       <div className='circle-card'>
       
        {/* Card content goes here */}
      
    
    
        {/* <div className="site-page-header-ghost-wrapper" style={{ margin: 0, padding: 0 }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 60px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={bosl} style={{ height: "50px", marginTop: "5px", marginRight: "10px" }} />
      <h4 style={{ margin: 0, color: "red", fontSize: "34px" }}>BOSCH</h4>
    </div>
    <Space style={{paddingRight:"60px"}}>
            <Button icon={<PhoneOutlined />} type="text">Contact</Button>
            <div style={{ display: "flex", alignItems: "center" }}>
      <img src={hmi}  style={{ height: "45px", width:"50px", marginTop:"-15px",marginRight:"50px" }} />
      
    </div>
            
          </Space>
  </div>
</div> */}
{/* <Card style={{height:"30%"}}> ?*/}
        <h1 style={{paddingLeft:"2%",marginBottom:"8px",textAlign:"center",fontWeight:"5px",fontSize:"40px"}}> HMI Centre of Excellence (CoE)</h1>
       
        
       {/* </Card> */}
     

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' ,justifyContent:"centre"}}>
            
      <Card  style={{ width: 300 ,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }} hoverable
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/HMI")} className='card-hover' >
        
        <div className="custom-image">
          <img alt="example" width="100%" src={Hdev} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px",marginTop:"40px"}}>HMI Overview</h3>
          
          </div>
          
          
      </Card>

      <Card style={{ width: 300 ,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }} hoverable
       onClick={() => navigate("/leapx")} className='card1-hover'>
        <div className="custom-image">
          <img alt="example" width="100%" src={Hoverview} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px",marginTop:"40px"}}>UX/UI</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card>

      <Card style={{ width: 300,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }} hoverable
      onClick={() => navigate("/hmianalytics")} className='card2-hover'>
        <div className="custom-image">
          <img alt="example" width="100%" src={Dev} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px",paddingLeft:"30px"}}>HMI Software Development</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card></div></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px' }}>
    


      <Card style={{ width: 300,cursor:"pointer" }} bodyStyle={{ padding: 0 }} hoverable
       onClick={() => navigate("/hmivisualization")}  className='card3-hover'>
      
        <div className="custom-image">
          <img alt="example" width="100%" src={Htest} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px"}}>HMI V&V Solutions</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card>
      <Card style={{ width: 300 ,cursor:"pointer"}} bodyStyle={{ padding: 0 }} hoverable
       onClick={() => navigate("/Mahindra")}  className='card4-hover'>
        <div className="custom-image">
          <img alt="example" width="100%" src={Hsoft}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px"}}>HMI Accelarators</h3>
          
        </div>
      </Card>
      <Card style={{ width: 300 ,cursor:"pointer"}} bodyStyle={{ padding: 0 }} hoverable
      onClick={() => navigate("/ridebuddy")}  className='card5-hover'>
        <div className="custom-image">
          <img alt="example" width="100%" src={Maya}/>
        </div>
        <div className="custom-card">
            <h3 style={{textAlign:"center",fontSize:"20px",paddingLeft:"30px"}}>HMI Software Products</h3>
          
        </div>
      </Card>
      
        </div>
       </div> 
     
      </div>
    
      
    
  

    
);
        }

export default Homepage;