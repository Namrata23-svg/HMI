import React, { useState, useEffect } from "react";
import MyComponent from "../pages/changing";

import { Tabs, Card } from "antd";

import leapxImage from "../assets/leapx.png";

import "@react-pdf-viewer/core/lib/styles/index.css";

// import Box from '@mui/material/Box';
// import "../pages/HMI.css"
// import { Link } from 'react-router-dom';

const Leapx = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  const [contentUrl, setContentUrl] = useState("");

  useEffect(() => {
    // Set the default content URL for the selected tab
    setContentUrl(
      "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_LeapX_Overview_V1.0.pdf"
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
          "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_LeapX_Overview_V1.0.pdf"
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
                backgroundImage: `url(${leapxImage})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick(
                  "https://www.sharedfilespro.com/download-sample-pdf/"
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

export default Leapx;
