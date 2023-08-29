import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from '../utils/axios'

export default function Products() {

    useEffect(() => {
        getAllProducts()
    }, []);

    const getAllProducts = async () => {
        try {
            const { data: { Products } } = await axios.get('/getallproducts');
            setProduct(Products);
        } catch (error) {
            console.error(error)
        }
    }

    const [Product, setProduct] = useState([])
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{background:'lightblue'}}>
                <span className='fs-4 fw-bold text-black'>Products</span>
                <ProductModal />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Product?.map((val, key) =>
                                <tr key={key}>
                                    <td><img src={val.images[1] || val.images[0]} className='img-fluid  rounded-circle ' style={{ height: '100px', objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>{val.title}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.price}</td>
                                    <td>{val.description}</td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}