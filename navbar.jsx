import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button>Sign In</button>
            <button>Sign Up</button>
            <button>Cart</button>
            <button>Wishlist</button>
            <button>Profile</button>
            <button>Logout</button>
        </nav>
    )
}

export default navbar