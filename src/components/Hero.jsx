import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="badge">Attention : Contagieux</span>
                    <h1 className="title">Virus d'Amour</h1>
                    <p className="subtitle">
                        Il n'y a pas d'antidote, et franchement... qui en voudrait ?
                        Laissez-vous infecter par la passion.
                    </p>
                    <div className="hero-buttons">
                        <a href="#story" className="btn btn-primary">Se faire contaminer</a>
                        <a href="#symptoms" className="btn btn-outline">Voir les symptômes</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="heart-shape"></div>
                    <div className="floating-hearts">
                        <span>❤️</span><span>💖</span><span>💕</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
