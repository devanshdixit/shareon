import '../styles/Section7.css'
const Section7 = () => {
    return <section className="bgimage sectionLayout">
        <div className="container">
            <div className="section7-title">Partner with Us</div>
            <div className="row text-center">
                <div className="col-md-4 section7-card m-3">
                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section7-2.PNG`} alt="" />
                    <p className="section7-heading">Individual</p>
                    <p className="section7-text">
                        As an individual you can choose
                        to support any campaign that
                        appeals to you for support.
                        ShareOn ensures that all
                        highlighted organizations are
                        vetted and credible and have
                    </p>
                    <a href="/" style={{ fontStyle: "italic", color: "#2D2B5D" }}>Read More</a>
                </div>
                <div className="col-md-4 section7-card m-3">
                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section7-2.PNG`} alt="" />
                    <p className="section7-heading">Corporates, Business, and Family Foundation</p>
                    <p className="section7-text">
                        As an company or a business, it is
                        often dicult to determine a
                        cause that you might waantto
                        support as a part of your CSR or
                        Cause marketing eorts.
                    </p>
                    <a href="/" style={{ fontStyle: "italic", color: "#2D2B5D" }}>Read More</a>
                </div>
                <div className="col-md-4 section7-card m-3">
                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section7-3.PNG`} alt="" />
                    <p className="section7-heading">Civil Society Organizations (CSO)</p>
                    <p className="section7-text">
                        As an company or a business, it is
                        often dicult to determine a
                        cause that you might waantto
                        support as a part of your CSR or
                        Cause marketing eorts.
                    </p>
                    <a href="/" style={{ fontStyle: "italic", color: "#2D2B5D" }}>Read More</a>
                </div>
            </div>
        </div>
    </section>
}
export default Section7