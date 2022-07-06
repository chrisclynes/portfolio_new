import React from 'react';
import { About, Footer, Header, Projects, Skills } from './container'

const App = () => {
    return ( 
        <div className="app">
           <Header />
           <About />
           <Projects />
           <Skills />
           <Footer />
        </div>
    )
}

export default App;