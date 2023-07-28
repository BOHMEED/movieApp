import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useEffect, useState } from 'react';
import CardModal from './Components/CardModal';
import AddModal from './Components/AddModal';
import Login from './Login';
import Lkol from './Lkol';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path="/lkol" element={<Lkol  />}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
