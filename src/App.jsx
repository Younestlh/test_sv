import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import './App.css';

function App() {
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const [yesPressed, setYesPressed] = useState(false);
    const [hearts, setHearts] = useState([]);
    const [noBtnIndex, setNoBtnIndex] = useState(0);

    const phrases = [
        "Non",
        "T'es sûre ?",
        "Vraiment ?",
        "Réflechis bien ...",
        "Dernière chance !",
        "Allez, dis oui !",
        "💔",
        "Impossible",
        "Réfléchis encore !"
    ];

    // Generate floating hearts
    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const left = Math.random() * 100; // Random horizontal position 0-100%
            const duration = 3 + Math.random() * 4; // Random duration 3-7s
            const scale = 0.5 + Math.random(); // Random size

            setHearts(prev => [...prev, { id, left, duration, scale }]);

            // Cleanup old hearts
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== id));
            }, duration * 1000);
        }, 300); // New heart every 300ms

        return () => clearInterval(interval);
    }, []);

    const yesButtonRef = React.useRef(null);

    const handleNoHover = () => {
        setNoBtnIndex(prev => (prev + 1) % phrases.length);

        const yesBtn = yesButtonRef.current;
        if (!yesBtn) return;

        const yesRect = yesBtn.getBoundingClientRect();
        const buttonWidth = 100; // Approximate width of No button
        const buttonHeight = 50; // Approximate height of No button
        const padding = 20;

        // "Invisible Frame" constraints relative to Yes button
        const minX = yesRect.left - 150;
        const maxX = yesRect.right + 150;
        const minY = yesRect.top - 150;
        const maxY = yesRect.bottom + 150;

        let newX, newY;
        let attempts = 0;

        do {
            // Generate random position within the frame
            newX = Math.random() * (maxX - minX) + minX;
            newY = Math.random() * (maxY - minY) + minY;

            // Clamp to viewport
            newX = Math.max(padding, Math.min(window.innerWidth - buttonWidth - padding, newX));
            newY = Math.max(padding, Math.min(window.innerHeight - buttonHeight - padding, newY));

            attempts++;
        } while (
            // Simple collision check with Yes button (if it accidentally overlaps)
            (
                newX < yesRect.right &&
                newX + buttonWidth > yesRect.left &&
                newY < yesRect.bottom &&
                newY + buttonHeight > yesRect.top
            ) && attempts < 10
        );

        setNoButtonStyle({ position: 'fixed', left: `${newX}px`, top: `${newY}px` });
    };

    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleYesClick = () => {
        setLoading(true);
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.random() * 10;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setLoading(false);
                setYesPressed(true);
            }
            setProgress(Math.round(currentProgress));
        }, 200);
    };

    return (
        <div className="valentine-container">
            {/* Dynamic Background Hearts */}
            {hearts.map(h => (
                <div
                    key={h.id}
                    className="floating-heart"
                    style={{
                        left: `${h.left}%`,
                        animationDuration: `${h.duration}s`,
                        transform: `scale(${h.scale})`
                    }}
                >
                    ❤️
                </div>
            ))}

            {loading ? (
                <div className="loading-container">
                    <div className="loading-heart">
                        <Heart size={80} fill="#FF4D6D" color="#FF4D6D" />
                        <div className="sparkles">✨</div>
                    </div>
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="progress-text">{progress}%</div>
                    <div className="loading-text">
                        {progress < 50 ? "Preparing feelings... 💖" : "Magic in process... ✨"}
                    </div>
                </div>
            ) : yesPressed ? (
                <div className="success-message">
                    <h1>Yeeees ! ❤️ Je t'aime !</h1>
                    <div className="kiss-emoji">😘</div>
                </div>
            ) : (
                <div className="content-wrapper">
                    <div className="double-hearts">
                        <Heart className="heart-1" size={80} fill="#FF4D6D" color="#FF4D6D" />
                        <Heart className="heart-2" size={60} fill="#FF8FA3" color="#FF8FA3" />
                    </div>
                    <h1>Veux-tu être ma Valentine ?</h1>
                    <div className="buttons">
                        <button className="btn-yes" onClick={handleYesClick} ref={yesButtonRef}>
                            OUI ! 💖
                        </button>
                        <button
                            className="btn-no"
                            style={noButtonStyle}
                            onMouseEnter={handleNoHover}
                            onClick={handleNoHover} // For mobile tap
                        >
                            {phrases[noBtnIndex]}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
