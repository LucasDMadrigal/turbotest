import React from 'react'
import './styles/Home.css'
import Navbar from '../component/Navbar'

function Home() {
    return (
        <main>
            <Navbar />
            <header className="hero container-fluid">
                <h2>Are you ready for the truth?</h2>
                <h5>Well, the way they make shows is, they make one show. That show's called a pilot.</h5>

                <button className="btn">Contactanos</button>
            </header>
        </main>
    )
}

export default Home
