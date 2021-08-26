import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Section4 = () => {
    const indicatorStyles = {
        background: 'grey',
        width: 8,
        height: 8,
        display: 'inline-block',
        margin: '0 8px',
    };
    return <section className="sectionLayout" style={{ backgroundColor: "#E8E8E8", color: "black" }}>
        <div className="container">
            <Carousel showStatus={false} infiniteLoop={true} swipeable={true}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: 'black' }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }} style={{ marginTop: "20px" }}>
                <div className="row" style={{ marginLeft: "30px", marginBottom: "50px", marginTop: '20px' }}>
                    <div className="col-md-6"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section4-1.PNG`} alt="" /></div>
                    <div className="col-md-6"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section4-2.PNG`} alt="" /></div>
                </div>
                <div className="row" style={{ marginLeft: "30px", marginBottom: "50px", marginTop: '20px' }}>
                    <div className="col-md-6"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section4-1.PNG`} alt="" /></div>
                    <div className="col-md-6"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section4-2.PNG`} alt="" /></div>
                </div>
                <div className="row" style={{ marginLeft: "30px", marginBottom: "50px", marginTop: '20px' }}>
                    <div className="col-md-6"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section4-1.PNG`} alt="" /></div>
                    <div className="col-md-6"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/section4-2.PNG`} alt="" /></div>
                </div>
            </Carousel>
        </div>
    </section>
}
export default Section4