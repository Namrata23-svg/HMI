import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Descriptions ,PageHeader } from 'antd';
// import PageHeader from "antd"
// import  Icon  from "antd";
 import { Menu } from "antd";
 import Homepage from "./circle";
 import { Card, Typography, Space  } from 'antd';
 import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
 import bosl from "../assets/bosl.PNG"
 import hmi from "../assets/hmi.png"
import SearchBar from "./SearchBar";

const { Title, Text } = Typography;



// import { Link } from "@bosch/react-frok";
// import { Navigation } from "@bosch/react-frok";
// import { HeaderNavigationItem } from "@bosch/react-frok";
// import { Header } from "@bosch/react-frok";
// import { Button } from "@bosch/react-frok";
// import BOSCH from "../assets/BOSCH.png"
// import { ThemeProvider, createTheme } from '@mui/material/styles';

 





const Home = () => {
  return (
    <div>
       <div className="site-page-header-ghost-wrapper" style={{ margin: 0, padding: 0 }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 60px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={bosl} style={{ height: "50px", marginTop: "5px", marginRight: "10px" }} />
      <h4 style={{ margin: 0, color: "red", fontSize: "34px" }}>BOSCH</h4>
    </div>
    
          <Space style={{paddingRight:"60px"}}>
            <SearchBar/>
            
            <div style={{ display: "flex", alignItems: "center" }}>
      <img src={hmi}  style={{ height: "55px", width:"65px", marginTop:"-15px",marginRight:"50px" }} />
      
    </div>
            
          </Space>
        
      
</div> </div>
     {/* <div className="site-page-header-ghost-wrapper" >
       <Card style={{paddingTop:"25px"}}
      title={
        <Space style={{ height: "50px", paddingLeft: "60px" }}>
        <img src={bosl} style={{ height: "50px", marginTop: "5px" }} />
        <Title level={4} style={{ margin: 0,paddingTop:"8px", color: "red", fontSize: "34px", height: "70px", width: "70px" }}><b>BOSCH</b></Title>
      </Space>
      }
        extra={
          <Space style={{paddingRight:"60px"}}>
            
            <Button icon={<MenuOutlined />} type="text">Menu</Button>
            
          </Space>
        }
      >
       </Card> */}
        {/* Card content goes here */}
      
      <Homepage/> 
    </div>
    
  )
  }




export default Home;
