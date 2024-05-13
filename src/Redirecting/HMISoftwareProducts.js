import React,{useState} from "react";
import { PhoneOutlined, MenuOutlined } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";
import { IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Space,
  Typography,
  message,
} from "antd";
import "../pages/Login.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import hmi from "../assets/hmi.png";
import Hdev from "../assets/Hdev.png";
import voice from "../assets/voice1.jpg";
import Dev from "../assets/Dev.png";
import Divider from "@mui/material/Divider";
import ux from "../assets/ux.jpg";
import SOFT from "../assets/SOFT.jpg";
import automate from "../assets/automate.jpg";
import tools from "../assets/tools.jpg";
import leapx from "../assets/leapx.png";
import evoco from "../assets/evoco.jpg";
import gts from "../assets/gts.jpg";
import crisis from "../assets/crisis.jpg";
import "../pages/circle.css";
import Link from "antd/es/typography/Link";
import LanguageBar from "../pages/SearchBar";

const { Title, Text } = Typography;
const HMISoftwareProducts = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });
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
            padding: isSmallScreen ? '15px' : '15px 60px',
          }}
        >
          <div style={{ display: "flex", alignItems: "center" ,flexWrap:"wrap",flexDirection:"row"}}>
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: "10px" }}
            />
            <h4 style={{ margin: 0, color: "red",fontSize: isSmallScreen ? '24px' : '34px' }}>BOSCH</h4>
          </div>

          <Space style={{  paddingRight: isSmallScreen ? '15px' : '60px' }}>
          <LanguageBar/>
            <div className="search-container" >
     <IconButton onClick={toggleSearch} >
         <SearchIcon  />
       </IconButton>
       {isSearchVisible && (
         <InputBase
           placeholder="Search..."
           inputProps={{ 'aria-label': 'search' }}
         />
       )}
     </div>
            <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap" }}>
              <img
                src={hmi}
                style={{
                  height: "55px",
                  width: "65px",
                  marginTop: "-15px",
                  marginRight: isSmallScreen ? '-10px' : '-15px', marginRight: isSmallScreen ? '20px' : '50px' ,
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
        HMI Software Products
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap:"wrap"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginTop: "10px",
            justifyContent:"centre",flexWrap:"wrap"
          }}
        >
          <Card
            style={{ width: isSmallScreen ? '100%' : (isMediumScreen ? '50%' : '300px'), cursor: "pointer" }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/HMI")}
            className="card-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={voice} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
                  marginTop: isSmallScreen ? "20px" : "40px",marginLeft:isSmallScreen ? "120px" : "15px"
                }}
              >
                Voice Verification Engine
              </h3>
            </div>
          </Card>

          <Card
            style={{width: isSmallScreen ? '100%' : (isMediumScreen ? '50%' : '300px'), cursor: "pointer" }}
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
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
      marginTop: isSmallScreen ? "20px" : "40px",marginLeft:isSmallScreen ? "120px" : "0"
                }}
              >
                HMI Analytics
              </h3>
            </div>
          </Card>
          <Card
            style={{ width: isSmallScreen ? '100%' : (isMediumScreen ? '50%' : '300px'), cursor: "pointer" }}
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
                  fontSize: isSmallScreen ? "16px" : "20px", // Adjust fontSize based on screen size
      marginTop: isSmallScreen ? "20px" : "40px",marginLeft:isSmallScreen ? "120px" : "0"
                }}
              >
                Evoco
              </h3>
            </div>
          </Card>
        </div>

        {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '10px' }}>
    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card2-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={automate} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px", paddingLeft: "30px" }}>HMI Software Development</h3>
      </div>
    </Card>

    <Card style={{ width: 300, cursor: "pointer" }} bodyStyle={{ padding: 0 }} hoverable onClick={() => navigate("/HMI")} className='card3-hover'>
      <div className="custom-image">
        <img alt="example" width="100%" src={tools} />
      </div>
      <div className="custom-card">
        <h3 style={{ textAlign: "center", fontSize: "20px" }}>HMI V&V</h3>
      </div>
    </Card>
  </div>
</div> */}
      </div>
    </div>
  );
};

export default HMISoftwareProducts;
