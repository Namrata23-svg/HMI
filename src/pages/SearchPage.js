import React  ,{useState}from "react";
import hmi from "../assets/hmi.png";
import ux from "../assets/ux.jpg";
import { PhoneOutlined, MenuOutlined } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import "../pages/chnaging.css";
import Link from "antd/es/typography/Link";
import { IconButton, InputBase } from '@mui/material';
import Hdev from "../assets/Hdev.png"
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import Hoverview from "../assets/Hoverview.png";
import { useMediaQuery } from 'react-responsive';
import SearchBar from "./SearchBar";
import LanguageBar from "./SearchBar";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const { Title, Text } = Typography;
const SearchPage = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  
  };
  
  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
  };
  
  const handleSearchSubmit = () => {
    // Check if the query is 'ui/ux' and search field is visible
    if (query === 'ui/ux'   && isSearchVisible) {
      // Perform any additional actions you need, such as showing the UI/UX card
      // For now, let's just console log
      console.log("Showing UI/UX card");
    }
  };
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
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
          <div style={{ display: "flex", alignItems: "center",flexWrap:"wrap" }}>
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: '10px' }}
            />
            <h4 style={{ margin: 0, color: "red", fontSize: isSmallScreen ? '24px' : '34px' }}>BOSCH</h4>
          </div>

          <Space style={{ paddingRight: isSmallScreen ? '15px' : '60px' }}>
          <LanguageBar/>
            <div className="search-container" >
    <InputBase
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleSearch}
      onBlur={handleSearchSubmit}
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
                  marginTop: isSmallScreen ? '-10px' : '-15px', marginRight: isSmallScreen ? '20px' : '50px' 
                }}
              />
            </div>
          </Space>
        </div>
      </div>
    

        
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={hmi}
                style={{
                  height: "55px",
                  width: "65px",
                  marginTop: "-15px",
                  marginRight: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Home")}
              />
            </div>
          </Space>
        </div>{" "}
      </div> */}
      {query === 'ui/ux'  && isSearchVisible &&  (
        <Card
          title="UI/UX Card"
          description="Description of UI/UX card"
          style={{ width: '300px', marginTop: "10px", cursor: "pointer" }}
          bodyStyle={{ padding: 0 }}
          hoverable
          
          className='card1-hover' 
        >
          <div className="custom-image">
            <img alt="example" width="100%" src={Hoverview} />
          </div>
          <div className="custom-card">
            <h3 style={{ textAlign: "center", fontSize: "20px", marginTop: "40px" }}>UI/UX</h3>
          </div>
        </Card>


           
     
      )}
      

     
    </div>

  );
};

export default SearchPage;
