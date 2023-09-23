import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route, HashRouter }
    from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Solutions from './pages/solutions';
import CompletedProjects from './pages/completedProjects';
import Services from './pages/services';
 
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/solutions' element={<Solutions />} />
                <Route path='/completedProjects' element={<CompletedProjects />} />
                <Route path='/services' element={<Services />} />
            </Routes>
        </HashRouter>
    );
}
 
export default App;