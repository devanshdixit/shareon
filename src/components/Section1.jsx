import '../styles/Aboutus.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Section1 = () => {
    return (
        <section className="section">
            <div className="container-fluid">
                <Carousel showStatus={false} infiniteLoop={true} swipeable={true}>
                    <div className="row" style={{marginLeft:"30px"}}>
                        <div className="col container mb-4 pb-4" style={{textAlign:'left',flex:"60%"}}>
                            <h5 className="carousalHeading">Join the fight against covid19</h5>
                            <p className="carousalText">To protect & feed the poor, we are generating funds for Non-profits<br/>
                                engaged in the ground relief work.</p>
                            <button className="carousalButton">Donate Now</button>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row" style={{marginLeft:"30px"}}>
                        <div className="col container mb-4 pb-4" style={{textAlign:'left',flex:"60%"}}>
                            <h5 className="carousalHeading">Join the fight against covid19</h5>
                            <p className="carousalText">To protect & feed the poor, we are generating funds for Non-profits<br/>
                                engaged in the ground relief work.</p>
                            <button className="carousalButton">Donate Now</button>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row" style={{marginLeft:"30px"}}>
                        <div className="col container mb-4 pb-4" style={{textAlign:'left',flex:"60%"}}>
                            <h5 className="carousalHeading">Join the fight against covid19</h5>
                            <p className="carousalText">To protect & feed the poor, we are generating funds for Non-profits<br/>
                                engaged in the ground relief work.</p>
                            <button className="carousalButton">Donate Now</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
export default Section1
