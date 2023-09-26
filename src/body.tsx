import { Link } from "react-router-dom";
// import { useState } from "react";
import ContactUs from "./contact";
import Items from "./myworks";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';



// import {FontAwesomeIcon} from "https://fontawesome.com/icons/instagram?f=brands&s=solid&pc=%23000000";

// const CODE = 'function myFunction(){'
// document.addEventListener("DOMContentLoaded", function () {
//     // const copyText = document.querySelector(".copy-text");
//     const copyButton = document.querySelector("#email");
//     const input = document.querySelector("#text");

//     if (copyButton && input) {
//       copyButton.addEventListener("click", function () {
//         // input.select();
//         document.execCommand("copy");
//         // copyText.classList.add("active");
//         // window.getSelection().removeAllRanges();
//         setTimeout(function () {
//         //   copyText.classList.remove("active");
//         }, 2500);
//       });
//     }
//   });

// Export your variable or function here if needed
// export default Did;

function Body() {
    // const ContactUs = () => {
    //     const form = useRef();
      
    //     const sendEmail = (e) => {
    //       e.preventDefault();
      
    //       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     };
    // };

    // const [value, setValue] = useState("");
    // const [data, setData] = useState("");
    // const [label, setLabel] = useState(false);
    // const droplabel = () => setLabel (!label);

    return (
        <>

            <section id="hero" className="hero">

                <div className="hero-heading">
                    <div className="profile"></div>
                    <h1>
                        Hi I'm Travis
                    </h1>

                    <h3>
                        Crafting
                        <span>
                            Innovative
                        </span>
                        and <br />
                        <span>
                            User-Centric
                        </span>
                        Websites


                    </h3>
                    <hr />

                    <Link to="/">
                        <button>
                            Resume & CV
                            <span className="material-symbols-outlined">
                                start
                            </span>
                        </button>
                    </Link>
                </div>

                {/* <img src="880f9046ff2c61591c320adb4e9eaae7.jpg" alt="" /> */}
                {/* <div className="cover">
            <img src="1a911ab7388613151c6976c4380c00d4-removebg-preview.png" alt="" />
            <img src="f5b9918f76b778e799b6aa54c270061e-removebg-preview.png" alt="" />
            <img src="fc3ad1ebec1c8c453beda1fdd011f79a-removebg-preview.png" alt="" />
            <img src="0181d4bdd9c2c87c856ea5b97e32fc63-removebg-preview.png" alt="" />
            <img src="5d1cc864ae7eebae63a1c5738b446e3d-removebg-preview.png" alt="" />
    </div> */}
            </section>

            <section id="about" className="about">
                <div className="trim">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#000"
                            d="M0,96L80,80C160,64,320,32,480,48C640,64,800,128,960,144C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                        </path>
                    </svg>
                </div>

                <div className="image">
                    {/* <!-- Snapchat-1160607638.jpg --> */}
                    <img src="Snapchat-1160607638.jpg" alt="" />
                    <div></div>
                </div>
                <div className="txt-about">
                    <h1>
                        About Me
                    </h1>

                    <p>
                        I am a young and passionate junior front-end web developer
                        eager to kickstart my career in the world of web development.
                        With a solid grasp of HTML, CSS and Javascript, I enjoy crafting engaging and visually pleasing websites. Collaborating with experiences. I am dedicated to continuous learning and growth, embracing challenges as oppurtunities to expand my skill set and make meaningful contributions to the field of front-end development.
                    </p>

                </div>


            </section>

            <section id="works" className="my-works">
                <h1>MY WORKS</h1>

               
                   <section className="work-table">
                   <Items></Items>

                   </section>
                
            </section>


            <section id="contact" className="contact">
                <div className="left">

                    <h2>Contact</h2>
                    <hr />
                    <p>{/* className={label ? 'label to-top' : 'label'}  */}
                        Feel free to contact me anytime. I will get back to you as soon as i can
                    </p>
                    

                    <ContactUs></ContactUs>
                    {/* onClick={droplabel} */}
                    {/* */}
                    
                    {/* <a href="mailto:kentravis37@gmail"> */}

                        
                    {/* </a> */}


                </div>
                <div className="right">

                    <h3>
                        Info
                    </h3>

                    <ul>
                        <a href="mailto:kentravis37@gmail">
                
                            <span id="email" className="material-symbols-outlined">
                                stacked_email
                            </span>
                            <li id="text">kentravis37@gmail.com</li>
                            </a>
                            <a href="tel:+2347039444495">
                            <span className="material-symbols-outlined">
                                phone_in_talk
                            </span>
                            <li>+234 703 9444 95</li>
                        </a>
                        <Link to='./'>
                            <span className="material-symbols-outlined">
                                timelapse
                            </span>
                            <li>09:00am - 07:00pm</li>
                        </Link>

                    </ul>

                    <div className="social-handles">
                        <Link to="https://github.com/Travisken">
                            <span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>

                            </span>
                        </Link>
                        <Link to="https://twitter.com/KenTrav81649556">

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/kensuomo-travis-121a20274/">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                        </span>
                        </Link>
                            <Link to="http://wa.link/rdk2xd">

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                        </span>
                            </Link>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Body
