import React from 'react';
import './ShopStyle.css';
import shopHeader from '../../../images/b1.jpg';
import Products from '../../Products/Products';
import { productData, arrivalData } from '../../../Data/Data';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shop-header' style={{ backgroundImage: `url(${shopHeader})` }}>
                <h2>Shop Now</h2>
                <p>Save more with coupons & up to 70% off!</p>
            </div>

            <Products description='summer collection new modern design' banner='Featured Products' data={productData} />
            <Products data={arrivalData} />
            <div className='section-p1 section-m1 pagination'>
                <Link to='1'>1</Link>
                <Link to='2'>2</Link>
                <Link to='3' className='arrow'><BsFillArrowRightCircleFill className='icon' /></Link>
            </div>
        </div>

    )
}

export default Shop;
