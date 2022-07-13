import { useState, useEffect } from 'react';
import { AppWrapper, MotionWrap } from '../../wrapper'
import { motion } from 'framer-motion';


import './About.scss';
import { images } from '../../constants';

const { about01, about02, about03, about04 } = images;
const aboutArr = [
    {title: 'Web Development', description: 'I design fantastic front-end websites', img: about01},
    {title: 'React Applications', description: 'Creating web applications with speed', img: about02},
    {title: 'UX/UI', description: 'User experiences that are engaging', img: about03},
    {title: 'Problem Solver', description: 'Providing solutions to technical problems', img: about04},
   ];
const About = () => {

    return (
        <>
            <div >
                <h2 className="head-text">
                    <span>Something meaningful here</span>
                </h2>
                <div className="app__profiles">
                    {aboutArr.map((about, index) => (
                        <motion.div
                            whileInView={({ opacity: 1 })}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <img src={about.img} alt={about.title}/>
                            <h2 className="bold-text" style={{marginTop: "1rem"}}>{about.title}</h2>
                            <p className="p-text" style={{marginTop: "1rem"}}>{about.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AppWrapper(
    MotionWrap(About, "app__about", "about"), 
    "about",
    "app__whitebg"
);