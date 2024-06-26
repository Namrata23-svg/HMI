import React, { useState, useEffect } from "react";
import MyComponent from "../pages/changing";
import { Tabs, Card } from "antd";
import hmi1 from "../assets/hmi1.jpg";
import { useNavigate } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

const HmiVis = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("1");
  const [contentUrl, setContentUrl] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    // Set the default content URL for the selected tab
    setContentUrl(
      "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_VR_for_HMI_Visualization_Overview_PPT_V1.0.pdf"
    );
  }, []);

  const handleTabChange = (key) => {
    setSelectedTab(key);
    switch (key) {
      case "1": // If the selected tab is "PPT"
        setContentUrl(
          "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_VR_for_HMI_Visualization_Overview_PPT_V1.0.pdf"
        ); // Reset contentUrl state for other tabs
        break;
      case "2": // If the selected tab is "VIDEO"
        setContentUrl("https://www.youtube.com/embed/R_2DCYl4VaA"); 
        break;
      case "3": // If the selected tab is "CASE STUDY"
        setContentUrl("https://example.com/default_case_study_url"); 
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
        <div style={{ display: "flex", width: "100%", margin: 0, padding: 0 }}>

          <iframe
            src={contentUrl}
            width="100%"
            height="569"
            frameborder="0"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{ marginLeft: isSmallScreen ? '-40px' : '0' }}
            id="myIframe"></iframe>
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
             <p style={{marginLeft:"1em"}}><b>HMI Visulalization</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
            
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                height: "100px",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://www.sharedfilespro.com/download-sample-pdf/"
                )
              }
            ></Card>
             <p style={{marginLeft:"1em"}}><b>HMI Visulalization</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                height: "100px",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Overview_2023_For_PRM_V2.pdf"
                )
              }
            ></Card>
             <p style={{marginLeft:"1em"}}><b>HMI Visulalization</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
        
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                height: "100px",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Overview_2023_For_PRM_V2.pdf"
                )
              }
            ></Card>
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
            height="569"
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
              width:isSmallScreen ? '100%' : '15%',
              height:isSmallScreen ? '100%' : '18%',
            }}
          >
             <p style={{marginLeft:"1em"}}><b>LeapX</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
        
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
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
                
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
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
            
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
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
            height="600px"
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
             <p style={{marginLeft:"1em"}}><b>Case Study</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
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
            <p style={{marginLeft:"1em"}}><b>Case Study</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
        
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.hmiadvantage.com/case-studies/")
              }
            >
              <p>Video 2</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Case Study</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
            
                marginTop: "10px",
                width:isSmallScreen ? '300px' : '100%',
                height:isSmallScreen ? '80px' : '100%',
               
                marginLeft:isSmallScreen ? '5px' : '10px',
                marginRight: isSmallScreen ? '20px' : '50px',
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
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

export default HmiVis;
