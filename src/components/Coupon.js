import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyCoupon } from '../redux/actions/couponActions';

const Coupon = () => {
    const [coupon, setCoupon] = useState('');
    const discount = useSelector(state => state.coupon.discount);
    const dispatch = useDispatch();

    const handleApplyCoupon = () => {
        dispatch(applyCoupon(coupon));
    };

    return (
        <div>
            <h2>Apply Coupon</h2>
            <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
            />
            <button onClick={handleApplyCoupon}>Apply</button>
            {discount > 0 && <p>Coupon Applied! Discount: {discount}%</p>}
        </div>
    );
};

export default Coupon;
