import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route, HashRouter }
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Solutions from './pages/solutions';
import CompletedProjects from './pages/completedProjects';
import Services from './pages/services';
import MBRAndMBBR from './pages/mbrAndmbbr';


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/solutions' element={<Solutions />} />
                <Route path='/completedProjects' element={<CompletedProjects />} />
                <Route path='/MBRAndMBBR' element={<MBRAndMBBR />} />
                <Route path='/services' element={<Services />} />
            </Routes>
        </HashRouter>
    );
}
 
export default App;