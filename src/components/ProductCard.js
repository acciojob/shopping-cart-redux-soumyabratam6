import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { addToWishlist } from '../redux/actions/wishlistActions';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product));
    };

    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img className="card-img-top" src={product.image} alt={product.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <button className="btn btn-primary me-2" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    <button className="btn btn-secondary" onClick={handleAddToWishlist}>
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
