import { motion } from 'framer-motion';
import { AppWrapper, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import './Skills.scss';


const Skills = () => {
    const {sass, react, figma, node, git, html, javascript, css} = images
    //add to skills
    const skillsArr = [
        {name: "JavaScript", icon: javascript },
        {name: "React JS", icon: react },
        {name: "SASS", icon: sass },
        {name: "Figma", icon: figma },
        {name: "Node JS", icon: node },
        {name: "Git", icon: git },
        {name: "HTML 5", icon: html },
        {name: "CSS", icon: css },
    ];
    //add to experiences
    const experienceArr = [
        {name: "IT Technician", company: "UPS", description: "Technical support for computer systems and network infrastructure" },
    ]
    
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
                            <div className="app__flex">
                                <img src={skill.icon} alt={`icon${i}`} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>    
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experienceArr.map((work) => (
                        <>
                            <motion.div
                               whileInView={{opacity: [0,1]}}
                               transition={{duration: 0.5}}
                               className="app__skills-exp-work"
                               data-tip
                               data-for={work.name}
                               key={work.name} 
                            >
                                <h4 className="bold-text">{work.name}</h4>
                                <p className="p-text">{work.company}</p>
                                <span>{work.description}</span>
                            </motion.div>
                        </>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrapper(
    MotionWrap(Skills, "app__skills"), 
    "skills",
    "app__whitebg"
);