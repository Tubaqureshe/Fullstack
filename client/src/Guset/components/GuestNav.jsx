import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BiSolidLogInCircle } from 'react-icons/bi'
import { SiReactos } from 'react-icons/si'

export default function GuestNav() {
    return (
        <Navbar expand="lg" style={{background:'lightblue'}}>
            <Container>
                <Link className='navbar-brand' to='/'><SiReactos color='blue' size={30} /> GuestNav</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link'><BiSolidLogInCircle color='blue' size={20} />Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
