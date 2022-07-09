import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import './Projects.scss';
import { images } from '../../constants';

const { about01, about02, about03 } = images;

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [filteredData, setFilteredData] = useState();
    //PROJECTS
    const projectsArr = [
        {name: "Guitar Toolbox", description: "React JS app for guitar training", link: "", codeLink: "", img: about01, tags: ["UI/UX", "Mobile", "React JS", "Full-stack", "API"] },
        {name: "Web Dex", description: "Google clone app", link: "", codeLink: "", img: about02, tags: ["API", "React JS", "Mobile"] },
        {name: "Notes", description: "JS notes appication", link: "", codeLink: "", img: about03, tags: ["React JS"] },
        {name: "Restaurant Site", description: "React UI/UX site", link: "", codeLink: "", img: about01, tags: ["UI/UX", "Mobile", "React JS"] },
        {name: "Weather API", description: "Weather application", link: "", codeLink: "", img: about02, tags: ["API"] },
    ];

    useEffect(() => {
        setFilteredData(projectsArr)
    }, [])

    const handleFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{x:100, opacity: 0}]);

        setTimeout(() => {
            setAnimateCard([{x:0, opacity: 1}]);
            if(item === 'All') {
                setFilteredData(projectsArr);
            }else {
                setFilteredData(projectsArr.filter((project) => project.tags.includes(item)));
            }
        }, 500);
    }
    
    return (
        <>
            <h2 className="head-text">
                    <span>My Projects</span>
            </h2>
            <div className="app__work-filter">
                {['UI/UX', 'API', 'Mobile', 'React JS', 'Full-stack', 'All'].map((item, i) => (
                    <motion.div 
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    animate={{y: 0, opacity: 1}}
                    transition={{ duration: 0.5, }}
                    variants={{
                        hidden: {y: -60, opacity: 0}
                      }}
                    onClick={() => handleFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    > 
                        {item}
                    </motion.div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filteredData?.map((project, i) => (
                    <div className="app__work-item app__flex" key={i}>
                        <div className="app__work-img app__flex">
                            <img src={project.img} alt={project.name} />
                            <motion.div
                                whileHover={{opacity: [0, 1]}}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                              >
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{project.name}</h4>
                            <p className="p-text" style={{marginTop: 10}}>{project.description}</p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{project.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default AppWrapper(Projects, "projects");