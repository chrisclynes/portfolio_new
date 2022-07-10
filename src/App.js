import React from 'react';
import { About, Contact, Header, Projects, Skills } from './container'
import { Navbar } from './components';

import './App.scss';

const App = () => {
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

export default App;