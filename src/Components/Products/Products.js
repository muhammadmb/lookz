import React from 'react';
import './ProductsStyle.css';
import cart from '../../images/addCart.png';
import { Link } from 'react-router-dom';

const Products = (props) => {

    const Product = props.data.map(pro => (
        <div className='pro' key={pro.id}>
            <Link to={`product/${pro.id}`}>
                <img src={pro.img} alt='' title='' />
                <div className='des'>
                    <span>{pro.brand}</span>
                    <h5>{pro.describtion}</h5>
                    <h4>{pro.price}</h4>
                </div>
            </Link>

            <Link to="/">
                <img className='cart' src={cart} alt='' />
            </Link>
        </div>
    ));

    return (
        <>
            <section className='products section-p1'>
                {
                    props.banner ?
                        <h2>{props.banner}</h2>
                        :
                        null
                }
                {
                    props.description ?
                        <p>{props.description}</p>
                        :
                        null
                }
                <div className='pro-container'>
                    {Product}
                </div>
            </section>
        </>
    )
}

export default Products;
