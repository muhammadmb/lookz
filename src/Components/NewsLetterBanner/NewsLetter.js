import React from 'react';
import './NewsLetterStyle.css';

const NewsLetter = () => {
    return (
        <section className='newsletter section-p1 section-m1'>
            <div className="newstext">
                <h4>Sign up for Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>Special offers</span>.</p>
            </div>
            <div className="form">
                <input type="text" placeholder='Youe E-mail' />
                <button className='normal'>Sign Up</button>
            </div>
        </section>
    )
}

export default NewsLetter;
