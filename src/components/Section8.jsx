import '../styles/Section8.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const Section8 = () => {
    return (
        <section className="section8-layout" style={{ backgroundColor: "#F7F6F5" }}>
            <div className="container">
                <div className=""><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-1.PNG`} alt="" /></div>
                <div className="row mt-4 pt-4">
                    <div className="col-md-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-heading">Individuals <hr className="rounded" /></li>
                            <li className="list-group-item list-subheading">Donate Now</li>
                            <li className="list-group-item list-subheading">Campaign of the Month</li>
                            <li className="list-group-item list-subheading">Become a Volunteer</li>
                            <li className="list-group-item list-subheading">Learn About SDGs</li>
                        </ul>
                        <ul className="list-group list-group-flush mt-4">
                            <li className="list-heading">Social Media<hr className="rounded" /></li>
                        </ul>
                        <ul class="list-group list-group-horizontal list-group-flush ">
                            <li class="list-group-item border-0" style={{ backgroundColor: "transparent" }}>
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-2.PNG`} width="100px" height="100px" alt="" />
                            </li>
                            <li class="list-group-item border-0" style={{ backgroundColor: "transparent" }}>
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-3.PNG`} width="90px" height="90px" alt="" />
                            </li>
                            <li class="list-group-item border-0" style={{ backgroundColor: "transparent" }}>
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-4.PNG`} width="90px" height="90px" alt="" />
                            </li>
                            <li class="list-group-item border-0" style={{ backgroundColor: "transparent" }}>
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-5.PNG`} width="100px" height="100px" alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 ml-3 mr-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-heading">Civil Society Organizations<hr className="rounded" /></li>
                            <li className="list-group-item list-subheading">Start a Fundraiser Campaign</li>
                            <li className="list-group-item list-subheading">Pricing Policy</li>
                        </ul>
                        <ul className="list-group list-group-flush mt-4 pt-4">
                            <li className="list-heading">Newsletter<hr className="rounded" /></li>
                            <li className="list-group-item list-subheading">You will be notafied when something new will appear.</li>
                        </ul>
                        <button className="section8-button btn block mt-3"><span style={{ marginRight: '20px' }}>Email Address*</span> <FontAwesomeIcon className="" icon={faAngleRight} /></button>
                    </div>
                    <div className="col-md-5 ml-3 mr-3">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-heading">Corporates<hr className="rounded" /></li>
                                    <li className="list-group-item list-subheading">Connect with us</li>
                                    <li className="list-group-item list-subheading">Our Services</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-heading">About Us<hr className="rounded" /></li>
                                    <li className="list-group-item list-subheading">Overview</li>
                                    <li className="list-group-item list-subheading">Our Team</li>
                                    <li className="list-group-item list-subheading">FAQ's</li>
                                    <li className="list-group-item list-subheading">Contact US</li>
                                </ul>
                            </div>
                        </div>
                        <li className="list-heading">Co-funded by<hr className="rounded" /></li>
                        <div className="row">
                            <div className="col">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-6.PNG`} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-7.PNG`} alt="" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-8.PNG`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4 pt-4">
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section8-9.PNG`} alt="" />
                <div className="text-black">Terms and Conditions | Privacy Policy</div>
                </div>
            </div>
        </section>
    )
}
export default Section8