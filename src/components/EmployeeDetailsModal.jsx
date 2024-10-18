
import React from 'react';
import styled from 'styled-components';

const EmployeeDetailsModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Employee Details</h2>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Status:</strong> {employee.status}</p>
        <p><strong>Address:</strong> {employee.address}</p>
        <p><strong>Date of Birth:</strong> {employee.dob}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default EmployeeDetailsModal;
