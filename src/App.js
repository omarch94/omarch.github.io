import "./App.css";

import React, { createContext,useEffect, useState } from 'react';

import SideBar from './interface/SideBar';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Social from "./interface/Social";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


const App = () => {

  const [home, setHome] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    setTimeout(() => {
      setHome(true);
    }, 750);
    setTimeout(() => {
      setSideBar(true);
    }, 1500);
  }, []);



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

    <React.Fragment>
    <div className="App" id={theme}>

  
      <Navbar />
      {home && <Home />}
      {sideBar && <About />}
      {sideBar && <Portfolio />}
      {sideBar && <Contact />}
      {sideBar &&
        <SideBar side='left'>
          <Social name='instagram' href='https://instagram.com/omarch94'>
            <i className="fa-brands fa-instagram"></i>
          </Social>
          <Social name='github' href='https://github.com/omarch94'>
            <i className="fa-brands fa-github"></i>
          </Social>
          <Social name='linkedin' href='https://www.linkedin.com/in/omar-cherti-746a43158/'>
            <i className="fa-brands fa-linkedin-in"></i>
          </Social>
        </SideBar>}
      {sideBar && <SideBar side='right'>
        <p className='vertical'>Created by OMAR CHERTI</p>
      </SideBar>}
    </div>
    </React.Fragment>
    
        </ThemeContext.Provider>

  );
};

export default App;
