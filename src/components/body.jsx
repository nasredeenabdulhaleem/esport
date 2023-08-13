// import * from "bootstrap-icons
import community0 from "../images/community0.png"
import community1 from "../images/community1.png"
export default function Body() {
    return (
        <section className="body-section" >
            <div className="left-body">
                <div className="body-text">
                    <p>EsportNG is an organization that hosts and organizes premium tournament
                        across Nigeria. we are in the business of building the best ecosystem of
                        esport in Nigeria and Africa.</p>
                    <br />
                    <p>was founded in 2022 by a professional gamer popularly known as Omen
                        by following his passion and as an avid gamer, he decided to create a
                        sustainable ecosystem for gamers
                    </p>
                    <br />
                    <p>Our vision is to provide employment opportunities and create a platform where amateurs and professionAal gamers can thrive and develop a sustainable career paths</p>
                    <br />
                    <p>In january 2020, organized the biggest LAN event in Nigeria with the prize pool of over $200,000. The event was held at the Landmark Event Centre</p>
                    <br />
                </div>
                <div className="vr">
                    <h2 className="h2-1">Compete in the</h2> 
                    <br /> 
                    <h2 className="h2-2">virtual<span> World</span></h2>
                </div>
            </div>
            <div className="right-body">
                <div className="fact-card">
                    <div className="card"><h5>200+</h5> <h4>Gamers</h4> </div>
                
                    <div className="card"><h5>50+</h5> <h4>Games</h4> </div>
                
                    <div className="card"><h5>30+</h5> <h4>Tournaments</h4> </div>
               
                    <div className="card"><h5>40+</h5> <h4>Streamers</h4> </div>
                </div>
                <div className="community">
                    <div className="community-left">
                    <div className="community-text">
                        <h3>Join Our Community</h3>
                        <br />
                        <p>Have the chance to Participate in our tournament, meet amazing gamers and win amazing prizes</p>
                    </div>
                    <br />
                    <div className="social-links">
                        <ul>
                        <li><a href="#" className="social-link"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#" className="social-link"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#" className="social-link"><i class="bi bi-discord"></i></a></li>
                        <li><a href="#" className="social-link"><i class="bi bi-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                    </div>
                    <div className="community-right">
                        <img className="community0" src={community0} alt="coach image" />
                        <img className="community1" src={community1} alt="player image" />
                    </div>
                </div>
                <div className="events">
                <div className="event-card0">
                    <h3 className="event-card-text">CODM</h3>
                </div>
                <div className="event-card1">
                <h3 className="event-card-text">Apex</h3>
                </div>
                <div className="event-card2">
                <h3 className="event-card-text">PUBG</h3>
                </div>
                <div className="event-card3">
                <h3 className="event-card-text">FORTNITE</h3>
                </div>
                </div>
            </div>
        </section>
    )
}