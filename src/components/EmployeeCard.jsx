import React from 'react';
import styled from 'styled-components';

const EmployeeCard = ({ employee, onBlock, onDetails }) => {
  return (
    <Card>
      <CardContent>
        <h3>{employee.name}</h3>
        <p>Position: {employee.position}</p>
        <p>Email: {employee.email}</p>
      </CardContent>
      <ButtonGroup>
        <BlockButton onClick={() => onBlock(employee.id)}>
          {employee.status === 'Active' ? 'Block' : 'Unblock'}
        </BlockButton>
        <DetailsButton onClick={() => onDetails(employee)}>
          Details
        </DetailsButton>
      </ButtonGroup>
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 280px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

const CardContent = styled.div`
  flex-grow: 1; 
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between; 
`;

const BlockButton = styled.button`
  background-color: #ff4d4d; 
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width:70px;
  font-size:15px;

  &:hover {
    background-color: #e60000; 
  }
`;

const DetailsButton = styled.button`
  background-color: #007bff; 
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

export default EmployeeCard;
