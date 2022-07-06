
import { images } from '../../constants';
import './Navbar.scss';

const { logo } = images;
const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt="logo img" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'projects', 'skills', 'contact' ].map((item) => (
                    <li className="p-text app__flex" key={item}>
                        <div>
                            <a href={`#${item}`}>{item}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;