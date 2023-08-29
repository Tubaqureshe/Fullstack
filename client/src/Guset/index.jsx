import React from 'react'
// import GuestNav from './Components/GuestNav'
import GuestNav from './components/GuestNav';
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';




export default function Guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
        </>
    )
}
