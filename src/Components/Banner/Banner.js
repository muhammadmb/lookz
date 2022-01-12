import React from 'react';
import './BannerStyle.css';
import background from '../../images/b2.jpg';

const Banner = () => {
    return (
        <section className='banner section-m1' style={{ backgroundImage: `url(${background})` }}>
            <h4>Repair Services</h4>
            <h2>Up to <span>70% off</span> - All T-Shirts & Accessories</h2>
            <button className='normal'>Explore More</button>
        </section>
    )
}

export default Banner;
