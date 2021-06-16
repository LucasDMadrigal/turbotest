import React from 'react'
import './styles/Slideshow.css'
import RightWhiteArrow from '../assets/Icons/uil_arrow-right-white.svg'
import RedCar from '../assets/IMG/Red02_car.jpg'
function Slideshow() {
    return (
        <div >

            <div id="slideshow_menu" className=" nav container-fluid slideshow_menu">
                <a href="#yes_no" className="slideshow_menu--item">Yes or no?</a>
                <a href="#hold" className="slideshow_menu--item">Hold</a>
            </div>

            <div data-bs-spy="scroll" data-offset="45" data-bs-target="#slideshow_menu" className="slideshow_main">

                <div className="slideshow_yes_no" id="yes_no">
                    <div className="yesno_text">
                        <h2 id="yes_no">Is she dead, yes or no?</h2>
                        <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
                    </div>
                    <div className="slideshow_yesno--image-container">
                        <div className="slideshow_yesno--image slideshow_yesno--image-1">
                            <h4>Title Project</h4>
                            <img src={RightWhiteArrow} alt="arrow-logo" />
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-2">
                            <h4>Title Project</h4>
                            <img src={RightWhiteArrow} alt="arrow-logo" />
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-3">
                            <h4>Title Project</h4>
                            <img src={RightWhiteArrow} alt="arrow-logo" />
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-4">
                            <h4>Title Project</h4>
                            <img src={RightWhiteArrow} alt="arrow-logo" />
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-5">
                            <h4>Title Project</h4>
                            <img src={RightWhiteArrow} alt="arrow-logo" />
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-6">
                            <h4>Title Project</h4>
                            <img src={RightWhiteArrow} alt="arrow-logo" />
                        </div>
                    </div>
                </div>
                <div className="slideshow_hold" >

                    <div className="slideshow_hold--element-container">

                        <div className="slideshow_hold--text-container">
                            <h2 id="hold">Hold on to your butts</h2>
                            <div className="slideshow_hold--paragraph">
                                <p>Well, the way they make shows is, <b>they make one show.</b> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>
                                <button className="btn_hold">Conocenos</button>
                            </div>
                        </div>
                        <div className="slideshow_hold-image"></div>

                    </div>
                    <div className="slideshow_hold--element-container reverse">

                        <div className="slideshow_hold--text-container">
                            <div className="slideshow_hold--paragraph">
                                <p>Well, the way they make shows is, <b>they make one show.</b> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>
                                <button className="btn_hold">Conocenos</button>
                            </div>
                        </div>
                        <div className="slideshow_hold-image"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow
