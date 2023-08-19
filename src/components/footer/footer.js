import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer-section space">
            <div className="footer-box">

                <div className="footer-link-box">
                    <h2 className="footer-heading">Richtlinien</h2>
                    <ul>
                        <li><Link to="/impressum">Impressum</Link></li>
                        <li><Link to="/nutzungsbedingungen">Bedingungen & Konditionen</Link></li>
                    </ul>
                </div>

                <div className="footer-link-box">
                    <h2 className="footer-heading">Services</h2>
                    <ul>
                        <li><a href="#webdesign">Web Design</a></li>
                        <li><a href="#management">Management</a></li>
                        <li><a href="#videoediting">Video Editing</a></li>
                    </ul>
                </div>

                <div className="footer-link-box">
                    <h2 className="footer-heading">Social Media</h2>
                    <ul>
                        <li><a href="#/">Instagram</a></li>
                        <li><a href="#/">TikTok</a></li>
                        <li><a href="#/">YouTube</a></li>
                        <li><a href="#/">Twitter</a></li>
                        <li><a href="#/">Discord</a></li>
                    </ul>
                </div>

                <div className="footer-link-box">
                    <h2 className="footer-heading">Kontakt</h2>
                    <ul>
                        <li><a href="#/">+4917640177475</a></li>
                        <li><a href="#/">info@knightmedia.shop</a></li>
                        <li><a href="#/">Termin vereinbaren</a></li>
                    </ul>
                </div>

            </div>
            <p className="copyright">Knightmedia © 2022</p>
        </div>
    )
}