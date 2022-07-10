import { useState } from 'react';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { FiPhone, FiMail } from 'react-icons/fi'

import './Contact.scss';

const Contact = () => {
    const [name, setName] = useState('');
    return (
        <>
            <h2 className="head-text">Get in touch with me</h2>
            <div calssName="app__footer-cards">
                <div className="app__footer-card">
                    <FiMail/>
                    <a href="mailto:chrisclynesdev@gmail.com" className="p-text">chrisclynesdev@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <FiPhone/>
                    <a href="tel: (636) 385-0180" className="p-text">(636) 385-0180</a>
                </div>
            </div>
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>

        </>
    )
}

export default AppWrapper(
    MotionWrap(Contact, "app__footer"), 
    "contact",
    "app__primarybg"
);