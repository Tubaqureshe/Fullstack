import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import { MdAddReaction } from 'react-icons/md'
import { BiCategoryAlt } from 'react-icons/bi'
import CartPopup from './cartpopup';

export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)

    return (
        <Navbar expand="lg" style={{background:'lightblue'}}>
            <Container>
                <Link className='navbar-brand fw-bold text-black' to='/'> <MdAddReaction  color='blue' size={30}/> UserNav</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link  fw-bold text-black  ' ><BiCategoryAlt  color='blue'/> Brands</Link>
                        <Link to='/products' className='nav-link fw-bold text-black'> <BiCategoryAlt  color='blue' /> Products</Link>
                        <Link to='/category' className='nav-link fw-bold text-black'><BiCategoryAlt  color='blue'/>Category</Link>
                    </Nav>

                    <div className="d-flex gap-3">                       
                        <CartPopup />
                        <button className="btn btn-dark"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}
                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
