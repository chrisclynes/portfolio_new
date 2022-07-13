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
        const scrollSpy = () => {
            const len = pageSections.length;
            const fullHeight = (pageHeight.current*len);
            const scrollTop = window.scrollY
            const hashmap = {};
            pageSections.forEach((section, i) => {
                const height = document.querySelector(`#${section}`).offsetHeight;
                hashmap[i] = i === 0 ? height/2 : height + hashmap[i-1];
            })
            for(let i = 0; i < len; i++){
                if(scrollTop < hashmap[0]){
                    setActivePage(pageSections[0])
                }else if(scrollTop < hashmap[i] && scrollTop > hashmap[i-1]){
                    setActivePage(pageSections[i])
                }
            }
        }
        scrollSpy()
        window.addEventListener('scroll', scrollSpy)

        return () => window.removeEventListener('scroll', scrollSpy)
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