import React, { useState, useCallback } from 'react';
import './CartStyle.css';
import background from '../../../images/b17.jpg';
import { GiCancel } from 'react-icons/gi';
import { order } from '../../../Data/Data';

const Cart = () => {
    const [data, SetData] = useState(order);
    const [valid, setValid] = useState(false);
    const [coupon, setCoupon] = useState('');
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleQuantity = (e) => {
        const { name, value } = e.target;
        if (parseInt(value) >= 1) {
            data[name].quantity = parseInt(value);
        } else {
            data[name].quantity = 1;
        }
        forceUpdate();
    }

    const handleCancelation = (id) => {
        SetData(data.filter(d => d.id !== id));
    }

    const handlecoupon = (e) => {
        setCoupon(e.target.value);
        if (coupon.length >= 5) {
            setValid(true);
        }
    }

    const getTotal = () => {
        var total = 0;
        data.forEach(element => {
            total += parseInt(element.quantity) * parseInt(element.price.substring(1, element.price.length));
        });
        return total;
    }

    const hanelValidCoupon = () => {
        var total = getTotal();
        if (valid === true) {
            total *= (90 / 100);
        }
        return Math.floor(total);
    }

    return (
        <>
            <div className='page-header' style={{ backgroundImage: `url(${background})` }}>
                <h2>#readMore</h2>
                <p>read all case studies about our products!</p>
            </div>

            <div className='cart section-p1'>
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((p, index) => (
                                <tr key={p.id}>
                                    <td><GiCancel className='cancelIcon' onClick={() => handleCancelation(p.id)} /></td>
                                    <td><img src={p.img} alt={p.describtion} /></td>
                                    <td>{p.describtion}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            step="1"
                                            value={data[index].quantity}
                                            name={index}
                                            onChange={handleQuantity}
                                        />
                                    </td>
                                    {
                                        data[index].quantity !== undefined ?
                                            <td>
                                                ${parseInt(p.price.substring(1, p.price.length)) * data[index].quantity}
                                            </td>
                                            :
                                            <td>$0</td>
                                    }
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            <div className='cart-add section-p1'>
                <div className="coupon">
                    <h3>Apply coupon</h3>
                    <div>
                        {
                            valid ?
                                <>
                                    <input type="text" placeholder='Enter Your coupon' readOnly value={coupon} onChange={handlecoupon} />
                                    <span>DONE!</span>
                                    <p>Your coupon successfuly added</p>
                                </>
                                :
                                <>
                                    <input type="text" placeholder='Enter Your coupon' value={coupon} onChange={handlecoupon} />
                                    <button className='normal'>Apply</button>
                                </>
                        }


                    </div>
                </div>

                <div className="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>cart subTotal</td>
                                <td>${getTotal()} {valid ? <span>- 10%</span> : null}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>${hanelValidCoupon()}</strong></td>
                            </tr>
                        </tbody>

                    </table>
                    <button className='normal'>Processd to checkout</button>
                </div>
            </div>

        </>
    );
};

export default Cart;
