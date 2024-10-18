import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProfileDropdown from '../components/ProfileDropdown';
import FilterButtons from '../components/FilterButtonSection';
import EmployeeCard from '../components/EmployeeCard';
import AddEmployeeModal from '../components/AddEmployeeModel';
import EmployeeDetailsModal from '../components/EmployeeDetailsModal';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';

const Dashboard = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', email: 'john@example.com', status: 'Active', address: '123 Main St', dob: '1990-01-01' },
    { id: 2, name: 'Jane Smith', position: 'Designer', email: 'jane@example.com', status: 'Active', address: '456 Maple Ave', dob: '1989-02-01' },
    { id: 3, name: 'Alice Johnson', position: 'Manager', email: 'alice@example.com', status: 'Inactive', address: '789 Elm St', dob: '1988-03-01' },
    { id: 4, name: 'Bob Brown', position: 'Developer', email: 'bob@example.com', status: 'Active', address: '101 Pine Rd', dob: '1991-04-01' },
    { id: 5, name: 'Charlie Davis', position: 'Designer', email: 'charlie@example.com', status: 'Inactive', address: '202 Birch Blvd', dob: '1987-05-01' },
    { id: 6, name: 'David Evans', position: 'Product Owner', email: 'david@example.com', status: 'Active', address: '303 Cedar St', dob: '1986-06-01' },
    { id: 7, name: 'Emma White', position: 'QA Tester', email: 'emma@example.com', status: 'Inactive', address: '404 Walnut Ave', dob: '1992-07-01' },
    { id: 8, name: 'Fiona Green', position: 'DevOps Engineer', email: 'fiona@example.com', status: 'Active', address: '505 Cherry Ln', dob: '1985-08-01' },
    { id: 9, name: 'George Black', position: 'HR Manager', email: 'george@example.com', status: 'Active', address: '606 Oak St', dob: '1984-09-01' },
    { id: 10, name: 'Hannah Gray', position: 'Business Analyst', email: 'hannah@example.com', status: 'Inactive', address: '707 Maple Rd', dob: '1993-10-01' },
    { id: 11, name: 'Ian Silver', position: 'UI/UX Designer', email: 'ian@example.com', status: 'Active', address: '808 Ash Blvd', dob: '1990-11-01' },
    { id: 12, name: 'Jack Gold', position: 'Backend Developer', email: 'jack@example.com', status: 'Inactive', address: '909 Spruce St', dob: '1989-12-01' },
    { id: 13, name: 'Karen Blue', position: 'Frontend Developer', email: 'karen@example.com', status: 'Active', address: '1001 Birch Ave', dob: '1988-01-15' },
    { id: 14, name: 'Liam Orange', position: 'System Administrator', email: 'liam@example.com', status: 'Active', address: '1102 Cedar Blvd', dob: '1987-02-20' },
    { id: 15, name: 'Mia Purple', position: 'Data Scientist', email: 'mia@example.com', status: 'Inactive', address: '1203 Elm St', dob: '1986-03-25' },
    { id: 16, name: 'Noah Pink', position: 'Software Architect', email: 'noah@example.com', status: 'Active', address: '1304 Maple St', dob: '1992-04-30' },
    { id: 17, name: 'Olivia Teal', position: 'Network Engineer', email: 'olivia@example.com', status: 'Inactive', address: '1405 Pine Rd', dob: '1991-05-15' },
    { id: 18, name: 'Paul Brown', position: 'Technical Writer', email: 'paul@example.com', status: 'Active', address: '1506 Oak St', dob: '1990-06-10' },
    { id: 19, name: 'Quinn Tan', position: 'Marketing Specialist', email: 'quinn@example.com', status: 'Inactive', address: '1607 Walnut Ave', dob: '1989-07-05' },
    { id: 20, name: 'Rachel Violet', position: 'Product Manager', email: 'rachel@example.com', status: 'Active', address: '1708 Cherry Ln', dob: '1988-08-20' },
  ]);
  
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleBlock = (id) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, status: emp.status === 'Active' ? 'Inactive' : 'Active' } : emp
    ));
  };

  const handleDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesFilter = filter === 'All' || emp.status === filter;
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  

  return (
    <>
      <GlobalStyles />
      <DashboardWrapper>
        <TopBar>
        <SearchBar setSearchQuery={setSearchQuery} />
          <ProfileDropdown employeeName="John Doe" />
        </TopBar>
        <FilterSection>
            <FilterButtons onFilterChange={handleFilterChange} activeFilter={filter} />
            <AddButton onClick={() => setIsAddEmployeeModalOpen(true)}>Add Employee</AddButton>
        </FilterSection>
        <EmployeeList>
          {filteredEmployees.map(employee => (
            <EmployeeCard 
              key={employee.id} 
              employee={employee} 
              onBlock={handleBlock} 
              onDetails={handleDetails} 
            />
          ))}
        </EmployeeList>
        {selectedEmployee && (
          <EmployeeDetailsModal 
            employee={selectedEmployee} 
            onClose={handleCloseModal} 
          />
        )}
        {isAddEmployeeModalOpen && (
          <AddEmployeeModal 
            onClose={() => setIsAddEmployeeModalOpen(false)} 
            onAddEmployee={handleAddEmployee}
          />
        )}
      </DashboardWrapper>
    </>
  );
};


const DashboardWrapper = styled.div`
  min-height: 100vh;
  background: rgb(237, 197, 232);
  background: linear-gradient(90deg, rgba(237, 197, 232, 1) 21%, rgba(180, 241, 236, 1) 100%);
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(187, 212, 245);
  background: linear-gradient(90deg, rgba(187, 212, 245, 1) 4%, rgba(224, 194, 249, 1) 100%);
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FilterSection = styled.div`
  margin-top: 20px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const EmployeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export default Dashboard;
