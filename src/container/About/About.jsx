import { useState, useEffect } from 'react';
import { AppWrapper } from '../../wrapper'
import { motion } from 'framer-motion';


import './About.scss';
import { images } from '../../constants';

const { about01, about02, about03 } = images;
const aboutArr = [
    {title: 'Web Development', description: 'I design fantastic websites', img: about01},
    {title: 'React Applications', description: 'Web applications with speed', img: about02},
    {title: 'UX/UI', description: 'User experiences that are engaging', img: about03},
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

export default AppWrapper(About, "about");