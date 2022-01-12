import React from 'react';
import './FooterStyle.css';
import Logo from '../../images/logo48.png';
import app from '../../images/pay/app.jpg';
import play from '../../images/pay/play.jpg';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsYoutube } from 'react-icons/bs/index.esm';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='section-p1'>

            <div className='col'>
                <img src={Logo} alt="LookZ" className='logo' />
                <h4>Contact</h4>
                <p><span>Adress: </span> 52 wellington road, street 32, San Francisco</p>
                <p><span>Phone: </span> +01 2222 356 / (+31) 01 2252 3698</p>
                <p><span>Open: </span> 10:00 - 18:00, mon - sat</p>

                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <a href='https://facebook.com'> <BsFacebook /> </a>
                        <a href='https://facebook.com'> <BsTwitter /> </a>
                        <a href='https://facebook.com'> <BsInstagram /> </a>
                        <a href='https://facebook.com'> <BsPinterest /> </a>
                        <a href='https://facebook.com'>  <BsYoutube /> </a>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>About</h4>
                <Link to="/">About us</Link>
                <Link to="/">Delivery Information</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Contact Us</Link>

            </div>

            <div className="col">
                <h4>About</h4>
                <Link to="/">Sign In</Link>
                <Link to="/">View Cart</Link>
                <Link to="/">My wishlest</Link>
                <Link to="/">Track My Order</Link>
                <Link to="/">Help</Link>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>from app store or google play</p>
                <div className="row">
                    <a href='https://www.appstore.com'> <img src={app} alt="app store" /> </a>
                    <a href='https://www.googleplay.com'> <img src={play} alt="google play" /> </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
