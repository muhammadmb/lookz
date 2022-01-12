import React from 'react';
import './ProductsStyle.css';
import cart from '../../images/addCart.png';
import { Link } from 'react-router-dom';

const Products = (props) => {

    const Images = props.imgs.map(img => (
        <div className='pro'>
            <img src={img} alt='' title='' />
            <div className='des'>
                <span>adidas</span>
                <h5>cartoon astronaut T-Shirts</h5>
                <h4>$78</h4>
            </div>
            <Link to="/">
                <img className='cart' src={cart} alt='' />
            </Link>
        </div>
    ));

    return (
        <>
            <section className='products section-p1'>
                <h2>{props.banner}</h2>
                <p>{props.description}</p>
                <div className='pro-container'>
                    {Images}
                </div>
            </section>
        </>
    )
}

export default Products;
