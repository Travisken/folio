// import { NavLink } from 'react-router-dom'
import { Link
    //     ,
    // //  Button, Element, Events,
    //  animateScroll as
    //   scroll, scrollSpy, scroller 
    } from 'react-scroll';
    import {useState} from "react";
    import './function';

import './index.css'

function Nav() {
    const [nav, setNav] = useState(false);
    const closenav = () => setNav (!nav);

    return (
        <>
            <nav>
            {/* <Link to="hero" spy={true} smooth={true} offset={50} duration={500}> */}

                <div className="logo">
                   
                </div>
                {/* </Link> */}

                <ul>
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            My works
                        </li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            Contact
                        </li>
                    </Link>
                </ul>

                <div className={nav ? 'hamburger align-right' : 'hamburger'}  onClick={closenav} id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>




            <section  className={nav ? 'side-bar show' : 'side-bar'}>
            {/* <Link to="hero" spy={true} smooth={true} offset={50} duration={500}> */}

            <div className="logo">
                   
                   </div>
{/* </Link> */}

                   <ul>
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            My works
                        </li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <li>
                            Contact
                        </li>
                    </Link>
                    </ul>
            </section>


        </>
    )
}

export default Nav
