import React from 'react'

export default function News() {
    return (
        <>
            <section className="news">
                <div className="news__item">
                    <h2>Win Free Tickets</h2>
                    <img src="/imgs/miami-heat.jpg" alt="Rick Ross Tickets" />
                </div>
                <div className="news__item">
                    <h2>See The Boss This Summer</h2>
                    <img src="/imgs/echelon4.png" alt="rick ross in concert" />
                    <p className="mb">Get your tickets before they run out!</p>
                    <a href="/" className="btn">tickets</a>
                </div>
                <div className="news__item">
                    <img src="/imgs/maybach5.jpg" alt="thirty seconds to mars concert" />
                    <h2>We love concerts</h2>
                    <p>because we want to be with you guys! </p>
                    <p>You're the best fans in the world!</p>
                </div>
                <div className="news__item">
                    <h2>Let's not forget we live in an amazing country!</h2>
                    <img src="/imgs/maybach1.jpg" alt="Rick Ross in 2020" />
                </div>
                <div className="news__item">
                    <img src="/imgs/maybach6.jpg" alt="Rick Ross New Release" />
                    <p className="mb">Have you check out our new single yet?</p>
                    <a href="/shop" className="btn">Get your copy</a>
                </div>
                <div className="news__item">
                    <img src="/imgs/maybach2.jpg" alt="Live in Concert" />
                    <h2>Thank you all echelon </h2>
                    <p>for making the concert last night so amazing!</p>
                </div>
                <div className="news__item">
                    <img src="/imgs/maybach3.jpg" alt="rickie rose" />
                    <p>New Release:</p>
                </div>
                <div className="news__item">
                    <iframe title="Season Ticket Holder" src="https://open.spotify.com/track/7APQE45T3fsAPbfFuEtoQE?si=ZALYERu6SJSlaUifoh7COw" width="260" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                </div>
                <div className="news__item ">
                    <img src="/imgs/trillacover.jpeg" alt="featured of the week" />
                    <p>Trilla is the second studio album by American rapper Rick Ross.</p>
                </div>


                <div className="news__item ">
                    <p>The Word:<br />
                    
                    I look at the game and the business and all different aspects, it's a lot of great lyricists on the corner that will never properly understand the business and know how to market themselves and get in a position where they can gain capital. I look at all the strategies people use and what made them successful. What made Birdman just as relevant today after selling 50 million records? That intrigues me. To see the class of Jay-Z, his accomplishments and see how he sits backs and accurately makes his moves.[                    <img  src="/imgs/echelon9.jpg" alt="city of angels" />
                     <img src="/imgs/mastermindcover.png" alt="mastermind" />
                    <p className="mb">On August 7, 2020, Ross released the single "Pinned to the Cross", featuring Finn Matthews, following his Verzuz battle with 2 Chainz</p>
                    <a href="https://www.youtube.com/watch?v=a35rNEBNiO4&ab_channel=RickRossVEVO" className="btn">Check out the video</a></p>
                </div>
                <div className="news__item news__video">
                    <iframe title="" width="100%" height="100%" src="https://www.youtube.com/watch?v=a35rNEBNiO4&ab_channel=RickRossVEVO" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                
            </section>
        </>
    )
}