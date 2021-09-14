import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/navbar/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
    </div>
  );
}

export default App;
