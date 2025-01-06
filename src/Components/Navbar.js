import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="nav-cont1">
            <div className='nav-logo'>
<div className="logo">Logo</div>
<div className='logo-2'>|</div>
            </div>
            <ul>
                <li><img src="home.svg" alt="" />Explore</li>
                <li><img src="pen.svg" alt="" />Create</li>
                <li><img src="Group 2.svg" alt="" />Edit</li>
            </ul>
        </div>
        <div className="nav-login-btn">
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar
