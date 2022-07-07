
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Header.scss';

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                   <div className="badge-cmp app__flex">
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Chris</h1>
                        </div>
                    </div> 
                    <div className="tag-cmp app__flex">
                        <p className="p-text">A Web Developer</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Header;