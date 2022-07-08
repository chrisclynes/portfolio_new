import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineCodepenCircle } from 'react-icons/ai'


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
                <AiOutlineCodepenCircle />
            </div>
        </div>
    )
}

export default SocialMedia;