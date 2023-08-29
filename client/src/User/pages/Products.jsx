import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/cartContext';
import PreLoader from '../components/PreLoader';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cartState, cartDispatch } = useCart();

  const handleAddToCart = (product) => {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity: 1,
      },
    });
  };

  useEffect(() => {
    // Fetch product data from API
    axios.get('/getallproducts')
      .then(response => {
        setProducts(response.data.Products)
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);


  if(isLoading) {
    return <PreLoader/>
  }

  return (
    <>

    <style>
      {`
      /* Products.css */

      .card {
          transition: transform 0.3s, box-shadow 0.2s;
      }
      
      .card:hover {
        transform: scale(1.05); /* Move card slightly up on hover */
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5); /* Shadow on hover */
      }
      
      .card-img-container {
          overflow: hidden; /* Hide any overflowing image */
          height: 200px; /* Set a fixed height for the image container */
      }
      
      .card-img-top {
          height: 100%; /* Make the image fill the container */
          object-fit: cover;
      }
      
      `}
    </style>
    <div className="container my-5">
      <div className="text-center">
        <h2>Products</h2>
        <small className="text-secondary">
          Some quick example text to build on the page and make up the bulk
          of the content.
        </small>
      </div>

      <div className="row justify-content-center my-5"> {/* Center the cards */}
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-img-container">
                <img
                  src={product.images[0]} 
                  className="card-img-center"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {product.brand}
                </h6>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-dark mx-2" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <Link to={`/products/${product._id}`} className="btn btn-secondary mx-2">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
}
