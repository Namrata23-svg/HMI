import React from 'react'
import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
 import logo1 from "../assets/logo1.png"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input,Space,Typography ,message} from 'antd';
import "../pages/Login.css"
import { useNavigate } from 'react-router-dom';
import hmi from "../assets/hmi.png"
import Hdev from "../assets/Hdev.png"

import Divider from '@mui/material/Divider';
 import ux from "../assets/ux.jpg"
 import SOFT from "../assets/SOFT.jpg"
 import automate from "../assets/automate.jpg"
 import tools from "../assets/tools.jpg"
 import leapx from "../assets/leapx.png"
 import evoco from "../assets/evoco.jpg"
 import gts from "../assets/gts.jpg"
 import crisis from "../assets/crisis.jpg"
 import "../pages/circle.css"
import Link from 'antd/es/typography/Link';
 
 


const { Title, Text } = Typography;
const HmiAcc = () => {
    const navigate = useNavigate();
  return (
<div>
<div className="site-page-header-ghost-wrapper" style={{ margin: 0, padding: 0 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 60px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo1} style={{ height: "50px", marginTop: "5px", marginRight: "10px" }} />
        <h4 style={{ margin: 0, color: "red", fontSize: "34px" }}>BOSCH</h4>
      </div>
      
            <Space style={{paddingRight:"60px"}}>
              
              <div style={{ display: "flex", alignItems: "center" }}>
                
        <img src={hmi}  style={{ height: "55px", width:"65px", marginTop:"-15px",marginRight:"50px" ,cursor:"pointer"}} onClick={() => navigate("/")}  />
        
        
      </div>
              
            </Space>
          
        
  </div> </div>
    

        <h1 style={{paddingLeft:"2%",marginBottom:"8px",textAlign:"center",fontWeight:"5px",fontSize:"40px"}}> HMI Accelarators</h1>
       
        
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '10px' }}>
    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={leapx} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px", marginTop: "40px" }}>LeapX</h3>
      </div>
    </Card>

    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card1-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={SOFT} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px", marginTop: "40px" }}>HMI Visualizer</h3>
      </div>
    </Card>
    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card2-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={Hdev} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px", paddingLeft: "30px" }}>HMI Software Development</h3>
      </div>
    </Card>
  </div>

  {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '10px' }}>
    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card2-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={automate} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px", paddingLeft: "30px" }}>HMI Software Development</h3>
      </div>
    </Card>

    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card3-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={tools} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px" }}>HMI V&V</h3>
      </div>
    </Card>
  </div>
</div> */}
</div></div>


  )
}

export default HmiAcc