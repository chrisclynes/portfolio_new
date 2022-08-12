import { AppWrapper } from '../../wrapper'
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io'

import './Header.scss';

const arrowVariants = {
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <div className="app__header-badge">
                   <div className="app__title app__flex">
                        <div style={{ marginLeft: 20 }}>
                            <p className="head-text2">Hello, I'm</p>
                            <h1 className="head-text">Chris</h1>
                        </div>
                    </div> 
                <motion.div
                    initial={{ x: -100, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', delay: 1, duration: 1, bounce: 0.5 }}
                    className="app__header-info"
                >
                    <div className="sub-tag app__flex">
                        <p className="logo-text" >A Web Developer</p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                    animate={{ y: 50, opacity: [0, 1] }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="down-arrow-container app__flex"
                >
                    <motion.button 
                        className="app__flex"
                        variants={arrowVariants}
                        whileHover="hover"
                    >
                        <a href="#about" className="down-arrow"><IoIosArrowDown /></a>
                    </motion.button>
            </motion.div>
            <motion.div
                    initial={{ x: 30, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="app__projects-btn"
                >
                    <div className="projects-btn app__flex">
                        <a href="#projects" className="alt-text">Projects</a>
                    </div>
            </motion.div>
        </div>
    )
}

//wrapper sets each section 100 view height 100% of screen
export default AppWrapper(Header, "home",);