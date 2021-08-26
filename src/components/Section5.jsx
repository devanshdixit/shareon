import '../styles/Section3.css'
const Section5 = () => {
    return <section className="section3-layout" style={{ backgroundColor: "#2D2B5D" }}>
        <div className="container">
            <div className="row">
                <div className="col-md-2" style={{textAlign:"center "}}>
                    <img src={`${process.env.PUBLIC_URL}/images/section5.PNG`} alt="" />
                </div>
                <div className="col-md-10">
                    <p className="section5-text">
                        The funds raised through these campaigns will approximately benefit
                        5,00,000 people, belonging to the vulnerable and marginalized
                        sections of society, particularly small and marginal farmers, women
                        and marginalized communities.
                    </p>
                </div>
            </div>
        </div>
    </section>
}
export default Section5