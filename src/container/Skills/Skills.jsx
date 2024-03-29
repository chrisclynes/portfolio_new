import { motion } from 'framer-motion';
import { AppWrapper, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
    const {sass, react, figma, api, git, html, javascript, css, firebase} = images;
    
    //add to skills
    const skillsArr = [
        {name: "JavaScript", icon: javascript },
        {name: "React JS", icon: react },
        {name: "SASS", icon: sass },
        {name: "API", icon: api, href: "https://icons8.com/icon/kM1Cl69rI7go/api" },
        {name: "Git", icon: git },
        {name: "HTML 5", icon: html },
        {name: "CSS", icon: css },
        {name: "Firebase", icon: firebase, href: "https://icons8.com/icon/62452/firebase" },
    ];
    //add to experiences
    const experienceArr = [
        { name: "Web Developer", description: "Self-taught front end developer with a primary focus on React JS web applications." },
        { name: "IT Technician", company: "UPS", description: "8+ years of technical support for computer systems and network infrastructure in a modern corporate environment." },
    ]
    
    return (
        <>
            <h2 className="head-text">Experience</h2>
            <div className="app__skills-container">
            <motion.div className="app__skills-exp-works">
                    {experienceArr.map((work, i) => (
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
                <motion.div className="app__skills-list">
                    {skillsArr.map((skill, i) => (
                        <motion.div
                            whileInView={{scale: [0,1]}}
                            transition={{duration: 0.25 + i/10}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <a className="app__flex" target="_blank" href={skill?.href} rel="noreferrer">
                                <img src={skill.icon} alt={`icon${i}`}  />
                            </a>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>    
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