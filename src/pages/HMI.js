import React, { useEffect, useState } from "react";
import MyComponent from "./changing";
import { Radio, Space } from "antd";
import DocViewer from "react-doc-viewer";
import { Tabs, Card } from "antd";
import leapx from "../assets/leapx.pdf";
import { Viewer } from "@react-pdf-viewer/core"; // Import the viewer component
import hmi1 from "../assets/hmi1.jpg";
import { useNavigate } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";

// import Box from '@mui/material/Box';
// import "../pages/HMI.css"
// import { Link } from 'react-router-dom';

const HMI = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("1");
  const [contentUrl, setContentUrl] = useState("");

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    // Set the default content URL for the selected tab
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

  const items = [
    {
      key: "1",
      label: "PRESENTATION",
      children: (
        <div style={{ display: "flex", width: "100%", margin: 0, padding: 0 }}>
          <iframe
            title="HMI-PPT"
            src={contentUrl}
            width="100%"
            height="569"
            frameborder="0"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "15%",
              height: "18%",
            }}
          >
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
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
            {/* <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
              }}
              onClick={() =>
                handleCardClick(
                  "https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/"
                )
              }
            >
              <p>PPT 2</p>
            </Card>
            <Card
              style={{
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
              }}
              onClick={() => handleCardClick("https://example.com/ppt3")}
            >
              <p>PPT 3</p>
            </Card> */}
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
          ></iframe>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "15%",
              height: "18%",
            }}
          >
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/embed/R_2DCYl4VaA")
              }
            >
              <p>Video 1</p>
            </Card>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/watch?v=kujHQgK352o")
              }
            >
              <p>Video 2</p>
            </Card>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
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
          ></iframe>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "15%",
              height: "18%",
            }}
          >
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
              }}
              onClick={() =>
                handleCardClick(
                  "https://hmicompany.com/learning-resources/case-studies/"
                )
              }
            >
              <p>Video 1</p>
            </Card>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
              }}
              onClick={() =>
                handleCardClick("https://www.hmiadvantage.com/case-studies/")
              }
            >
              <p>Video 2</p>
            </Card>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid #000",
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
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
      {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} 
      
      
      style={{paddingLeft:"80px"}}/> */}
    </div>
  );
};

export default HMI;
