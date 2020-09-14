import React from 'react'

export default function Home() {
    return (
        <>
            <section>
                <h1 className="home__title">Rick Ross</h1>
                <video 
                className="home__video"
                width="70%" height="auto" controls muted loop autoPlay playsInline >
                    <source src="/imgs/rickross-musicvideo.gif" type="gif" />
                    Your browser doesn't support the video tag.
                </video>
                <div className="home__video-text">
                    <p >Join us this spring.</p>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
                
            <section className="tour">
                <div className="tour__item">
                    <img src="/imgs/washington.jpg" alt="tour washington, d.c."/>
                    <div className="tour__text">
                        <p>Capital One Arena, Washington, D.C.</p>
                        <p>April 9</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/miami.jpg" alt="tour miami"/>
                    <div className="tour__text">
                        <p>Hard Rock Stadium, Miami</p>
                        <p>Feburary 12</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/greensboro.jpg" alt="tour greensboro"/>
                    <div className="tour__text">
                        <p>Greensboro Coliseum Complex, Greensboro</p>
                        <p>April 2</p>
                    </div>
                </div>
                <div className="tour__item">
                    <img src="/imgs/canalside.jpg" alt="tour canalside"/>
                    <div className="tour__text">
                        <p>Canalside, Buffalo</p>
                        <p>August 07</p>
                    </div>
                </div>
                
                    <img src="/imgs/rome.jpg" alt="tour rome"/>
                    <div className="tour__text">
                        <p>Na Cosetta Estiva, Rome</p>
                        <p>July 28</p>
                    </div>
                </div>
            </section>
        </>
    )
}