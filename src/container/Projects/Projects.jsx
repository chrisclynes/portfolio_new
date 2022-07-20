import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import './Projects.scss';
import { images } from '../../constants';

const { gt01, gt02, gt03, gt04, notes01, notes02, webdex01, webdex02, webdex03, weather01, rest01, rest02, rest03 } = images;

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [filteredData, setFilteredData] = useState();
    //PROJECTS
    const projectsArr = [
        {name: "Guitar Toolbox", description: "React app for guitar training", link: "https://guitartoolbox-prod.web.app/", codeLink: "https://github.com/ChrisClynes/guitar-toolbox", img: [gt01, gt02, gt03, gt04], tags: ["UI/UX", "Mobile", "React JS", "Full-stack", "API"] },
        {name: "Web Dex", description: "Google clone app", link: "https://chrisclynes.github.io/webdex/", codeLink: "https://github.com/chrisclynes/webdex", img: [webdex02, webdex01, webdex03], tags: ["API", "React JS", "Mobile"] },
        {name: "Notes", description: "React notes appication", link: "https://chrisclynes.github.io/notes-app/", codeLink: "https://github.com/chrisclynes/notes-app", img: [notes01, notes02], tags: ["React JS", "UI/UX" ] },
        {name: "Restaurant Site", description: "React UI/UX site", link: "https://github.com/chrisclynes/restuarant-website", codeLink: "https://github.com/chrisclynes/restuarant-website", img: [rest01, rest02, rest03], tags: ["UI/UX", "Mobile", "React JS"] },
        {name: "Weather API", description: "Weather application", link: "https://codepen.io/christoph09/pen/VwywzqG", codeLink: "https://github.com/chrisclynes/Weather-API-App", img: [weather01], tags: ["API"] },
    ];

    const optionsFilter = ['UI/UX', 'API', 'Mobile', 'React JS', 'Full-stack', 'All'];

    useEffect(() => {
        setFilteredData(projectsArr)
    }, [])

    const handleFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{opacity: 0}]);

        setTimeout(() => {
            setAnimateCard([{ opacity: 1}]);
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
                {optionsFilter.map((item, i) => (
                    <motion.div 
                    key={i}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.5 }}
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
                    <div className="app__work-item app__flex" key={project.name}>
                        <div className="app__work-img app__flex">
                            <Carousel showThumbs={false}>
                                {project.img.map((image, i) => (
                                    <div className="carousel_img" key={project.name+i}>
                                        <img src={image}  alt={i}/>
                                    </div>
                                ))}
                            </Carousel>
                            <motion.div
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                              >
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0.5, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.15}}
                                        className="app__flex"
                                    >
                                            <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0.5, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.15}}
                                        className="app__flex"
                                    >
                                            <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-title app__flex">
                            <h4 className="bold-text">{project.name}</h4>
                        </div>
                        <div className="app__work-content app__flex">
                            <p className="p-text" style={{marginTop: 10}}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default AppWrapper(
    MotionWrap(Projects, "app__works"), 
    "projects",
    "app__primarybg"
);