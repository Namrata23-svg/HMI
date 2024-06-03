import React ,{useState}from "react";
import hmi from "../assets/hmi.png";
import logo1 from "../assets/logo1.png";
import {  Space, Typography } from "antd";
import "../pages/chnaging.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import LanguageBar from "./SearchBar";
import { IconButton, InputBase } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const { Title, Text } = Typography;

const MyComponent = () => {
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
 
  const navigate = useNavigate();
  return (
   
    <div className="changing">
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
          <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap",flexDirection:"row" }}>
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: "10px", }}
            />
            <h4 style={{ margin: 0, color: "red", fontSize: isSmallScreen ? '24px' : '34px' }}>BOSCH</h4>
          </div>

          <Space style={{ paddingRight: isSmallScreen ? '15px' : '60px'  }}>
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
            <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap" }}>
              <img
                src={hmi}
                style={{
                  height: "65px",
                  width: "85px",
                  marginTop: isSmallScreen ? '-10px' : '-15px', marginRight: isSmallScreen ? '20px' : '50px' ,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Home")}
              />
            </div>
          </Space>
        </div>{" "}
      </div>
    </div>
  );
};

export default MyComponent;
