import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Table from './components/Table';
import "./components/styles/App.css"
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        
        <Filters />
        <Table />
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
