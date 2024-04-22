import React from 'react'
import MyComponent from './changing'
import { Tabs } from 'antd';
import leap from "../assets/leap.pptx"
// import Box from '@mui/material/Box';
// import "../pages/HMI.css"
// import { Link } from 'react-router-dom';

const onChange = (key) => {
    console.log(key);
  };
  
  const items = [
    {
      key: '1',
      label: 'PPT',
      children: (
        <div>
          
          <iframe 
          
           src="src/assets/leap.pptx"
        width="100%" 
        height="569" 
        frameborder="0" 
        allowFullScreen="true" 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true"
      ></iframe>
        </div>
      ),
    },
    {
      key: '2',
      label: 'VIDEO',
      children: (
        <div>
          
          <iframe 
  width="960" 
  height="569" 
  src="https://www.youtube.com/embed/R_2DCYl4VaA" 
  // https://www.youtube.com/watch?v=R_2DCYl4VaA
  frameborder="0" 
  allowfullscreen
></iframe>
        </div>
      ),
    },
    
    {
      key: '3',
      label: 'CASE STUDY',
      children: (
        <div>
          
          <iframe
  src="https://www.sfu.ca/~palys/Stake2003-CaseStudies.pdf"
  width="100%"
  height="600px"
  frameborder="0"
  allowfullscreen
></iframe>
        </div>
      ),
    },
  ];
  

    
  
  const HMI = () => {
    return (
        <div>
        
        <MyComponent/>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{paddingLeft:"80px"}} />
      </div>
    );
  };
  
  export default HMI;

         
   