import React from 'react';
import './HomeStyle.css';
import background from '../../../images/HomeBackground.jpg';
import buttonBackground from '../../../images/button.png';
import Features from '../../Features/Features';

const Home = () => {
    return (
        <>
            <div className='home' style={{ backgroundImage: `url(${background})` }}>
                <h4>Trade-in-offer</h4>
                <h2>Super value deales</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button style={{ backgroundImage: `url(${buttonBackground})` }}>Shop Now</button>
            </div>

            <Features />
        </>
    )
}

export default Home;
