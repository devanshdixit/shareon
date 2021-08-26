import '../styles/Section3.css'
const Section3 = () => {
    return <section className="section3-layout" style={{ backgroundColor: "#2D2B5D" }}>
        <div className="container">
            <div className="row">
                <div className="col-md-4" style={{ textAlign: "center" }}>
                    <img src={`${process.env.PUBLIC_URL}/images/section3-1.PNG`} alt="" />
                    <div className="section3-heading">HELP US DONATE</div>
                    <div className="section3-text">Donate Now</div>
                </div>
                <div className="col-md-4" style={{ textAlign: "center" }}>
                    <img src={`${process.env.PUBLIC_URL}/images/section3-2.PNG`} alt="" />
                    <div className="section3-heading">COLLECT FUND</div>
                    <div className="section3-text">Fundraising</div>
                </div>
                <div className="col-md-4" style={{ textAlign: "center" }}>
                    <img src={`${process.env.PUBLIC_URL}/images/section3-3.PNG`} alt="" />
                    <div className="section3-heading">JOIN US</div>
                    <div className="section3-text">Become a Volunteer</div>
                </div>
            </div>
        </div>
    </section>
}
export default Section3