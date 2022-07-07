import { useState } from 'react';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';


const { logo } = images;
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt="logo img" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'projects', 'skills', 'contact' ].map((item) => (
                    <li className="p-text app__flex" key={`desktop-${item}`}>
                        <div>
                            <a href={`#${item}`}>{item}</a>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggleMenu(true)}/>
                {toggleMenu &&
                   <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                   >
                     <HiX onClick={() => setToggleMenu(false)}/>
                        {['home', 'about', 'projects', 'skills', 'contact' ].map((item) => (
                            <li key={`mobile-${item}`}>
                                <div>
                                    {/* close mobile menu after item selected */}
                                    <a 
                                        href={`#${item}`} 
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        {item}
                                    </a>
                                </div>
                            </li>
                         ))}
                   </motion.div> 
                }
            </div>
        </nav>
    )
}

export default Navbar;