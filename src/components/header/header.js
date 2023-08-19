import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <div className="nav-section">
            <Link to="/">Knightmedia</Link>
            <ul className="nav-links">
                <li className="nav-link-item mobile"><a href="#/">Über mich</a></li>
                <li className="nav-link-item mobile"><a href="#/">Services</a></li>
                <li className="nav-link-item mobile"><a href="#/">FAQ</a></li>
                <li className="nav-link-item"><a href="#/" className="button-blue buttons">Termin vereinbaren</a></li>
            </ul>
        </div>
    )
}