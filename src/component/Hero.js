import React from 'react'
import './styles/Hero.css'
import Navbar from '../component/Navbar'
import leftArrow from '../assets/Icons/uil_arrow-left.svg'
import rightArrow from '../assets/Icons/uil_arrow-right.svg'

function Hero() {
    return (

        <header className="hero container-fluid">
            <Navbar />
            <div className="tittle-hero">
                <div className="tittle-hero_text">
                    <h1>Are you ready for the truth?</h1>
                    <h6>Well, the way they make shows is, they make one show. That show's called a pilot.</h6>
                </div>

                <button className="btn-contact">
                    Contactanos
                    <span className=""> > </span>
                </button>
                <div className="hero-items-pag">
                    <img src={leftArrow} className="arrow-left" />
                    <p>1 / 3</p>
                    <img src={rightArrow} className="arrow-right" />
                </div>
            </div>
        </header>


    )
}

export default Hero
