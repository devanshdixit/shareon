import '../styles/Section6.css'
const Section6 = () => {
    return <section className="sectionLayout">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section6-1.PNG`} alt="" />
                    <p className="section6-text1">
                        The Sustainable Development
                        Goals came into being in 2015 and
                        was adopted by all United Nation
                        Member states as an universal
                        call to action to end poverty,
                        protect the planet and help build
                        peace and prosperity for all by
                        2030.
                    </p>
                </div>
                <div className="col-md-4">
                    <p className="section6-text2"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section6-2.PNG`} alt="" /> Why are SDGs important?</p>
                    <p className="section6-text1">
                        India has played an integral role in the
                        development of the SDGs. However, it
                        currently ranks 117/193 on the
                        Sustainable Development Goal Index.
                        While the government has put in place
                        various policies and measures to be able
                        to meet its targets, you have an
                        important role to play.
                    </p>
                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section6-1.PNG`} alt="" />
                </div>
            </div>
        </div>
    </section>
}
export default Section6