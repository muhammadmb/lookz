import React from 'react';
import './FeaturesStyle.css';
import pic1 from '../../images/features/f1.png';
import pic2 from '../../images/features/f2.png';
import pic3 from '../../images/features/f3.png';
import pic4 from '../../images/features/f4.png';
import pic5 from '../../images/features/f5.png';
import pic6 from '../../images/features/f6.png';

const Features = () => {

    return (
        <section className='feature section-p1'>

            <div className='fe-box'>
                <img src={pic1} alt='' title='' />
                <h6>Free Shipping</h6>
            </div>

            <div className='fe-box'>
                <img src={pic2} alt='' title='' />
                <h6>Online Order</h6>
            </div>

            <div className='fe-box'>
                <img src={pic3} alt='' title='' />
                <h6>save money</h6>
            </div>

            <div className='fe-box'>
                <img src={pic4} alt='' title='' />
                <h6>promotions</h6>
            </div>

            <div className='fe-box'>
                <img src={pic5} alt='' title='' />
                <h6>happy sell</h6>
            </div>

            <div className='fe-box'>
                <img src={pic6} alt='' title='' />
                <h6>f24/7 support</h6>
            </div>

        </section>
    )
}

export default Features;
