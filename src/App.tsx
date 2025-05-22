import React from 'react';
import './App.css';
import logo from './inter.png'; // Verifique se o arquivo está na pasta src/

function App() {
  return (
    <div className="container">
      <h1> Inter Campeão! </h1>
      <img src={logo} alt="Símbolo do Inter" className="logo" />
    </div>
  );
}

export default App;
