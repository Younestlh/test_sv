import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-message">
                    <h2>Prêt à succomber ?</h2>
                    <p>Laissez le virus se propager. Il n'y a pas de retour en arrière.</p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Virus d'Amour. Fait avec ❤️ pour les amoureux.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
