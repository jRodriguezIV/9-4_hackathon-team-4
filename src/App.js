import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Navbar from './Components/Common/NavBar/NavBar';
import Splash from './Pages/SplashPage/SplashPage';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Centers from './Components/Centers/Centers.jsx';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Components/About';
import TestComponent from './Components/TestComponent/TestComponent';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Footer from './Components/Common/Footer/Footer.jsx';


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <main>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;