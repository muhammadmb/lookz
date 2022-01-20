import React from 'react';
import './AboutStyle.css';
import background from '../../../images/b15.jpg';
import aboutImg from '../../../images/a12.jpg';
import appVideo from '../../../images/v1.mp4';
import Features from '../../Features/Features';

const About = () => {
    return (
        <div>
            <div className='about-header' style={{ backgroundImage: `url(${background})` }}>
                <h2>#KnowUs</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <section className='about-details section-p1'>
                <img src={aboutImg} alt="about" />
                <div>
                    <h2>Who we are?</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis, distinctio ducimus cum quod accusantium nam modi expedita velit cupiditate adipisci a doloribus, quas asperiores quos quasi ipsum quibusdam iusto!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, maxime nobis, praesentium est quaerat officia aliquam repellendus dolore facere cumque veritatis provident at quisquam velit soluta distinctio labore animi in.</p>
                </div>
            </section>

            <section className='about-app'>
                <h1>Download our app</h1>
                <h2><a href='https://play.google.com'>play store</a> <a href='https://www.apple.com'>app store</a></h2>
                <div className='video'>
                    <video autoPlay loop muted>
                        <source src={appVideo} type='video/mp4' />
                    </video>
                </div>
            </section>

            <Features />

        </div>
    );
};

export default About;