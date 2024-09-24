export const APPLY_COUPON = 'APPLY_COUPON';

export const applyCoupon = (code) => ({
    type: APPLY_COUPON,
    payload: code
});
