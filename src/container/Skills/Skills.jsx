import { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { ReactTooltip } from 'react-tooltip';


import './Skills.scss';

const Skills = () => {

    const skillsArr = [];
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
                                <img src={skill.icon} alt="icon" />
                            </div>
                        </motion.div>    
                    ))}
                </motion.div>

            </div>
        </>
    )
}

export default AppWrapper(Skills, "skills");