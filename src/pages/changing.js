import React from 'react'
import hmi from "../assets/hmi.png"
import ux from "../assets/ux.jpg"
import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
import logo1 from "../assets/logo1.png"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input,Space,Typography } from 'antd';
import "../pages/chnaging.css"
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
const { Title, Text } = Typography;
const MyComponent = () => {
  const navigate=useNavigate()
  return (
  //   <div className="site-page-header-ghost-wrapper" >
  //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 60px", height: "50px" }}>
  //   <div style={{ display: "flex", alignItems: "center" }}>
  //     <img src={bosl} style={{ height: "50px", marginTop: "5px" }} />
  //     <Title level={4} style={{ margin: 0, paddingTop: "8px", color: "red", fontSize: "34px", height: "70px", width: "70px" }}><b>BOSCH</b></Title>
  //   </div>
  //   <div style={{ display: "flex" }}>
  //     <Button icon={<PhoneOutlined />} type="text">Contact</Button>
  //     <Button icon={<MenuOutlined />} type="text">Menu</Button>
  //   </div>
  // </div>
  <div className='changing'> 


     <div className="site-page-header-ghost-wrapper" style={{ margin: 0, padding: 0 }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 60px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo1} style={{ height: "50px", marginTop: "5px", marginRight: "10px" }} />
      <h4 style={{ margin: 0, color: "red", fontSize: "34px" }}>BOSCH</h4>
    </div>
    
          <Space style={{paddingRight:"60px"}}>
            
            
            <div style={{ display: "flex", alignItems: "center" }}>
              
      <img src={hmi}  style={{ height: "65px", width:"85px", marginTop:"-15px",marginRight:"50px",cursor:"pointer" }} onClick={() => navigate("/")}/>
      
      
    </div>
    
            
          </Space>
        
      
</div> </div>

            

    </div>

    
  )
}

export default MyComponent