import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/RegistartionForm/RegistrationForm';
import LoginForm from './Components/LoginForm/LoginForm';
import Header from './Components/Header/Header';

function App() {
  return (
     <div className="App">
      <Header />
      <Routes>
      <Route path="/register" element={<RegistrationForm />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
    </Routes>
    </div>
  );
}

export default App;
