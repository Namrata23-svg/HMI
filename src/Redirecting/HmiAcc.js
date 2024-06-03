import React,{useState} from "react";
import logo1 from "../assets/logo1.png";
import { IconButton, InputBase } from '@mui/material';
import {
  Card,
  Space,
  Typography,
} from "antd";
import "../pages/Login.css";
import { useNavigate } from "react-router-dom";
import hmi from "../assets/hmi.png";
import { useMediaQuery } from 'react-responsive';
import SOFT from "../assets/SOFT.jpg";
import leapx from "../assets/leapx.png";
import "../pages/circle.css";
import LanguageBar from "../pages/SearchBar";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const { Title, Text } = Typography;
const HmiAcc = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [query, setQuery] = useState('');


  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
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
          <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap",flexDirection:"row"  }}>
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: "10px" }}
            />
            <h4 style={{ margin: 0, color: "red", fontSize: isSmallScreen ? '24px' : '34px' }}>BOSCH</h4>
          </div>

          <Space style={{  paddingRight: isSmallScreen ? '15px' : '60px' }}>
          <LanguageBar/>
          
            <div className="search-container" >
    <InputBase
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleSearch}
      
    />
    <IconButton onClick={toggleSearch}>
      <SearchOutlinedIcon />
    </IconButton>
  
     </div>
            <div style={{ display: "flex", alignItems: "center" ,flexWrap:"wrap"}}>
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
        HMI Accelarators
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
            style={{width: isSmallScreen ? '100%' : (isMediumScreen ? '50%' : '300px'), cursor: "pointer" }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/leapx")}
            className="card-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={leapx} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", 
      marginTop: isSmallScreen ? "20px" : "40px",marginLeft:isSmallScreen ? "120px" : "0"
                }}
              >
                LeapX
              </h3>
            </div>
          </Card>

          <Card
            style={{width: isSmallScreen ? '100%' : (isMediumScreen ? '50%' : '300px'), cursor: "pointer" }}
            bodyStyle={{ padding: 0 }}
            hoverable
            onClick={() => navigate("/HmiVisualization")}
            className="card1-hover"
          >
            <div className="custom-image">
              <img alt="example" width="100%" src={SOFT} />
            </div>
            <div className="custom-card">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: isSmallScreen ? "16px" : "20px", 
      marginTop: isSmallScreen ? "20px" : "40px",marginLeft:isSmallScreen ? "120px" : "0"
                }}
              >
                HMI Visualizer
              </h3>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HmiAcc;
