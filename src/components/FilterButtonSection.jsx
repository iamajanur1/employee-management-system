import React from 'react';
import styled from 'styled-components';

const FilterButtons = ({ onFilterChange, activeFilter }) => {
  return (
    <ButtonWrapper>
      <span className="label">Employees</span>
      <div className="button-group">
        <button
          onClick={() => onFilterChange('All')}
          className={activeFilter === 'All' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('Active')}
          className={activeFilter === 'Active' ? 'active' : ''}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange('Inactive')}
          className={activeFilter === 'Inactive' ? 'active' : ''}
        >
          Inactive
        </button>
      </div>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  .label {
    font-size: 20px;
    font-weight: bold;
    margin-right: 15px; 
  }

  .button-group {
    display: flex;
    margin-left:auto;
  
    button {
      background-color: #e0e0e0;
      padding: 10px 20px;
      margin: 0 5px; 
      border: none;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s; 

      &:hover {
        background-color: #d0d0d0;
        transform: scale(1.05); 
      }

      &:focus {
        outline: none;
        background: rgb(167, 167, 227);
        background: linear-gradient(90deg, rgba(167, 167, 227, 1) 0%, rgba(182, 120, 230, 1) 100%);
      }

      &.active {
        background-color: #007bff; 
        color: white; 
      }
    }
  }
`;

export default FilterButtons;
