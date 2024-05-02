import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ux from "../assets/ux.jpg"
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
const SearchBar = () => {
    const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleSearch = () => {
    
    // Simulating a search operation by logging the search query
    console.log('Searching for:', searchQuery);

    // Here you can perform an actual search operation, such as making an API call
    // to fetch search results based on the search query
    // For now, let's update the searchResults state with the search query
    setSearchResults([searchQuery]);

    // Show the card after search
    setShowCard(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            height: '30px',
            width:"105px",
            marginRight: '1px',
            padding: '0 10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            paddingLeft:"50px",
            marginLeft:"60px"
            
            
        
            
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          style={{
            height: '30px',
            width: '30px',
            backgroundColor: '#007bff',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginTop:"2px",
            
            
          }}
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} style={{ color: '#CDCDCD' }} onClick={()=>navigate("/SearchPage")}/>
        </div>
      </div>
      {showCard && (
        <div>
          <h2>UI/UX Card</h2>
          
      <Card style={{ width: 300 ,marginTop:"10px",cursor:"pointer"}} bodyStyle={{ padding: 0 }} hoverable
       onClick={() => navigate("/HMI")} className='card1-hover'>
        <div className="custom-image">
          <img alt="example" width="100%" src={ux} />
        </div>
        <div className="custom-card">
          <h3 style={{textAlign:"center",fontSize:"20px",marginTop:"40px"}}>UX/UI</h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card>
          {/* Your UI/UX card content goes here */}
          <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            {/* Card content */}
            
            {/* You can customize the card content as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
