import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/Header.css'
const Header = () => {

    return <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.PNG`} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{ justifyContent: "space-between" }}>
                    <ul className="list-group list-group-horizontal" style={{ marginLeft: "40px" }}>
                        <li className="list-group-item headerlinks border-0">CAUSES</li>
                        <li className="list-group-item headerlinks border-0">WHO WE ARE</li>
                        <li className="list-group-item headerlinks border-0">GET INVOLVED</li>
                        <li className="list-group-item headerlinks border-0">CONTACT</li>
                        <li className="list-group-item headerlinks button"><button className="buttonstyle">Start a Fundraiser</button></li>
                    </ul>
                    <ul className="list-group list-group-horizontal" style={{ marginLeft: "40px" }}>
                        <li className="list-group-item headerlinks border-0"><FontAwesomeIcon icon={faSearch} /></li>
                        <li className="list-group-item headerlinks border-0">SIGN IN <FontAwesomeIcon className="ml-2" icon={faUser} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default Header