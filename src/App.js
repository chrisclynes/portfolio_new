import React, { useState, useEffect, useRef } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { NavigationDots, SocialMedia } from './components';

import './App.scss';

export const pageSections = ['home', 'about', 'projects', 'skills', 'contact' ];

const App = () => {
    const [activePage, setActivePage] = useState("");
    const pageHeight = useRef(window.innerHeight);
    const pageLoaded = useRef(false);
    

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
            const scrollTop = window.scrollY
            const hashmap = {};
            //build hashMap for each section height middle point, 
            //this changes dynamically based on window size and section size
            pageSections.forEach((section, i) => {
                const height = document.querySelector(`#${section}`).offsetHeight;
                hashmap[i] = i === 0 ? height/2 : height + hashmap[i-1];
            })
            //loop values and compare current y position to determine active section
            for(let i = 0; i < len; i++){
                if(scrollTop < hashmap[0]){
                    setActivePage(pageSections[0])
                }else if(scrollTop < hashmap[i] && scrollTop > hashmap[i-1]){
                    setActivePage(pageSections[i])
                }
            }
        }
        //load once onload, determines position on refresh or initial load
        if(pageLoaded.current) {
            console.log('loaded')
            scrollSpy()
        } 
        window.addEventListener('scroll', scrollSpy);
        pageLoaded.current = true;
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