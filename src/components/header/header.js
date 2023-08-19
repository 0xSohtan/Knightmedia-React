import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <div className="nav-section">
            <Link to="/">Knightmedia</Link>
            <ul className="nav-links">
                <li className="nav-link-item mobile"><a href="/#aboutme">Über mich</a></li>
                <li className="nav-link-item mobile"><a href="/#services">Services</a></li>
                <li className="nav-link-item mobile"><a href="#faq">FAQ</a></li>
                <li className="nav-link-item"><a href="#/" className="button-blue buttons">Termin vereinbaren</a></li>
            </ul>
        </div>
    )
}