import React from 'react'
import './styles/Navbar.css'
import Logo from '../assets/Logo/Simbolo.svg'
function Navbar() {
    return (
        <nav>
            <figure className="logo">
                <img className src={Logo} alt="" />
            </figure>
            <button className="btn burger-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </nav>
    )
}

export default Navbar
