import { motion } from 'framer-motion';
import { AppWrapper, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
    const {sass, react, figma, api, git, html, javascript, css, firebase, sql, nodejs, php, wordpress, zapier } = images;
    
    //add to skills
    const skillsArr = [
        {name: "JavaScript", icon: javascript },
        {name: "HTML 5", icon: html },
        {name: "CSS", icon: css },
        {name: "PHP", icon: php },
        {name: "Wordpress", icon: wordpress },
        {name: "Zapier", icon: zapier },
        {name: "React JS", icon: react },
        {name: "SASS", icon: sass },
        {name: "figma", icon: figma },
        {name: "API", icon: api, href: "https://icons8.com/icon/kM1Cl69rI7go/api" },
        {name: "Git", icon: git },
        {name: "SQL", icon: sql, href: "https://flaticon.com/free-icons/sql-server" },
        {name: "Node.js", icon: nodejs },
        {name: "Firebase", icon: firebase, href: "https://icons8.com/icon/62452/firebase" },
    ];
    //add to experiences
    const experienceArr = [
        { name: "Full-Stack Web Developer", company: "GetUWired", description: "I build custom websites and applications across a wide range of platforms—including WordPress, React, and various e-commerce systems—tailored to meet specific business goals. From marketing sites to complex membership platforms, I develop seamless integrations, scalable databases, and automation workflows that connect CRMs, payment gateways, and third-party APIs. Delivering practical, end-to-end solutions for all your web needs." },
        { name: "IT Technician", company: "UPS", description: "Over 8 years of hands-on experience providing technical support for computer systems, network infrastructure, and enterprise hardware in a fast-paced corporate environment. Skilled in troubleshooting, system maintenance, end-user support, and ensuring uptime and reliability across critical business operations." },
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