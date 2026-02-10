import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Symptoms from './components/Symptoms';
import Footer from './components/Footer';

function App() {
    // Smooth scroll behavior for anchor links
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <Hero />
            <Story />
            <Symptoms />
            <Footer />
        </div>
    );
}

export default App;
