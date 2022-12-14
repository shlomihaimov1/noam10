import React, { useState, useEffect } from 'react';

// CSS
// import './css/homeold.css';
// import './css/list.css';

export default function Home() {

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    // Run function only after every thing is rendered
    useEffect(() => {
        // For phone make animation on load
        document.body.onload = function() {
            // Apply fades - For content
            document.getElementById('step1-content').classList.add('from-right-fade-phone');
            document.getElementById('step3-content').classList.add('from-right-fade-phone');

            document.getElementById('step2-content').classList.add('from-left-fade-phone');
            document.getElementById('step4-content').classList.add('from-left-fade-phone');
            
            // For images
            document.getElementById('step1-image').classList.add('fade-in-phone');
            document.getElementById('step3-image').classList.add('fade-in-phone');

            document.getElementById('step2-image').classList.add('fade-in-phone');
            document.getElementById('step4-image').classList.add('fade-in-phone');
        };
    }, []);

    function sendEmail(e) {
        e.preventDefault();

        console.log('submit');
    }

    function letsGetStarted() {
        // Auto scroll to the instractions
        document.getElementById('middle-section').scrollIntoView({behavior: "smooth"})

        // Apply fades - For content
        document.getElementById('step1-content').classList.add('from-right-fade');
        document.getElementById('step3-content').classList.add('from-right-fade');

        document.getElementById('step2-content').classList.add('from-left-fade');
        document.getElementById('step4-content').classList.add('from-left-fade');

        // For images
        document.getElementById('step1-image').classList.add('fade-in');
        document.getElementById('step3-image').classList.add('fade-in');

        document.getElementById('step2-image').classList.add('fade-in');
        document.getElementById('step4-image').classList.add('fade-in');

        // Remove fades after 2 seconds
        setTimeout(removeFades, 2000);

        function removeFades() {
            // For content
            document.getElementById('step1-content').classList.remove('from-right-fade');
            document.getElementById('step3-content').classList.remove('from-right-fade');

            document.getElementById('step2-content').classList.remove('from-left-fade');
            document.getElementById('step4-content').classList.remove('from-left-fade');

            // For images
            document.getElementById('step1-image').classList.remove('fade-in');
            document.getElementById('step3-image').classList.remove('fade-in');

            document.getElementById('step2-image').classList.remove('fade-in');
            document.getElementById('step4-image').classList.remove('fade-in');
        }
    }

    return (
        <div>
            <section id='top-section' className='top-section'>
                
                <div className='main-title'>
                    <h1>
                        <span>Sit</span>
                        <span className='main-h1'>eU</span>
                        <span>p</span>
                    </h1>
                </div>

                <div className='top-section-intro'>
                    <div className='wrapper-image-intro'></div>

                    <div className='intro'>
                        <h1 className='intro-title'>???????? SiteUp</h1>
                        
                        <p>
                            <span>
                                ???????? ???????????? ???????????? ?????????? ???? ???????? ?????????? ????????????! ???? ???????????? ?????????? ?????????? ?????????? ?????? ??????????????     
                            </span>

                            <span className='bold'>
                                &nbsp;?????????????????? ????????! 
                            </span>
                        </p>

                        <br/>
                        
                        <div className='home-button-wrapper'>
                            <button className='home-button' onClick={letsGetStarted}>???????????? ???????? ???????? ??????</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id='middle-section' className='middle-section'>       
                <div className="custom-shape-divider-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" ></path>
                    </svg>
                </div>

                <div id='steps' className='steps'>
                    <div id='step1' className='step'>
                        <div id='step1-content' className='step-content step-right'>
                            <p className='step-title'>???????? ????????????:</p>
                            <p className='step-describtion'>???????? ???????? ?????????? ????????, ???????? ?????????? ?????????? ?????????? ?????? ???????? ???????????? ????????.</p>
                        </div>

                        <div className='dot'></div>

                        <div id='step1-image' className='step-img-wrapper img-left'>
                            <img className='step-img float-object' src='./images/step1.png'></img>
                        </div>
                    </div>
                    <div id='step2' className='step'>
                        <div id='step2-image' className='step-img-wrapper img-right'> 
                            <img className='step-img float-object' src='./images/step2.png'></img>
                        </div>

                        <div className='dot'></div>

                        <div id='step2-content' className='step-content step-left'>
                            <p className='step-title'>???????? ????????:</p>
                            <p className='step-describtion'>?????? ???? ?????? ??????????, ???????? ???????????? ?????? ???? ?????????? ????????.</p>
                        </div>
                    </div>
                    <div id='step3' className='step'>
                        <div id='step3-content' className='step-content step-right'>
                            <p className='step-title'>???????? ????????????:</p>
                            <p className='step-describtion'>???????? ?????????? ?????????????? ???????? ????????.</p>
                        </div>

                        <div className='dot'></div>

                        <div id='step3-image' className='step-img-wrapper img-left'>
                            <img className='step-img float-object' src='./images/step3.png'></img>
                        </div>
                    </div>
                    <div id='step4' className='step'>
                        <div id='step4-image' className='step-img-wrapper img-right'> 
                            <img className='step-img float-object' src='./images/step4.png'></img>
                        </div>

                        <div className='dot'></div>

                        <div id='step4-content' className='step-content step-left'>
                            <p className='step-title'>???????? ????????????:</p>
                            <p className='step-describtion'>?????????? ???? ???????? ?????????? ????????????????.</p>
                        </div>
                    </div>
                </div>

                <div className='contact-us-wrapper'>
                    <h1 className='contact-us-title'>???????????? ??????????:</h1>
                    
                    <form className='contact-us-form' onSubmit={sendEmail} method="post">
                        <div className='contact-us'>
                            <input onChange={(e) => setName(e.target.value) } className='input-contact' type="input" placeholder="????:" name="name" required/>
                            <input onChange={(e) => setPhone(e.target.value) } className='input-contact' type="input" placeholder="??????????:" name="phone" required/>
                            <input onChange={(e) => setEmail(e.target.value) } className='input-contact' type="input" placeholder="????????????:" name="email" required/>
                        </div>

                        <div className='subimitation'>   
                            <button className='submit-contact' type="submit">??????\?? ????????</button>
                        </div>
                    </form>
                </div>
            </section>

            <div id='third-section-wrapper' className='third-section'>
                <section id='third-section' className='third-section'>
                    <div className="custom-shape-divider-bottom-1666982974">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className='get-started-wrapper'>
                        <a href='/questionnaire'>
                            <button className='get-started-button'>?????? ??????????</button>
                        </a>
                    </div>


                    <div className="custom-shape-divider-top">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" ></path>
                        </svg>
                    </div>


                    {/* <div className='contact-us-wrapper'>
                        <h1 className='contact-us-title'>???????????? ??????????:</h1>
                        
                        <form className='contact-us-form' onSubmit={sendEmail} method="post">
                            <div className='contact-us'>
                                <input onChange={(e) => setName(e.target.value) } className='input-contact' type="input" placeholder="????:" name="name" required/>
                                <input onChange={(e) => setPhone(e.target.value) } className='input-contact' type="input" placeholder="??????????:" name="phone" required/>
                                <input onChange={(e) => setEmail(e.target.value) } className='input-contact' type="input" placeholder="????????????:" name="email" required/>
                            </div>

                            <div className='subimitation'>   
                                <button className='submit-contact' type="submit">??????\?? ????????</button>
                            </div>
                        </form>
                    </div> */}

                    <div className="why-us leaderboard"> 
                        <header>
                            <h1 className="leaderboard__title">
                                <span className="leaderboard__title--top">?????? ???????????</span>
                                <span className="leaderboard__title--bottom">SiteUp</span>
                            </h1>
                        </header>

                        <main className="leaderboard__profiles">
                            <article className="leaderboard__profile">
                                <span className="leaderboard__name">?????????? ?????????????????????? ?????? ?????????? ?????????????? ????????</span>
                                
                            </article>
                            <article className="leaderboard__profile">
                                <span className="leaderboard__name">?????????? ?????????????????? ???? ???????? ????????</span>
                        
                            </article>
                            <article className="leaderboard__profile">
                                <span className="leaderboard__name">?????????????? ????????????</span>
                            
                            </article>
                            <article className="leaderboard__profile">
                                <span className="leaderboard__name">?????????????? ?????????? ?????????? ????????</span>
                                
                            </article>
                            <article className="leaderboard__profile">
                                <span className="leaderboard__name">???????? ????????, ?????????? ???????????? ????????</span>
                            
                            </article>
                        </main>
                    </div>

                    
                </section>

                <a href='https://wa.me/972525091144' target="_blank">
                    <div className="css-gwc7y7" tabIndex="0" role="button" aria-label="Live Customize">
                        <div>
                            <button className="css-gwc7y6 css-1do9gth" tabIndex="0" type="button">
                                <img src='./icons/whatsapp.png' height="20" width="20"></img>
                            </button>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </div>
                </a>

                <div className="custom-shape-divider-bottom-1666982974">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}