import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/RegistartionForm/RegistrationForm';
import LoginForm from './Components/LoginForm/LoginForm';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SearchForm from './Components/SearchPage/SearchForm';

function App() {
  return (
     <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<RegistrationForm />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/search" element={<SearchForm />}></Route>
    </Routes>
    </div>
  );
}

export default App;
