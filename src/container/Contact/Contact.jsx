import { useState } from 'react';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { FiPhone, FiMail } from 'react-icons/fi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiCodepen } from 'react-icons/si'

import emailjs from 'emailjs-com';

import './Contact.scss';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [error, setError] =useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContactForm({
            ...contactForm,
            //dynamic way to update values based on the "name" of the event
            [name]: value
        })
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
                .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
                });
            console.log(response)
        }
        catch {
            setError(true);
        }  
        setIsLoading(false);
        setError(false);
        setSubmitted(true); 
    }

    const { name, email, message } = contactForm;

    return (    
        <>
            <h2 className="head-text">Get in touch with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <FiMail/>
                    <a href="mailto:chrisclynesdev@gmail.com" className="p-text">chrisclynesdev@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <FiPhone/>
                    <a href="tel: (636) 385-0180" className="p-text">(636) 385-0180</a>
                </div>
            </div>
            {!submitted ?
                <form className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input 
                            name="name" 
                            type="text" 
                            placeholder="Enter your name" 
                            value={name} 
                            required
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="app__flex">
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            required
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="app__flex">
                        <textarea 
                            name="message"
                            className="p-text" 
                            placeholder="Send me a message" 
                            value={message} 
                            onChange={handleInput} 
                        />
                    </div>
                    <button 
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}
                        disabled={isLoading ? true : false} 
                    >
                        {isLoading ? "Sending" : "Send"} 
                    </button>
                </form>
                :
                <div className="app__footer-form app__flex" style={error ? {backgroundColor: "tomato"}: null}>
                    <h4 className="head-text2">{!error ? "Thank you!" : "Failed to send message"}</h4>
                </div>
            }
            <div className="app__footer-container app__flex">
                <div className="app__social-items app__flex">
                    <a href="https://github.com/chrisclynes" target="_blank" rel="noreferrer">
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
                <div className="app__copyright p-text">2022 Chris Clynes</div>
            </div>
        </>
    )
}

export default AppWrapper(
    MotionWrap(Contact, "app__footer"), 
    "contact",
    "app__primarybg"
);