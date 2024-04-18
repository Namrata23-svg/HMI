import React from 'react';
import { Link } from "@bosch/react-frok";
import { Navigation } from "@bosch/react-frok";
import { HeaderNavigationItem } from "@bosch/react-frok";
import { Header } from "@bosch/react-frok";
// import { Button } from "@bosch/react-frok";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import "../pages/Login.css"
import { useNavigate } from 'react-router-dom';
import log from "../assets/log.jpg"
import Home from './Home';
const Login = () => {
    const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
  };
  return (
    
       
    <div>
        
    <Header
      // breadcrumbs=
      // {
      //   // <>
      //   //   <Link href="http://test" label="News and Stories" />
      //   //   <Link href="http://test" label="Internet of Things" />
      //   //   <Link href="http://test" label="Page Name" />
          
      //   // </>
         
      // }
      
      menu=
      {
        <Navigation languageSelector>
          <HeaderNavigationItem
            trigger={<Button label="Products & Services" />}
          >
            <Link label="Products & Services overview" />
            <Link href="https://bosch.com" label="Mobility" />
            <Link href="#" label="At home" />
            <Link
              href="http://bosch.com/"
              label="Industry and trades"
              target="_blank"
            />
            <Link href="#" label="Connected products and services" />
            <Link href="#" label="Market-specific solutions" />
          </HeaderNavigationItem>
          <HeaderNavigationItem trigger={<Button label="Company" />}>
            <Link label="Company overview" />
            <HeaderNavigationItem trigger={<Button label="Our People" />}>
              <Link href="#" label="Our people overview" />
            </HeaderNavigationItem>
            <Link href="#" label="Annual report and figures" />
            <Link href="#" label="Our history" />
            <Link href="#" label="Sustainability" />
            <Link href="#" label="Supply chain" />
          </HeaderNavigationItem>
          <Link
            href="http://bosch.com"
            label="External link"
            target="_blank"
          />
          <Link href="http://bosch.com" label="Internal link" />
        </Navigation>
      }
      menuTrigger="Menu" onChange={function ro() {}}
      onReset={function ro() {}}
      onSubmit={function ro() {}}
      quickLinks=
      {[
      //   {
      //     icon: "login",
      //     label: "Login",
      //     onClick: function ro() {},
      //   },
        {
          icon: "chat",
          label: "Contact",
          onClick: function ro() {},
        },
        
      ]}
      // searchForm=
      // {{
      //   onChange: function ro() {},
      //   onSubmit: function ro() {},
      //   searchField: {
      //     id: "searchFieldId",
      //   },
      // }}
      // searchTrigger="Search" suggestions={[]}>
      > 
       
    </Header>
    <div>
        <h1 style={{textAlign:"center",marginTop:"-3%"}}>Welcome to HMI CoE</h1>
    </div>
    <div className="login-container">
        
        
      <Card style={{ width: "40%",height:"50%" ,marginTop:"-20%"}}>
        
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