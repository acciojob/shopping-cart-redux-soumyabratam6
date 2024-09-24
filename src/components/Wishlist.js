import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/actions/wishlistActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishlist = () => {
    const wishlistItems = useSelector(state => state.wishlist.items || []);
    const dispatch = useDispatch();

    // const handleAddToWishlist = () => {
    //     // Update to include an image in the item object
    //     const item = { id: Math.random(), name: 'Wishlist Item', price: 50, image: 'https://via.placeholder.com/150' };
    //     dispatch(addToWishlist(item));
    // };

    const handleRemoveFromWishlist = (id) => {
        dispatch(removeFromWishlist(id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Wishlist</h2>
            {/* <button className="btn btn-primary mb-3" onClick={handleAddToWishlist}>Add to Wishlist</button> */}
            <div className="row">
                {wishlistItems.length === 0 ? (
                    <p>No items in wishlist.</p>
                ) : (
                    wishlistItems.map(item => (
                        <div className="col-md-3 mb-3" key={item.id}>
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt={item.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <button className="btn btn-danger" onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;
