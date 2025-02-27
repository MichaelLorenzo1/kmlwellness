import './NavControl.css';
import { Link } from "react-router-dom";

function NavControl() {
    return(
        <div className="nav_menu">
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to="/">Home</Link></li>
                    <li className="navigation__item"> <Link to="/coaching">Health Coaching</Link></li>
                    <li className="navigation__item"> <Link to="/classes">Yoga Classes</Link></li>
                    {/* <li className="navigation__item"> <Link to="/online">Online Classes</Link></li>
                    <li className="navigation__item"> <Link to="/gallery">Gallery</Link></li> */}
                    <li className="navigation__item"> <Link to="/about">About</Link></li>
                    <li className="navigation__item"> <Link to="/resources">Resources</Link></li>
                    <li className="navigation__item"> <Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavControl;
