import React, { useContext } from 'react'
import UserNav from './Components/UserNav'
import Brands from './Pages/Brands'
import Category from './Pages/Category'
import Home from './Pages/Home'
// import Products from './Pages/Products'
import Products from './pages/Products'
import ProductsByBrand from './pages/ProductsByBrand'
import ProductsByCategory from './Pages/ProductsByCategory'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import { Navigate, Route, Routes } from "react-router-dom";


export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brands" element={<Brands />} />                  
                <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:_id" element={<ProductPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category/:CategoryName" element={<ProductsByCategory />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>

        </>
    )
}
