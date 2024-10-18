import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }
  
  .dashboard {
    padding: 20px;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 24px;
    font-weight: bold;
  }

  .filter-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
`;

export default GlobalStyles;
