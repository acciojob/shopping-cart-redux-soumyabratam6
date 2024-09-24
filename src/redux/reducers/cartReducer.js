import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/cartActions';

const initialState = {
    items: [], // The cart items are stored in 'items'
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if item already exists in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Increase the quantity if the item is already in the cart
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            // Otherwise, add the item to the cart with an initial quantity of 1
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case INCREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case DECREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        default:
            return state;
    }
};
