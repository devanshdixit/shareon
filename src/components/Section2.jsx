import '../styles/Section2.css'
const Section2 = () => {
    return <section className="sectionLayout" style={{ backgroundColor: "#F2F2F2"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section2.PNG`} alt="" />
                </div>
                <div className="col-md-6">
                    <p className="section2-heading">ABOUT US</p>
                    <p className="section2-text">
                        India’s first commission-free fundraising
                        platform by non-profits for non-profits to help
                        India achieve its Sustainable Development Goal
                        (SDG) targets by 2030
                    </p>
                     <p className="section2-text">
                        Built on the principles of trust, innovation,
                        collaboration and community first
                    </p>
                     <p className="section2-text">
                        Set up by a group of non-profits, we crowdfund
                        for projects that address India’s Sustainable
                        SDG Development Goal targets.
                    </p>
                    <button className="section2-button">More About Us</button>
                </div>
            </div>
        </div>
    </section>
}
export default Section2