import './App.css';
import React from "react";
import { Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Views/Home';
import Register from './Views/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
