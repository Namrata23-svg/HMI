import React from 'react';
import hmi from "../assets/hmi.png"

// import { Button, Descriptions ,PageHeader } from 'antd';
// import PageHeader from "antd"
// import  Icon  from "antd";
 
//  import { Card, Typography, Space  } from 'antd';
 import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
 import logo1 from "../assets/logo1.png"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input,Space,Typography ,message} from 'antd';
import "../pages/Login.css"
import { useNavigate } from 'react-router-dom';
import log from "../assets/log.jpg"
import Home from './Home';
import Link from 'antd/es/typography/Link';

const { Title, Text } = Typography;
const Login = () => {
    const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    if (values.username === 'hmicoe' && values.password === 'hmicoe') {
      // If correct, navigate to the desired page
      message.success('Login successful');
      navigate('/');
    } else {
      // If incorrect, show an error message (you can handle this part as needed)
    message.error('Incorrect username or password');
    }

    
  };
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
                <Link>
        <img src={hmi}  style={{ height: "65px", width:"85px", marginTop:"-15px",marginRight:"50px" }} />
        </Link>
        
      </div>
              
            </Space>
          
        
  </div> </div>
    
         {/* <div>
        <h1 style={{textAlign:"center",marginTop:"2%"}}>Welcome to HMI CoE</h1>
    </div> */}
       
      
        {/* Card content goes here */}
      
      
    
   
    <div className="login-container" >
        
        
      <Card style={{ width: "40%",height:"40%" ,marginTop:"-20%",backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
      <h1 style={{textAlign:"center",marginTop:"2%"}}>Welcome to HMI CoE</h1>
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
            style={{width:"70%",paddingLeft:"25%"}}
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
            style={{width:"70%",paddingLeft:"25%"}}
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
          

          <Form.Item style={{width:"70%",paddingLeft:"22%",textAlign:"center"}}>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Log in
            </Button>
           
          </Form.Item>
        </Form>
      </Card>
    </div></div>
    
  );
};
export default Login;