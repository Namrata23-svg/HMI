import React, { useState } from "react";
import { IconButton, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { I18n } from "aws-amplify/utils";

const LanguageBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { i18n } = useTranslation();
  I18n.setLanguage("en");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    console.log("newLanguage: ", newLanguage);
    I18n.setLanguage(newLanguage);
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
        <IconButton></IconButton>
      </div>
    </div>
  );
};

export default LanguageBar;
