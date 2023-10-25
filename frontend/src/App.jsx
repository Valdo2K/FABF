import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Features/About/About';
import Contact from './Features/Contact/Contact';
import Footer from './Features/Footer/Footer';
import Header from './Features/Header/Header';
import Home from './Features/Home/Home';
import Service from './Features/Service/Service';
import Layout from './Features/Layout/Layout';
import HomePage from './Features/HomePage/HomePage';
import LoginPage from './Features/LoginPage/LoginPage';
import RegisterPage from './Features/RegisterPage/RegisterPage';
import PasswordForgotten from './Features/PasswordForgotten/PasswordForgotten';

function App() {
    return (
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element = {<HomePage/>} />
              <Route path='/Login' element = {<LoginPage/>} />
              <Route path='/Register' element = {<RegisterPage/>} />
              <Route path='/PasswordForgotten' element = {<PasswordForgotten/>} />
          </Route>
         
      </Routes>
        
     
      
    );
}

export default App;