import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Drawer_left from './Components/Drawer_left';
import HtmlPage from './Pages/HtmlPage';
import MainPage from './Pages/MainPage';
import MuiPage from './Pages/MuiPage';
import SparklistPage from './Pages/SparkDetail';

const { kakao } = window;

function App() {


  return (  
    <Router>
      <Routes>
        <Route path="/drawer" exact element={<Drawer_left />} />
        <Route path="/" exact element={<MainPage />} />
        <Route path="/mui" exact element={<MuiPage />} />
        <Route path="/html" exact element={<HtmlPage />} />
        <Route path="/nesting" exact element={<MuiPage />} />
        <Route path="/SparklistPage" exact element={<SparklistPage />}/>
      </Routes>
    </Router>
    
  );
}

export default App;