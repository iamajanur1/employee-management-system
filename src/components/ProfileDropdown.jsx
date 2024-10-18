import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';


const ProfileDropdown = ({ employeeName }) => {
  return (
    <ProfileWrapper>
      
      <img src='./employee-management-system/src/images/logo.jpg' alt="Profile" className="profile-photo" />
      
      <SelectWrapper>
        <select defaultValue={employeeName}>
          <option value={employeeName}>{employeeName}</option> 
          <option value="settings">Settings</option>
          <option value="logout">Logout</option>
          <option value="help">Help</option> 
        </select>
        <FaCaretDown className="dropdown-icon" />
      </SelectWrapper>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;



const SelectWrapper = styled.div`
  position: relative;

  select {
    border: none;
    background: transparent;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    appearance: none; 
    padding: 10px 40px 10px 10px; 
    border-radius: 5px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    transition: background-color 0.2s; 
    

  }

  .dropdown-icon {
    position: absolute;
    right: 10px; 
    top: 50%; 
    transform: translateY(-50%);
    font-size: 16px;
    color: black; 
  }

  option{
    font-size: 16px;
    padding: 20px; 
    background-color: white; 
    color: black; 
        
    &:hover {
      background-color: lightgreen; 
      color: white; 
    }  

    &:checked {
      background-color: green;
      color: white;
    }
  }
`;

export default ProfileDropdown;
