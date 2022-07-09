import { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { ReactTooltip } from 'react-tooltip';

import { images } from '../../constants';
import './Skills.scss';


const Skills = () => {
    const {sass, react, figma, node, git, html, javascript, css} = images
    const skillsArr = [
        {name: "JavaScript", icon: javascript, bkg: "#fff" },
        {name: "React JS", icon: react, bkg: "#fff" },
        {name: "SASS", icon: sass, bkg: "#fff" },
        {name: "Figma", icon: figma, bkg: "#fff" },
        {name: "Node JS", icon: node, bkg: "#fff" },
        {name: "Git", icon: git, bkg: "#fff" },
        {name: "HTML 5", icon: html, bkg: "#fff" },
        {name: "CSS", icon: css, bkg: "#fff" },
    ];
    
    return (
        <>
            <h2 className="head-text">Experience</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skillsArr.map((skill, i) => (
                        <motion.div
                            whileInView={{opacity: [0,1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style={{backgroundColor: skill.bkg}}>
                                <img src={skill.icon} alt={`icon${i}`} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>    
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrapper(Skills, "skills");