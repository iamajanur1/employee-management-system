import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const SearchBar = ({ setSearchQuery }) => {
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

  return (
    <SearchWrapper>
      <FaSearch className="icon" />
      <input 
        type="text" 
        placeholder="Search employees..." 
        onChange={handleInputChange} // Handle input change event
      />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 10px;

  .icon {
    margin-right: 10px;
    color: #888;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
  }
`;

export default SearchBar;
