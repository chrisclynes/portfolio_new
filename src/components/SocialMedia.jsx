import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiCodepen } from 'react-icons/si'


const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <BsGithub />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <SiCodepen />
            </div>
        </div>
    )
}

export default SocialMedia;