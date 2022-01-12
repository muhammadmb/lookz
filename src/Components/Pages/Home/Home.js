import React from 'react';
import './HomeStyle.css';
import background from '../../../images/HomeBackground.jpg';
import buttonBackground from '../../../images/button.png';
import Features from '../../Features/Features';
import Products from '../../Products/Products';
import Banner from '../../Banner/Banner';
import SmBanner from '../../Sm-banner/SmBanner';
import { productImgs, arrivalImgs } from '../../../Data/Data'
import NewsLetter from '../../NewsLetterBanner/NewsLetter';
import Footer from '../../Footer/Footer';

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
            <Products description='summer collection new modern design' banner='Featured Products' imgs={productImgs} />
            <Banner />
            <Products description='summer collection new modern design' banner='New Arrivals' imgs={arrivalImgs} />

            <SmBanner />

            <NewsLetter />

            <Footer />
        </>
    )
}

export default Home;
