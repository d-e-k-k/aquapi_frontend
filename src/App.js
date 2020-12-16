import React, {Component} from 'react';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import AquariumStatus from './components/aquarium_status/AquariumStatus'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <AquariumStatus />
    </div>
  );
}

export default App;
