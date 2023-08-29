import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PreLoader from '../components/PreLoader'
import { useCart } from '../../Context/cartContext'
import axios from 'axios'

export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(false)
    const { cartState, cartDispatch } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    })

    useEffect(() => {
        
    
    }, [])
    

    const handlePlaceOrder = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.post('/create-order', {
                ...formData,
                items: cartState.items
            });
    
            alert(data.message);
    
            cartDispatch({
                type: 'DELETE_CART',
            });
        } catch (error) {
            
        }

        setIsLoading(false);
    };

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handerDeleteProduct = _id => {

        if (!confirm("Do you want to delete this product from the cart?")) return;

        cartDispatch({
            type: 'REMOVE_ITEM',
            payload: _id,
        });
    };



    if (isLoading) {
        return <PreLoader />
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <p className='mt-5'>
                        <label htmlFor="name">Full Name:</label>
                        <input className='form-control' type="text" placeholder='Full name' name="name" onChange={handleInputChange} />
                    </p>

                    <p>
                        <label htmlFor="email">Email:</label>
                        <input className='form-control' type="email" placeholder='Email Address' name="email" onChange={handleInputChange} />

                    </p>
                    <p>
                        <label htmlFor="address">Address:</label>
                        <textarea className='form-control' type="email" placeholder='Enter full address' name="address" onChange={handleInputChange}></textarea>
                    </p>

                    <button className='btn btn-dark' onClick={handlePlaceOrder}>Place Order</button>
                </div>
                <div className="col-md-6 py-5">
                    <ul>
                        {cartState.items.map(i => <li key={i._id} className='d-flex'>
                            <img src={i.thumb || i.thumbnail} alt="" srcSet="" className='img-fluid' width={100} />
                            <div>
                                <p>{i.title}</p>
                                <p>qty: {i.quantity}</p>
                            </div>
                            <div>
                                <button className='btn btn-danger' onClick={e => handerDeleteProduct(i._id)}>
                                    Remove
                                </button>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
