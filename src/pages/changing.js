import React ,{useState}from "react";
import hmi from "../assets/hmi.png";
import ux from "../assets/ux.jpg";
import { PhoneOutlined, MenuOutlined } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import "../pages/chnaging.css";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useMediaQuery } from 'react-responsive';
import LanguageBar from "./SearchBar";
import { IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
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
    //   <div className="site-page-header-ghost-wrapper" >
    //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 60px", height: "50px" }}>
    //   <div style={{ display: "flex", alignItems: "center" }}>
    //     <img src={bosl} style={{ height: "50px", marginTop: "5px" }} />
    //     <Title level={4} style={{ margin: 0, paddingTop: "8px", color: "red", fontSize: "34px", height: "70px", width: "70px" }}><b>BOSCH</b></Title>
    //   </div>
    //   <div style={{ display: "flex" }}>
    //     <Button icon={<PhoneOutlined />} type="text">Contact</Button>
    //     <Button icon={<MenuOutlined />} type="text">Menu</Button>
    //   </div>
    // </div>
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
