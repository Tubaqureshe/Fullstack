import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../Context/cartContext'
import PreLoader from '../components/PreLoader';

export default function ProductPage() {
    const { _id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { cartDispatch } = useCart();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        axios
            .get(`/productbyid/${_id}`)
            .then(json => {
                setProduct(json.data.Products);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handleAddToCart = () => {
        cartDispatch({
            type: 'ADD_ITEM',
            payload: {
                ...product,
                quantity,
            },
        });
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    if (isLoading) {
        return <PreLoader />;
    }

    return (
       <>
       <style>
        {`
        /* Add this to your CSS */
        .product-image {
            width: 100%; /* Set the width as needed */
            height: auto; /* Maintain aspect ratio */
            max-height: 400px; /* Set the maximum height as needed */
        }
        
        `}
       </style>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={selectedImage || product.thumb || product.thumbnail} alt="" srcSet="" className="img-fluid" />
                </div>
                <div className="col-md-6 py-5">
                    <h2>{product.title}  ($ {product.price})</h2>
                    <small className="text-secondary">{product.description}</small>
                    <div className="row my-5">
                        {product?.images?.map((val, key) => (
                            <div
                                key={key}
                                className={`col-md-4 border border-dark rounded mx-2 mt-2 ${
                                    selectedImage === val ? 'selected-thumbnail' : ''
                                }`}
                            >
                                <img
                                    src={val}
                                    className="img-fluid"
                                    onClick={() => handleImageClick(val)}
                                    style={{ cursor: 'pointer' }}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>


                    <div className='d-flex justify-content-around align-items-center bg-light py-4 rounded border border-secondary'>
                        <button className="btn btn-dark" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                        {quantity}
                        <button className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <div className='d-block mt-3'><button className="w-100 btn btn-dark" onClick={handleAddToCart}>Add to Cart</button></div>
                </div>
            </div>
        </div>
       </>
    )
}
