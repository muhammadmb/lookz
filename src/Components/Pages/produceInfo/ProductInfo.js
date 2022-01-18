import React, { useState } from 'react';
import './ProductInfoStyle.css';
import { Link, useParams } from "react-router-dom";
import { arrivalData, productData } from '../../../Data/Data';
import Products from '../../Products/Products';

const ProductInfo = () => {

    const [orderNumber, setOrderNumber] = useState(1);
    const id = parseInt(useParams().id);
    const data = productData.concat(arrivalData);
    const pro = data.filter(d => d.id === id);

    let suggestions = [4];
    for (let i = 0; i < 4; i++) {
        if (id + i < 16) {
            suggestions[i] = data[id + i];
        } else {
            suggestions[i] = data[id + i - 16];
        }
    }

    const handleOrder = (e) => {
        setOrderNumber(e.target.value);
    }

    return (
        <>
            <section className='product-info section-p1'>
                <div className='pro-img'>
                    <img className='main-img' src={pro[0].img} width="100%" alt={pro[0].describtion} />

                    <div className='small-img-group'>
                        {
                            suggestions.map(suggestionProduct => (
                                <Link
                                    to={`/shop/product/${suggestionProduct.id}`}
                                    className='small-img-col'
                                    key={suggestionProduct.id}
                                >
                                    <img
                                        src={suggestionProduct.img}
                                        width="100%"
                                        className='small-img'
                                        alt={suggestionProduct.describtion}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className='pro-details'>
                    <h4>{pro[0].describtion}</h4>
                    <h2>{pro[0].price}</h2>
                    <select>
                        <option>Select size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Large</option>
                        <option>Small</option>
                    </select>
                    <input type="number" value={orderNumber} onChange={handleOrder} />
                    <button className="white">Add to card</button>
                    <h4>Product details</h4>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, id laborum? Consequatur perspiciatis ipsam odio distinctio alias. Dolore voluptates reiciendis repellendus illo nihil, obcaecati dignissimos officiis, distinctio, accusantium eveniet eum.
                    </span>
                </div>
            </section>

            <Products description='summer collection new modern design' banner='Featured Products' data={productData} />
        </>
    )
}

export default ProductInfo;
