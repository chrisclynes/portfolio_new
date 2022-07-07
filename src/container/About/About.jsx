import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
const aboutArr = [
    {title: 'Web Development', description: 'I design fantastic websites.', imgUrl: ''},
    {title: 'Raect Applications', description: 'Web applications with speed.', imgUrl: ''},
    {title: 'UX/UI', description: 'User experiences that are engaging.', imgUrl: ''},
];

const About = () => {
    return (
        <>
            <div style={{backgroundColor: "lightblue"}}>
                <h2 className="head-text">
                    <span>Something meaningful here</span>
                </h2>
                <div className="app__profiles">
                    {aboutArr.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="app__profile.item"
                            key={about.title + index}
                        >
                            <img src={about.imgUrl} alt="about.title"/>
                            <h2 className="bold-text" style={{marginTop: "1rem"}}>{about.title}</h2>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About;