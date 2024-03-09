import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MainBanner from './components/MainBanner/MainBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
    </div>
  );
}

export default App;
