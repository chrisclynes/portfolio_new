import React, { useState } from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';
import { SiderWrap } from './wrapper';

import './App.scss';

const App = () => {
    const [activePage, setActivePage] = useState("home")
    return ( 
        <div className="app">
           <Navbar />
           <Header />
           <About />
           <Projects />
           <Skills />
           <Contact />
        </div>
    )
}

export default SiderWrap(App, "home");