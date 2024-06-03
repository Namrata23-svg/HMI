import React, { useEffect, useState } from "react";
import MyComponent from "./changing";
import { Tabs, Card } from "antd";
import hmippt from "../assets/hmippt.jpg"
import HMIT from "../assets/HMIT.PNG"
import cockpit from "../assets/cockpit.jpg"
import Hoverview from "../assets/Hoverview.png"
import Dev from "../assets/Dev.png"
import hmi1 from "../assets/hmi1.jpg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import "@react-pdf-viewer/core/lib/styles/index.css";


const HMI = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("1");
  const [contentUrl, setContentUrl] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
   
    setContentUrl(
      "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Overview_2023_For_PRM_V2.pdf"
    );
  }, []);

  const handleTabChange = (key) => {
    setSelectedTab(key);
    switch (key) {
      case "1": // If the selected tab is "PPT"
        setContentUrl(
          "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Overview_2023_For_PRM_V2.pdf"
        ); // Reset contentUrl state for other tabs
        break;
      case "2": // If the selected tab is "VIDEO"
        setContentUrl("https://www.youtube.com/embed/R_2DCYl4VaA"); // Set default video URL
        break;
      case "3": // If the selected tab is "CASE STUDY"
        setContentUrl("https://example.com/default_case_study_url"); // Set default case study URL
        break;
      default:
        setContentUrl("");
    }
  };
  const handleCardClick = (url) => {
    setContentUrl(url);
  };

  const handleFullScreen = () => {
    const iframe = document.getElementById('myIframe');
  if (iframe) {
    if (!isFullScreen) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
};

  const items = [
    {
      key: "1",
      label: "PRESENTATION",
      children: (
        <div style={{display:"flex", width: "100%", margin: 0, padding: 0, width:isSmallScreen ? '100%' : '100%',
        height:isSmallScreen ? '100%' : '569px'}}>
          <iframe
           
            title="HMI-PPT"
            src={contentUrl}
            width={isSmallScreen ? '100%' : '100%'} 
            height={isSmallScreen ? '300px' : '569px'}
        
            marginLeft={ isSmallScreen ? '20px' : '50px'}
            frameborder="0"
          
            
            allowFullScreen
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            style={{ marginLeft: isSmallScreen ? '-40px' : '0' }} 
           
            id="myIframe"
           >
            
              
          </iframe>
          <button style={{position: 'absolute',
            top: 0,
            right: 0,
            height: '30px',
            padding: '5px 10px',
            marginTop: isSmallScreen ? "-50px" : "-50px", 
      marginRight: isSmallScreen ? "0.5em" : "13em",
            zIndex: 999,
            display: isFullScreen ? 'none' : 'block'}} onClick={handleFullScreen}>
              <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
        
      </button>
          
          <div
            style={{
              display: "flex",
        
              justifyContent: "space-between",
           
              width:isSmallScreen ? '100%' : '15%',
                height:isSmallScreen ? '100%' : '18%',
              flexWrap:"wrap"
            }}
          >
            <p style={{marginLeft:"1em"}}><b>HMI Overview</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
            
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Overview_2023_For_PRM_V2.pdf"
                )
              }
            ></Card>
             <p style={{marginLeft:"1em"}}><b>HMI CoE</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmippt})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/"
                )
              }
            >
              <p>PPT 2</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>HMI</b></p>
            <Card
              style={{
                border:"none",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hoverview})`,
                backgroundSize: "cover",
              }}
              onClick={() => handleCardClick("https://example.com/ppt3")}
            >
              <p>PPT 3</p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "VIDEO",
      children: (
        <div style={{ display: "flex", width: "100%", margin: 0, padding: 0 }}>
          <iframe
            width="100%"
            height={isSmallScreen ? '300px' : '569px'}
            src={contentUrl}
            frameborder="0"
            allowfullscreen
            style={{ marginLeft: isSmallScreen ? '-40px' : '0' }} 
          ></iframe>
           <button style={{position: 'absolute',
            top: 0,
            right: 0,
            height: '30px',
            padding: '5px 10px',
            marginTop: isSmallScreen ? "-50px" : "-50px", 
            marginRight: isSmallScreen ? "0.5em" : "13em",
            zIndex: 999,
            display: isFullScreen ? 'none' : 'block'}} onClick={handleFullScreen}>
       <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
      </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width:isSmallScreen ? '100%' : '15%',
              height:isSmallScreen ? '100%' : '18%',
            }}
          >
             <p style={{marginLeft:"1em"}}><b>LeapX</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url (${Hoverview})`,
                backgroundSize:"cover"
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/embed/R_2DCYl4VaA")
              }
              
            >
              

              <p>Video 1</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>LeapX</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${HMIT})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/watch?v=kujHQgK352o")
              }
            >
              <p>Video 2</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Leapx</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${HMIT})`,
                backgroundSize: "cover",
              }}
              onClick={() => handleCardClick("https://example.com/video3")}
            >
              <p>Video 3</p>
            </Card>
          </div>
        </div>
      ),
    },

    {
      key: "3",
      label: "CASE STUDY",
      children: (
        <div
          style={{ display: "flex", width: "100%", margin: "0", padding: "0" }}
        >
          <iframe
            src={contentUrl}
            width="100%"
            height={isSmallScreen ? '300px' : '569px'}
            frameborder="0"
            allowfullscreen
            style={{ marginLeft: isSmallScreen ? '-40px' : '0' }} 
          ></iframe>
           <button style={{position: 'absolute',
            top: 0,
            right: 0,
            height: '30px',
            padding: '5px 10px',
            marginTop: isSmallScreen ? "-50px" : "-50px", 
            marginRight: isSmallScreen ? "0.5em" : "13em",
            zIndex: 999,
            display: isFullScreen ? 'none' : 'block'}} onClick={handleFullScreen}>
         <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
      </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width:isSmallScreen ? '100%' : '15%',
              height:isSmallScreen ? '100%' : '18%',
            }}
          >
             <p style={{marginLeft:"1em"}}><b>LeapX</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Dev})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmicompany.com/learning-resources/case-studies/"
                )
              }
            >
              <p>Video 1</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hoverview})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.hmiadvantage.com/case-studies/")
              }
            >
              <p>Video 2</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100px',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${cockpit})`,
                backgroundSize: "cover",
              }}
              onClick={() => handleCardClick("https://example.com/video3")}
            >
              <p>Video 3</p>
            </Card>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <MyComponent />
      <Tabs
        defaultActiveKey="1"
        activeKey={selectedTab}
        onChange={handleTabChange}
        style={{ paddingLeft: "60px" }}
      >
        {items.map((item) => (
          <Tabs.TabPane tab={item.label} key={item.key}>
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
      
    </div>
  );
};

export default HMI;
