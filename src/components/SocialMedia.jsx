import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiCodepen } from 'react-icons/si'


const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://github.com/ChrisClynes" target="_blank" rel="noreferrer">
                <div>
                    <BsGithub />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/chris-clynes-717128127/" target="_blank" rel="noreferrer">
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a href="https://codepen.io/christoph09" target="_blank" rel="noreferrer">
                <div>
                    <SiCodepen />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia;