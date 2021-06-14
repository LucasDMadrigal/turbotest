import React from 'react'
import './styles/Navbar.css'
import Logo from '../assets/Logo/Simbolo.svg'
import CloseLogo from '../assets/Icons/uil_plus-closed.svg'
function Navbar() {
    return (
        <nav>
            <figure className="logo">
                <img src={Logo} alt="logo" />
            </figure>
            <button className="btn burger-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header offcanvas_header">
                    <img src={Logo} alt="logo" />
                    <button type="button" className=" btn_close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img className="btn_close--icon" src={CloseLogo} /></button>
                </div>
                <div className="offcanvas_body offcanvas-body">
                    <ul>
                        <li>Home</li>
                        <li>Recomendados</li>
                        <li>La agencia</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
