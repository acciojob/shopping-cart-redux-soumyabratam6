
import React from "react";
import './../styles/App.css';
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";
import ProductCard from "./ProductCard";

const App = () => {
  const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 150,
        image: 'https://static.vecteezy.com/system/resources/previews/012/705/555/non_2x/men-s-shirts-mockup-design-template-mockup-free-photo.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 200,
        image: 'https://media.e-valy.com/cms/products/images/6ac28ad0-8364-4e18-901f-db41fd32147d',
    },
];
  return (
  <div className="container mt-4">
    <h1 className="text-center mb-4">Shopping Cart</h1>
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart />
      <Wishlist />
      <Coupon />
  </div>
  )
}

export default App
