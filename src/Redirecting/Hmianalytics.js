import React, { useEffect, useState } from "react";
import MyComponent from "../pages/changing";
import { Radio, Space } from "antd";
import DocViewer from "react-doc-viewer";
import { Tabs, Card } from "antd";
import automate from "../assets/automate.jpg";
import Htest from "../assets/Htest.png";
import log from "../assets/log.jpg";
import cockpit1 from "../assets/cockpit1.jpg";
import leapx from "../assets/leapx.pdf";
import { Viewer } from "@react-pdf-viewer/core"; // Import the viewer component
import hmi1 from "../assets/hmi1.jpg";
import Hdev from "../assets/Hdev.png";
import { useNavigate } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
// import Box from '@mui/material/Box';
// import "../pages/HMI.css"
// import { Link } from 'react-router-dom';

const Hmianalytics = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  const [contentUrl, setContentUrl] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    // Set the default content URL for the selected tab
    setContentUrl(
      "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMIAnalytics-Deck2.pdf"
    );
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const handleTabChange = (key) => {
    setSelectedTab(key);
    switch (key) {
      case "1": // If the selected tab is "PPT"
        setContentUrl(
          "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMIAnalytics-Deck2.pdf"
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
    const iframe = document.getElementById("myIframe");
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
          {/* <DocViewer
                    documents={[
                        { uri: 'assets/leapx.pdf' } // Replace 'assets/leapx.pdf' with the path to your PDF file
                    ]}
                /> */}

          <iframe
            src={contentUrl}
            width="100%"
            height="569"
            frameborder="0"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{ marginLeft: isSmallScreen ? "-40px" : "0" }}
            id="myIframe"
          ></iframe>
          <button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "30px",
              padding: "5px 10px",
              marginTop: isSmallScreen ? "-50px" : "-50px", // Adjust marginTop based on screen size
              marginRight: isSmallScreen ? "0.5em" : "13em",
              zIndex: 999,
              display: isFullScreen ? "none" : "block",
            }}
            onClick={handleFullScreen}
          >
            <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
            {/* {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'} */}
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: isSmallScreen ? "100%" : "15%",
              height: isSmallScreen ? "100%" : "18%",
            }}
          >
            <p style={{ marginLeft: "1em" }}>
              <b>HMI Analytics - 1</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                height: "100%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMIAnalytics-Deck2.pdf"
                )
              }
            >
              <p>PPt</p>
            </Card>
            <p style={{ marginLeft: "1em" }}>
              <b>HMI Analytics - 2</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${cockpit1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_HMI_Interaction_Analytics_Framework_Overview_V1.0.pdf"
                )
              }
            >
              {" "}
              <p>PPt</p>
            </Card>
            <p style={{ marginLeft: "1em" }}>
              <b>HmiAnalytics</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/"
                )
              }
            >
              {" "}
              <p>PPt</p>
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
            height="569"
            src={contentUrl}
            // https://www.youtube.com/watch?v=R_2DCYl4VaA
            frameborder="0"
            allowfullscreen
            style={{ marginLeft: isSmallScreen ? "-40px" : "0" }}
          ></iframe>
          <button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "30px",
              padding: "5px 10px",
              marginTop: isSmallScreen ? "-50px" : "-50px", // Adjust marginTop based on screen size
              marginRight: isSmallScreen ? "0.5em" : "13em",
              zIndex: 999,
              display: isFullScreen ? "none" : "block",
            }}
            onClick={handleFullScreen}
          >
            <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
            {/* {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'} */}
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: isSmallScreen ? "100%" : "15%",
              height: isSmallScreen ? "100%" : "18%",
            }}
          >
            <p style={{ marginLeft: "1em" }}>
              <b>LeapX</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/embed/R_2DCYl4VaA")
              }
            >
              {" "}
              <p>PPt</p>
            </Card>
            <p style={{ marginLeft: "1em" }}>
              <b>LeapX</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/watch?v=kujHQgK352o")
              }
            >
              <p>PPt</p>
            </Card>
            <p style={{ marginLeft: "1em" }}>
              <b>LeapX</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${automate})`,
                backgroundSize: "cover",
              }}
              onClick={() => handleCardClick("https://example.com/video3")}
            >
              {" "}
              <p>PPt</p>
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
            style={{ marginLeft: isSmallScreen ? "-40px" : "0" }}
          ></iframe>
          <button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "30px",
              padding: "5px 10px",
              marginTop: isSmallScreen ? "-50px" : "-50px", // Adjust marginTop based on screen size
              marginRight: isSmallScreen ? "0.5em" : "13em",
              zIndex: 999,
              display: isFullScreen ? "none" : "block",
            }}
            onClick={handleFullScreen}
          >
            <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
            {/* {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'} */}
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: isSmallScreen ? "100%" : "15%",
              height: isSmallScreen ? "100%" : "18%",
            }}
          >
            <p style={{ marginLeft: "1em" }}>
              <b>Case Study</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
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
              {" "}
              <p>PPt</p>
            </Card>
            <p style={{ marginLeft: "1em" }}>
              <b>Case Study</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Htest})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.hmiadvantage.com/case-studies/")
              }
            >
              {" "}
              <p>PPt</p>
            </Card>
            <p style={{ marginLeft: "1em" }}>
              <b>Case Study</b>
            </p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",

                marginTop: "10px",
                width: isSmallScreen ? "300px" : "100%",
                height: isSmallScreen ? "80px" : "100%",

                marginLeft: isSmallScreen ? "5px" : "10px",
                marginRight: isSmallScreen ? "20px" : "50px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${hmi1})`,
                backgroundSize: "cover",
              }}
              onClick={() => handleCardClick("https://example.com/video3")}
            >
              {" "}
              <p>PPt</p>
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
      {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} 
      
      
      style={{paddingLeft:"80px"}}/> */}
    </div>
  );
};

export default Hmianalytics;
