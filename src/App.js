import React, { useState, useEffect } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { NavigationDots, SocialMedia } from './components';

import './App.scss';

export const menuItems = ['home', 'about', 'projects', 'skills', 'contact' ];

const App = () => {
    const [activePage, setActivePage] = useState("");
    const [pageHeight, setPageHeight] = useState("");

    useEffect(() => {
        const updateWindowHeight = () => {
          const newHeight = window.innerHeight;
            setPageHeight(newHeight);
        };
    
        window.addEventListener("resize", updateWindowHeight);
    
        return () => window.removeEventListener("resize", updateWindowHeight) 
      }, [pageHeight]);

    useEffect(() => {
        const handleNav = () => {
            const scrollTop = window.scrollY
            if(scrollTop < pageHeight/2){
                setActivePage("home")
            }else {
                setActivePage("contact")
            }
            console.log(pageHeight);
        }
        window.addEventListener('scroll', handleNav)

        return () => window.removeEventListener('scroll', handleNav)
    }, [])

   
    
    return ( 
        <div className="wrap__container">
            <SocialMedia />
            <NavigationDots active={activePage}/>
            <div className="app">
                <Navbar />
                <Header />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    )
}

export default App;