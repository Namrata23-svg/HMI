import React, { useState } from "react";
import logo1 from "../assets/logo1.png";
import { IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Card, Space, Typography } from "antd";
import "../pages/Login.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import hmi from "../assets/hmi.png";
import voice from "../assets/voice1.jpg";
import Dev from "../assets/Dev.png";
import evoco from "../assets/evoco.jpg";
import "../pages/circle.css";
import LanguageBar from "../pages/SearchBar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
const { Title, Text } = Typography;
const HMISoftwareProducts = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="site-page-header-ghost-wrapper"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isSmallScreen ? "15px" : "15px 60px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: "10px" }}
            />
            <h4
              style={{
                margin: 0,
                color: "red",
                fontSize: isSmallScreen ? "24px" : "34px",
              }}
            >
              BOSCH
            </h4>
          </div>

          <Space style={{ paddingRight: isSmallScreen ? "15px" : "60px" }}>
            <LanguageBar />
            <div className="search-container">
              <IconButton onClick={toggleSearch}>
                <SearchIcon />
              </IconButton>
              {isSearchVisible && (
                <InputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src={hmi}
                style={{
                  height: "55px",
                  width: "65px",
                  marginTop: "-15px",
                  marginRight: isSmallScreen ? "-10px" : "-15px",
                  marginRight: isSmallScreen ? "20px" : "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Home")}
              />
            </div>
          </Space>
        </div>{" "}
      </div>

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
        {t("HMI Software Products")}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginTop: "10px",
            justifyContent: "centre",
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
            onClick={() => navigate("/voicebiometry")}
            className="card-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={voice} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px",
                  marginTop: isSmallScreen ? "20px" : "40px",
                  marginLeft: isSmallScreen ? "120px" : "15px",
                }}
              >
                {t("Voice Biometry")}
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
            onClick={() => navigate("/hmianalytics")}
            className="card1-hover"
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
                  marginLeft: isSmallScreen ? "120px" : "0",
                }}
              >
                {t("HMI Analytics")}
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
            onClick={() => navigate("/evoco")}
            className="card2-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={evoco} />
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
                Evoco
              </h3>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <HMISoftwareProducts />
    </Suspense>
  );
}
