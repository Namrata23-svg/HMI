import React from 'react'
import MyComponent from './changing'
import DocViewer from 'react-doc-viewer';
import { Tabs } from 'antd';
import leapx from "../assets/leapx.pdf"
import { Viewer } from '@react-pdf-viewer/core'; // Import the viewer component
import '@react-pdf-viewer/core/lib/styles/index.css'; 
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
        <div style={{ width: '100%', margin: 0, padding: 0 }}> 
            {/* <DocViewer
                    documents={[
                        { uri: 'assets/leapx.pdf' } // Replace 'assets/leapx.pdf' with the path to your PDF file
                    ]}
                /> */}
          
            <iframe 
          
           src= {leapx}
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
  

    
  
  const Mypdf = () => {
   
    return (
        <div>
        
        <MyComponent/>
      <Tabs defaultActiveKey="1"  items={items} onChange={onChange} 
      
      
      style={{paddingLeft:"80px",backgroundColor:"GrayText"}} 
    />
      
      </div>
    );
  };
  
  export default Mypdf;

