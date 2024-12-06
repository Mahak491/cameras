import React, { useState } from 'react';
import Header from './components/Header.js';
import Table from './components/Table.js';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term); 
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Table searchTerm={searchTerm} />
    </div>
  );
};

export default App;
