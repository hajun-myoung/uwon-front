import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Drawer_left from './Components/Drawer_left';
import HtmlPage from './Pages/HtmlPage';
import MainPage from './Pages/MainPage';
import NestingPage from './Pages/NestingPage';
import SignUp from './Components/Signin'
import SignIn from './Components/LoginPage'
import AddPage from './Pages/AddPage'
import SparklistPage from './Pages/SparklistPage';

const { kakao } = window;

function App() {

 

  return (  
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/html" exact element={<HtmlPage />} />
        <Route path="/sparklist" exact element={<SparklistPage />} />
        <Route path="/nesting" exact element={<NestingPage />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/sparkcreate" exact element={<AddPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;