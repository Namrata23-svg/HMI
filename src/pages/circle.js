import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ChatIcon, ChatComponent } from "./ChatComponent";
//  import bosl from "../assets/bosl.PNG"
import { Card, Typography } from "antd";

import Hoverview from "../assets/Hoverview.png";
import Hsoft from "../assets/Hsoft.png";
import Htest from "../assets/Htest.png";
import Hdev from "../assets/Hdev.png";
import Dev from "../assets/Dev.png";
import Maya from "../assets/Maya.png";
import "../pages/circle.css";

import { useNavigate } from "react-router-dom";

// import Hmicoe from "../assets/Hmicoe.PNG"
// import hmicoe1 from "../assets/hmicoe1.PNG"
// import svg1 from "../assets/svg1.png"
// import automotive from "../assets/automotive.png"
const { Title, Text } = Typography;

const Homepage = () => {
  const navigate = useNavigate(); // Use useNavigate hook here

  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });

  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat((prevState) => !prevState);
  };

  return (
    <div className="circle-card">
      {/* Card content goes here */}

      {/* <div className="site-page-header-ghost-wrapper" style={{ margin: 0, padding: 0 }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 60px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={bosl} style={{ height: "50px", marginTop: "5px", marginRight: "10px" }} />
      <h4 style={{ margin: 0, color: "red", fontSize: "34px" }}>BOSCH</h4>
    </div>
    <Space style={{paddingRight:"60px"}}>
            <Button icon={<PhoneOutlined />} type="text">Contact</Button>
            <div style={{ display: "flex", alignItems: "center" }}>
      <img src={hmi}  style={{ height: "45px", width:"50px", marginTop:"-15px",marginRight:"50px" }} />
      
    </div>
            
          </Space>
  </div>
</div> */}
      {/* <Card style={{height:"30%"}}> ?*/}
      <h1
        style={{
          paddingLeft: "2%",
          marginBottom: "8px",
          textAlign: "center",
          fontWeight: "5px",
          fontSize: "40px",
        }}
      >
        {" "}
        HMI Centre of Excellence (CoE)
      </h1>

      {/* </Card> */}

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "centre",
            flexWrap: "wrap",
          }}
        >
          <Card
            style={{
              width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "300px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/HMI")}
            className="card-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Hdev} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: isSmallScreen ? "center" : "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                HMI Overview
              </h3>
            </div>
          </Card>

          <Card
            style={{
              width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "300px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/leapx")}
            className="card1-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Hoverview} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                UX/UI
              </h3>
              {/* <p>www.instagram.com</p> */}
            </div>
          </Card>

          <Card
            style={{
              width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "300px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/hmianalytics")}
            className="card2-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Dev} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                HMI Software Development
              </h3>
              {/* <p>www.instagram.com</p> */}
            </div>
          </Card>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card
            style={{
              width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "300px",
              cursor: "pointer",
            }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/hmivisualization")}
            className="card3-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Htest} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                HMI V&V Solutions
              </h3>
              {/* <p>www.instagram.com</p> */}
            </div>
          </Card>

          <Card
            style={{
              width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "300px",
              cursor: "pointer",
            }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/HmiAcc")}
            className="card4-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Hsoft} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                HMI Accelarators
              </h3>
            </div>
          </Card>

          <Card
            style={{
              width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "300px",
              cursor: "pointer",
            }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/HmiSoftwareProducts")}
            className="card5-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Maya} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                  paddingLeft: "30px",
                }}
              >
                HMI Software Products
              </h3>
            </div>
          </Card>
        </div>
      </div>
      <div className="app">
        {showChat && <ChatComponent />}
        <ChatIcon onClick={toggleChat} />
      </div>
    </div>
  );
};

export default Homepage;
