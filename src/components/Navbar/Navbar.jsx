import { useState } from 'react';
import { images } from '../../constants';
import { MdOutlineClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const menuItems = ['home', 'about', 'projects', 'skills', 'contact' ];

const { logo } = images;
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt="logo img" />
            </div>
            <ul className="app__navbar-links">
                {menuItems.map((item) => (
                    <li className="p-text app__flex" key={`desktop-${item}`}>
                        <div>
                            <a href={`#${item}`}>{item}</a>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <GiHamburgerMenu onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                // container for mobile nav menu
                   <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                   >
                     <MdOutlineClose onClick={() => setToggleMenu(false)}/>
                     <ul>
                       {menuItems.map((item) => (
                            <li key={item}>
                                    {/* close mobile menu after item selected */}
                                    <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                                        {item}
                                    </a>
                            </li>
                         ))}
                        </ul>
                   </motion.div> 
                )}
            </div>
        </nav>
    )
}

export default Navbar;