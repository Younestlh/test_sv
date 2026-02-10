import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Heart className="logo-icon" fill="currentColor" />
                    <span>Virus d'Amour</span>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#hero" onClick={() => setIsMenuOpen(false)}>Accueil</a>
                    <a href="#story" onClick={() => setIsMenuOpen(false)}>L'Histoire</a>
                    <a href="#symptoms" onClick={() => setIsMenuOpen(false)}>Symptômes</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="cta-link">Me Contacter</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
