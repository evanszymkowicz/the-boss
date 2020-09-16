import React from 'react'

export default function Home() {
    return (
        <>
            <section className="home__landing">
                <video className="home__video" width="70%" height="auto" >
                    <source src="/imgs/homepage-video.gif" type="" />
                    Your browser doesn't support the video tag.
                </video>
                <div className="home__video-text">
                    <p className="subtitle">The Boss</p>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
                
            <section className="tour">
                <div className="tour__item">
                    <img src="/imgs/god-forgives-bg.jpg" alt="tour washington, d.c."/>
                    <div className="tour__text">
                        <p>Capital One Arena, Washington, D.C.</p>
                        <p>April 9</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/miami-heat.jpg" alt="tour miami"/>
                    <div className="tour__text">
                        <p>Hard Rock Stadium</p><p>Miami</p>
                        <p>Feburary 12</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/teflon-don-bg.jpg" alt="tour greensboro"/>
                    <div className="tour__text">
                        <p>Greensboro Coliseum Complex, Greensboro</p>
                        <p>April 2</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/mastermind.png" alt="tour canalside"/>
                    <div className="tour__text">
                        <p>Canalside, Buffalo</p>
                        <p>August 07</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/wallpaper-5.jpg" alt="tour dallas"/>
                    <div className="tour__text">
                        <p>Music Hall, Dallas</p>
                        <p>TBA</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/wallpaper-6.jpg" alt="tour LA"/>
                    <div className="tour__text">
                        <p>The Forum</p>
                        <p>August 07</p>
                    </div>
                </div>
            </section>
        </>
    )
}