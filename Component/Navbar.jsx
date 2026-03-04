import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div>logo</div>
                <div>searchbar
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
                <div>cart</div>
                <div>profile</div>
                <div>logout</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <button>Sign In</button>
                <button>Sign Up</button>
            </nav>
        </div>
    )
}

export default Navbar