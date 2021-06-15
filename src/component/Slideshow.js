import React from 'react'
import './styles/Slideshow.css'

function Slideshow() {
    return (
        <div >
            <div id="slideshow_menu" className=" nav container-fluid slideshow_menu scrollspy-example">

                <a href="#yes_no" className="slideshow_menu--item">Yes or no?</a>

                <a href="#hold" className="slideshow_menu--item">Hold</a>

            </div>
            <div style={{ position: 'relative' }} data-bs-spy="scroll" data-offset="45" data-bs-target="#slideshow_menu" className="slideshow_main">

                <div className="slideshow_yes_no" id="yes_no">
                    <h2 id="yes_no">Is she dead, yes or no?</h2>
                    <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
                    <div className="slideshow_yesno--image-container">
                        <div className="slideshow_yesno--image slideshow_yesno--image-1">
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-2">
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-3">
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-4">
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-5">
                        </div>
                        <div className="slideshow_yesno--image slideshow_yesno--image-6">
                        </div>
                    </div>
                </div>
                <div className="slideshow_hold" >

                    <h2 id="hold">Hold on to your butts</h2>
                    <div className="slideshow_hold--text-container">
                        <div className="slideshow_hold">
                            <p>Well, the way they make shows is, <b>they make one show.</b> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>
                            <button className="btn_hold">Conocenos</button>
                        </div>
                    </div>
                    <div className="slideshow_hold-image"></div>
                    <div className="slideshow_hold--text-container">

                        <div className="slideshow_hold">
                            <p>Well, the way they make shows is, <b>they make one show.</b> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>
                            <button className="btn_hold">Conocenos</button>
                        </div>
                    </div>
                    <div className="slideshow_hold-image"></div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow
