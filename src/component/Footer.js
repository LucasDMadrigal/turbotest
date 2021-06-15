import React from 'react'
import './styles/Footer.css'
import HorizontalLogo from '../assets/Logo/Horizontal-color.svg'
import Facebook from '../assets/Icons/uil_facebook.svg'
import instagram from '../assets/Icons/uil_instagram.svg'
function Footer() {
    return (
        <footer className="">
            <picture>
                <img className="horizontal-logo" src={HorizontalLogo} alt="footer-logo" />
            </picture>
            <h4>Uuummmm, this is a tasty burger!</h4>
            <div className="footer_contact">
                <div className="footer_contact--title">
                    <div className="separador"></div>
                    <h6>CONTACT</h6>
                </div>
                <p>
                    <b>

                        info@bukyapp.com
                    </b>
                </p>
                <p>
                    <b>

                        +34 722 73 96 22
                    </b>
                </p>
                <p>
                    Calle Isaac Peral, 39,
                </p>
                <p>
                    35660, Las Palmas
                </p>
            </div>
            <div className="footer_explorer">
                <div className="footer_explorer--title">
                    <div className="separador"></div>
                    <h6>EXPLORA</h6>
                </div>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">RECOMENDADOS</a></li>
                    <li><a href="">LA AGENCIA</a></li>
                    <li><a href="">CONTACTO</a></li>
                </ul>
            </div>
            <div className="social-media_container">
                <div className="social-media_container--icon">
                    <img src={Facebook} />
                    <img src={instagram} />
                </div>

            </div>
            <div className="policy">
                <ul>
                    <li><a href="" className="policy_item">Aviso Legal</a></li>
                    <li><a href="" className="policy_item">Politica de Cookies</a></li>
                    <li><a href="" className="policy_item">Politica de Privacidad</a></li>
                </ul>
            </div>
            <div className="footer_marks">
                <p className="trade-mark">© Turbo Testing 2021</p>
                <p className="credits">Diseñado por juanjov.com</p>
            </div>
        </footer>
    )
}

export default Footer
