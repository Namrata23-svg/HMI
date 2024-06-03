import React, { useEffect, useState } from "react";
import MyComponent from "../pages/changing";
import { Tabs, Card } from "antd";
import Hdev from "../assets/Hdev.png"
import hmi1 from "../assets/hmi1.jpg";
import { useNavigate } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Vsolutions = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("1");
  const [contentUrl, setContentUrl] = useState("");

  useEffect(() => {
    // Set the default content URL for the selected tab
    setContentUrl(
      "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Test_Management_Solution_Overview_V1.0.pdf"
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
          "https://hmi-dashboard.s3.ap-northeast-3.amazonaws.com/HMI_CoE_Test_Management_Solution_Overview_V1.0.pdf"
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
             <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                
                marginTop: "10px",
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
             <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
        
                marginTop: "10px",
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
              <p>PPT 2</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
            
                marginTop: "10px",
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
              <p>PPT 2</p>
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
             <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/embed/R_2DCYl4VaA")
              }
            >
              <p>Video 1</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
        
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
                backgroundSize: "cover",
              }}
              onClick={() =>
                handleCardClick("https://www.youtube.com/watch?v=kujHQgK352o")
              }
            >
              <p>Video 2</p>
            </Card>
            <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
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
             <p style={{marginLeft:"1em"}}><b>Video</b></p>
            <Card
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
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
    
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
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
    
                marginTop: "10px",
                width: "80%",
                marginLeft: "10px",
                backgroundImage: `url(${Hdev})`,
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

export default Vsolutions;
