import React, { useState } from 'react';
import { IconButton,  MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
const LanguageBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); 
  const { i18n } = useTranslation();
  
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    
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
      </Select>
       <IconButton> 
      </IconButton>
      
    </div>
   </div>
  );
};

export default LanguageBar;
