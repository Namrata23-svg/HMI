import React ,{useState}from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Descriptions, PageHeader } from "antd";
// import PageHeader from "antd"
// import  Icon  from "antd";
import { Menu } from "antd";
import Homepage from "./circle";
import { IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Card, Typography, Space } from "antd";
import { PhoneOutlined, MenuOutlined } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";
import { useMediaQuery } from 'react-responsive';
import hmi from "../assets/hmi.png";
import SearchBar from "./SearchBar";
import LanguageBar from "./SearchBar";
import Hoverview from "../assets/Hoverview.png"
import SearchPage from "./SearchPage";
const { Title, Text } = Typography;

// import { Link } from "@bosch/react-frok";
// import { Navigation } from "@bosch/react-frok";
// import { HeaderNavigationItem } from "@bosch/react-frok";
// import { Header } from "@bosch/react-frok";
// import { Button } from "@bosch/react-frok";
// import BOSCH from "../assets/BOSCH.png"
// import { ThemeProvider, createTheme } from '@mui/material/styles';

const Home = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    if (isSearchVisible && query.toLowerCase() === 'ui/ux') {
      setSearchVisible(false); // Close the search field
      // Perform any additional actions you need, such as showing the UI/UX card
      // For now, let's just console log
      console.log("Showing UI/UX card");
    }
  
  };
  
  const navigate=useNavigate();
  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
 
  return (
    <div>
      {/* <div
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
          <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap" }}>
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: '10px' }}
            />
            <h4 style={{ margin: 0, color: "red", fontSize: isSmallScreen ? '24px' : '34px' }}>BOSCH</h4>
          </div> */}

          {/* <Space style={{ paddingRight: isSmallScreen ? '15px' : '60px' }}>
          <LanguageBar/> */}
            <div className="search-container" >
              <SearchPage/>
            {/* <InputBase
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleSearch}
      onBlur={handleSearchSubmit}
    />
    <IconButton onClick={toggleSearch}>
      <SearchOutlinedIcon />
    </IconButton> */}
     {/* </div></Space> */}  </div>
    
  
    
            {/* <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap" }}>
              <img
                src={hmi}
                style={{
                  height: "65px",
                  width: "85px",
                  marginTop: isSmallScreen ? '-10px' : '-15px', marginRight: isSmallScreen ? '20px' : '50px' 
                }}
              />
            </div>
          </Space>
        </div>
      </div> */}
      {/* <div className="site-page-header-ghost-wrapper" >
       <Card style={{paddingTop:"25px"}}
      title={
        <Space style={{ height: "50px", paddingLeft: "60px" }}>
        <img src={bosl} style={{ height: "50px", marginTop: "5px" }} />
        <Title level={4} style={{ margin: 0,paddingTop:"8px", color: "red", fontSize: "34px", height: "70px", width: "70px" }}><b>BOSCH</b></Title>
      </Space>
      }
        extra={
          <Space style={{paddingRight:"60px"}}>
            
            <Button icon={<MenuOutlined />} type="text">Menu</Button>
            
          </Space>
        }
      >
       </Card> */}
      {/* Card content goes here */}

      <Homepage />
    </div>
  );
};

export default Home;
