import React, { useRef, useEffect } from 'react'
import RightWhiteArrow from '../assets/Icons/uil_arrow-right-white.svg'
import './styles/Slideshow.css'

function Slideshow() {

    const yesNoRef = useRef()
    const holdRef = useRef()
    const yesNoAnchorRef = useRef()
    const holdAnchorRef = useRef()

    useEffect(() => {

        const handleScroll = () => {
            const yesNo = yesNoRef.current;
            const Hold = holdRef.current;

            const yesNoItem = yesNoAnchorRef.current
            const holdItem = holdAnchorRef.current

            console.log(`${yesNo.getBoundingClientRect().top}`);

            if (yesNo.getBoundingClientRect().top > -550 && yesNo.getBoundingClientRect().top < 350) {

                holdItem.classList.remove('active')
                yesNoItem.classList.add('active')

            } else if (Hold.getBoundingClientRect().top > 0 && Hold.getBoundingClientRect().top < 450) {
                yesNoItem.classList.remove('active')
                holdItem.classList.add('active')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div >
            <div id="slideshow_menu" className=" nav container-fluid slideshow_menu">
                <a ref={yesNoAnchorRef} href="#yes_no" className="slideshow_menu--item">Yes or no?</a>
                <a ref={holdAnchorRef} href="#hold" className="slideshow_menu--item">Hold</a>
            </div>

            <div className="slideshow_main">

                <div ref={yesNoRef} className="slideshow_yes_no" id="yes_no">
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
                <div ref={holdRef} className="slideshow_hold" id="hold" >

                    <div className="slideshow_hold--element-container">

                        <div className="slideshow_hold--text-container">
                            <h2 >Hold on to your butts</h2>
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
                        <div className="slideshow_hold-image-reverse"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow
