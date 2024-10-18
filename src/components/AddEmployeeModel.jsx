import React, { useState } from 'react';
import styled from 'styled-components';

const AddEmployeeModal = ({ onClose, onAddEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Active');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(), 
      name,
      position,
      email,
      status,
      address,
      dob,
    };
    onAddEmployee(newEmployee); // Call parent method to add employee
    onClose(); 
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <h2>Add New Employee</h2>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          <ButtonSection>
            <button type="submit">Add Employee</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </ButtonSection>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
  }

  input, select {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default AddEmployeeModal;
