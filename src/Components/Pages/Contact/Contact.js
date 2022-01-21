import React from 'react';
import './ContactStyle.css';
import background from '../../../images/b14.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaClock } from 'react-icons/fa';
import { People } from '../../../Data/Data';

const Contact = () => {
    return (
        <div>
            <div className='page-header' style={{ backgroundImage: `url(${background})` }}>
                <h2>#Let's_Talk</h2>
                <p>Leave a message, we love to hear for you</p>
            </div>
            <section className='section-p1 contact-details'>
                <div className="details">
                    <span>Get in touch</span>
                    <h2>Visit one of our agency locations or contact us NOW</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <FaMapMarkerAlt className='icon' />
                            <p>56 Glassford street glasgow G1 1UL New Yourk</p>
                        </li>

                        <li>
                            <FaMailBulk className='icon' />
                            <p>contact@Example.com</p>
                        </li>

                        <li>
                            <FaPhoneAlt className='icon' />
                            <p>+20 0111522525</p>
                        </li>

                        <li>
                            <FaClock className='icon' />
                            <p>monday to saturday: 9.00 AM to 4.00 PM</p>
                        </li>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        title='address'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.7277077315102!2d-0.11062668440035714!3d51.5548918150508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b7645295e3b%3A0x3600713c8382cf90!2sEmirates%20Stadium!5e0!3m2!1sen!2seg!4v1642772667249!5m2!1sen!2seg"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            <div className='form-details'>
                <form action="">
                    <span>Leave a message</span>
                    <h2>we love to heare from you</h2>
                    <input type="text" placeholder='your name' />
                    <input type="text" placeholder='E-mail' />
                    <input type="text" placeholder='Subject' />
                    <textarea name='' cols="30" rows="10" placeholder='your message' />
                    <button className='normal'>Submit</button>
                </form>



                <div className="people">
                    {
                        People.map(p => (
                            <div>
                                <img src={p.img} alt={p.title} />
                                <p><span>{p.name}</span> {p.title} <br /> Phone: {p.phone} <br /> Email:{p.mail} </p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Contact;