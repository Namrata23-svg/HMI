import React, { useState,useEffect } from 'react';
import { IconButton, InputAdornment, InputBase, MenuItem, Select, TextField } from '@mui/material';
import { Search as SearchIcon, Translate as TranslateIcon } from '@mui/icons-material';
import Hoverview from "../assets/Hoverview.png"
import { useTranslation } from 'react-i18next';


import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const LanguageBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const { i18n } = useTranslation();
  
  
  

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    // You can add code here to perform translation based on the selected language
  };
  
  


  return (
    <div>
    <div className="language-bar">
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        variant="standard"
        autoWidth
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="de">German</MenuItem>
        {/* Add more languages as needed */}
      </Select>
       <IconButton> 
        {/* <TranslateIcon /> */}
      </IconButton>
      
    </div>
    
      
      {/* Render filtered cards */}
     
     
   </div>
  );
};

export default LanguageBar;
