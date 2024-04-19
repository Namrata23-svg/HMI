import React from 'react';

// import { Button, Descriptions ,PageHeader } from 'antd';
// import PageHeader from "antd"
// import  Icon  from "antd";
 
//  import { Card, Typography, Space  } from 'antd';
 import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
 import bosl from "../assets/bosl.PNG"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input,Space,Typography } from 'antd';
import "../pages/Login.css"
import { useNavigate } from 'react-router-dom';
import log from "../assets/log.jpg"
import Home from './Home';

const { Title, Text } = Typography;
const Login = () => {
    const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
  };
  return (
    
       
    <div className="site-page-header-ghost-wrapper" >
      <Card style={{paddingTop:"15px"}}
      title={
        <Space style={{ height: "50px", paddingLeft: "60px" }}>
        <img src={bosl} style={{ height: "50px", marginTop: "5px" }} />
        <Title level={4} style={{ margin: 0,paddingTop:"8px", color: "red", fontSize: "34px", height: "70px", width: "70px" }}><b>BOSCH</b></Title>
      </Space>
      }
        extra={
          <Space style={{paddingRight:"60px"}}>
            <Button icon={<PhoneOutlined />} type="text">Contact</Button>
            <Button icon={<MenuOutlined />} type="text">Menu</Button>
            
          </Space>
        }
      >
         <div>
        <h1 style={{textAlign:"center",marginTop:"2%"}}>Welcome to HMI CoE</h1>
    </div>
       </Card>
      
        {/* Card content goes here */}
      
      
    
   
    <div className="login-container">
        
        
      <Card style={{ width: "40%",height:"40%" ,marginTop:"-20%"}}>
        
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}

        >
          <Form.Item
            name="username"
            style={{width:"80%",paddingLeft:"28%"}}
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
            
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            style={{width:"80%",paddingLeft:"28%"}}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          

          <Form.Item style={{width:"70%",paddingLeft:"30%",textAlign:"center"}}>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => navigate("/")}>
              Log in
            </Button>
           
          </Form.Item>
        </Form>
      </Card>
    </div></div>
    
  );
};
export default Login;