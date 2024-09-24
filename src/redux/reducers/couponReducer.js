import { APPLY_COUPON } from '../actions/couponActions';

const initialState = {
    discount: 0,
};

export const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_COUPON:
            if (action.payload === 'SAVE10') {
                return { discount: 10 };
            } else {
                return { discount: 0 };
            }
        default:
            return state;
    }
};
