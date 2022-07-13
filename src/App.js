import React, { useState, useEffect, useRef } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { NavigationDots, SocialMedia } from './components';

import './App.scss';

export const pageSections = ['home', 'about', 'projects', 'skills', 'contact' ];

const App = () => {
    const [activePage, setActivePage] = useState("");
    const pageHeight = useRef(window.innerHeight);
    

    useEffect(() => {
        const updateWindowHeight = () => {
          const newHeight = window.innerHeight;
            pageHeight.current = newHeight;
            
        };
        window.addEventListener("resize", updateWindowHeight);
    
        return () => window.removeEventListener("resize", updateWindowHeight) 
      }, [pageHeight]);

    useEffect(() => {
        const handleNav = () => {
            const fullHeight = (pageHeight.current*pageSections.length);
            const scrollTop = window.scrollY
            const hashmap = {};
            //math for half of page height, triggers next active nav dot
            // const index = Math.floor((((scrollTop-(pageHeight.current/2))/fullHeight)*pageSections.length))
            //     setActivePage(pageSections[index+1])
            pageSections.forEach((section, i) => {
                const height = document.querySelector(`#${section}`).offsetHeight;
                hashmap[i] = i === 0 ? height : height + hashmap[i-1];
            })
            
            
        }
        
        window.addEventListener('scroll', handleNav)

        return () => window.removeEventListener('scroll', handleNav)
    }, [pageHeight])

   
   
    
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