import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ChatIcon, ChatComponent } from "./ChatComponent";
import { Card, Typography } from "antd";
import Hoverview from "../assets/Hoverview.png";
import Hsoft from "../assets/Hsoft.png";
import Htest from "../assets/Htest.png";
import Hdev from "../assets/Hdev.png";
import Dev from "../assets/Dev.png";
import Maya from "../assets/Maya.png";
import "../pages/circle.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const Homepage = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
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
        {t("HMICentreOfExcellenceCoE")}
      </h1>

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
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                {t("HMI Overview")}
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
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                {t("UX/UI")}
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
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "10px",
                }}
              >
                {t("HMI Software Development")}
              </h3>
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
            onClick={() => navigate("/VSolutions")}
            className="card3-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={Htest} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                {t("HMI V&V Solutions")}
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
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                {t("HMI Accelarators")}
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
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "0",
                  paddingLeft: "30px",
                }}
              >
                {t("HMI Software Products")}
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
