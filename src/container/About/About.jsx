import { AppWrapper, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';

const {
  about01, about02, about03, about04,
  about05, about06, about07, about08
} = images;

const aboutArr = [
  {
    title: 'WordPress Architecture',
    description: 'Custom themes, plugins, and scalable websites with performance in mind.',
    img: about01
  },
  {
    title: 'API & Webhook Integrations',
    description: 'Custom API solutions, bidirectional sync, and real-time data pipelines.',
    img: about04
  },
  {
    title: 'Automation Engineer',
    description: 'Streamlining workflows across Zapier, Make, and CRMs to eliminate manual work.',
    img: about03
  },
  {
    title: 'Frontend UI Systems',
    description: 'Reusable UI components built in React, LitElement, and Angular.',
    img: about05
  },
  {
    title: 'Membership & eCommerce Systems',
    description: 'Building robust membership sites using MemberPress, WooCommerce, and CRM integrations.',
    img: about02
  },
  {
    title: 'Real-Time Web Apps',
    description: 'Building chat apps, dashboards, and live-sync systems using WebSockets.',
    img: about06
  },
  {
    title: 'Data Reporting & Analytics',
    description: 'Custom reporting dashboards for downloads, renewals, and usage metrics.',
    img: about07
  },
  {
    title: 'Security & Performance Optimization',
    description: 'Hardening WordPress and PHP apps for security, speed, and reliability.',
    img: about08
  }
];

const About = () => {
  return (
    <>
      <div>
        <h2 className="head-text">
          <span>End-to-End Solutions for the Web</span>
        </h2>
        <div className="app__profiles">
          {aboutArr.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.img} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: "1rem" }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: "1rem" }}>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrap(About, "app__about", "about"),
  "about",
  "app__whitebg"
);
