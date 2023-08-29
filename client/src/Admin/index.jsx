import React from 'react'
import Sidebar from './components/Sidebar'
// import Home from './pages/Home'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Brands from './pages/Brands';


export default function Admin() {
    return (
        <div className="row m-0 p-0">
            <div className="col-md-3 m-0 p-0 bg-secondary" style={{ height: '100vh' }}>
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            {/* <div style={{ marginTop: '50px' }}> */}
                    <Footer className="margin-top-50"/>
                {/* </div> */}
        </div>
    )
}
