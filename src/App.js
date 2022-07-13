import React, { useState, useEffect } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { NavigationDots, SocialMedia } from './components';

import './App.scss';

export const pageSections = ['home', 'about', 'projects', 'skills', 'contact' ];

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
        
        window.addEventListener('scroll', handleNav)

        return () => window.removeEventListener('scroll', handleNav)
    }, [pageHeight])

    const handleNav = () => {
        const len = pageSections.length;
        const scrollTop = window.scrollY
        if(scrollTop < (pageHeight*len)){
            setActivePage(pageSections[0])
        }else {
            setActivePage(pageSections[4])
        }
        console.log(pageHeight);
    }
   
    
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