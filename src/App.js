import React, { useState, useEffect, useRef } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { NavigationDots, SocialMedia } from './components';

import './App.scss';

export const pageSections = ['home', 'about', 'projects', 'skills', 'contact' ];

const App = () => {
    const [activePage, setActivePage] = useState("");
    const [triggerScrollSpy, setTriggerScrollSpy] = useState(true);
    const pageHeight = useRef(window.innerHeight);
    const sectionsData = useRef({});
    
    useEffect(() => {
        const updateWindowHeight = () => {
            console.log("triggered");
          const newHeight = window.innerHeight;
            pageHeight.current = newHeight;
            //build sectionsData for each section height middle point, 
            //this changes dynamically based on window size and section size
            pageSections.forEach((section, i) => {
                const height = document.querySelector(`#${section}`).offsetHeight;
                sectionsData.current[i] = i === 0 ? height/2 : height + sectionsData.current[i-1];
            })   
        }
       
        if(triggerScrollSpy) {
            updateWindowHeight()
        } 
        window.addEventListener("resize", updateWindowHeight);
        
        return () => window.removeEventListener("resize", updateWindowHeight);
      }, [pageHeight, triggerScrollSpy]);

    useEffect(() => {
        const scrollSpy = () => {
            const len = pageSections.length;
            const scrollTop = window.scrollY;
            //loop values and compare current y position to determine active section
            for(let i = 0; i < len; i++){
                if(scrollTop < sectionsData.current[0]){
                    setActivePage(pageSections[0]);
                }else if(scrollTop < sectionsData.current[i] && scrollTop > sectionsData.current[i-1]){
                    setActivePage(pageSections[i]);
                }
            }
        }
        //load once onload, determines position on refresh or initial load
        if(triggerScrollSpy) {
            scrollSpy()
        } 
        window.addEventListener('scroll', scrollSpy);
        setTriggerScrollSpy(false);
        
        return () => window.removeEventListener('scroll', scrollSpy)
    }, [pageHeight, triggerScrollSpy])

   //----------------APP RENDER--------------------------------
    return ( 
        <div className="wrap__container">
            <SocialMedia />
            <NavigationDots active={activePage}/>
            <div className="app">
                <Navbar />
                <Header />
                <About />
                <Projects setTriggerScrollSpy={setTriggerScrollSpy} />
                <Skills />
                <Contact />
            </div>
        </div>
    )
}

export default App;