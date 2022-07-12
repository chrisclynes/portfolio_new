import React, { useState } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { NavigationDots, SocialMedia } from './components';

import './App.scss';

const App = () => {
    const [activePage, setActivePage] = useState("home")
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