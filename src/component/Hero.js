import React from 'react'
import './styles/Hero.css'
import Navbar from '../component/Navbar'

function Hero() {
    return (

        <header className="hero container-fluid">
            <Navbar />
            <div className="tittle-hero">
                <div className="tittle-hero_text">
                    <h1>Are you ready for the truth?</h1>
                    <h5>Well, the way they make shows is, they make one show. That show's called a pilot.</h5>
                </div>

                <button className="btn-contact">
                    Contactanos
                    <span className=""> > </span>
                </button>
                <div className="hero-items-pag">
                    <span className="arrow-left"></span>
                    <p>1 / 3</p>
                    <span className="arrow-right"></span>
                </div>
            </div>
        </header>


    )
}

export default Hero
