import React ,{useState}from "react";
import {  useNavigate } from "react-router-dom";
import Homepage from "./circle";
import {  Typography, Space } from "antd";
import { useMediaQuery } from 'react-responsive';
import SearchPage from "./SearchPage";
const { Title, Text } = Typography;


const Home = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    if (isSearchVisible && query.toLowerCase() === 'ui/ux') {
      setSearchVisible(false); 
      console.log("Showing UI/UX card");
    }
  
  };
  
  const navigate=useNavigate();
  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
 
  return (
    <div>
      
            <div className="search-container" >
              <SearchPage/>
              </div>
    
      <Homepage />
    </div>
  );
};

export default Home;
