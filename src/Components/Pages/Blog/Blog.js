import React from 'react';
import './BlogStyle.css';
import background from '../../../images/b12.jpg';
import { Blogs } from '../../../Data/Data';

const Blog = () => {
    return (
        <section>
            <div className='blog-header' style={{ backgroundImage: `url(${background})` }}>
                <h2>#readMore</h2>
                <p>read all case studies about our products!</p>
            </div>

            {
                Blogs.map(b => (
                    <div className='blog'>
                        <div className="blog-box">
                            <div className="blog-img">
                                <img src={b.img} alt={b.title} />
                            </div>
                            <div className="blog-details">
                                <h4>
                                    {b.title}
                                </h4>
                                <p>{b.describtion}</p>
                                <a href={b.url}>Continue Reading</a>
                            </div>
                            <h1>{b.date}</h1>
                        </div>
                    </div>
                ))
            }



        </section>
    )
}

export default Blog;
