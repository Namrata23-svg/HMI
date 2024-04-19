import React from 'react'


import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
import bosl from "../assets/bosl.PNG"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input,Space,Typography } from 'antd';

const { Title, Text } = Typography;
const MyComponent = () => {
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
     </Card>

      
    </div>

    
  )
}

export default MyComponent