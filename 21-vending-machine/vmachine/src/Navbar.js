import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink activeClassName='Navbar-active' exact to='/'>Home</NavLink>
                <NavLink activeClassName='Navbar-active' exact to='/soda'>Soda</NavLink>
                <NavLink activeClassName='Navbar-active' exact to='/sardines'>Sardines</NavLink>
                <NavLink activeClassName='Navbar-active' exact to='/chips'>Chips</NavLink>
            </div>
        )
    }
}

export default Navbar;