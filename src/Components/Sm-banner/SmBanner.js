import React from 'react';
import './SmBannerStyle.css';
import { smBannerBackground } from '../../Data/Data';
import { Link } from 'react-router-dom';

const SmBanner = () => {

    const Banners = smBannerBackground.map(banner => (
        <div className="banner-box" style={{ backgroundImage: `url(${banner.background})` }}>
            <h4>{banner.lable}</h4>
            <h2>{banner.title}</h2>
            <span>{banner.description}</span>
            <Link to={banner.path}><button className='white'>Learn more</button></Link>
        </div>
    ));

    return (
        <section className='sm-banner section-p1'>
            {Banners}
        </section>
    )
}

export default SmBanner;
