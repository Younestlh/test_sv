import React from 'react';
import './Story.css';

const Story = () => {
    return (
        <section id="story" className="story">
            <div className="container">
                <div className="section-header">
                    <h2>L'Histoire de l'Infection</h2>
                    <p>Comment tout a commencé...</p>
                </div>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Jour 0</h3>
                            <p>Le premier regard. Une exposition directe au virus de l'amour sans aucune protection.</p>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">Le Début</div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Incubation</h3>
                            <p>Les premiers symptômes apparaissent : sourires niais, pensées obsédantes, et papillons dans le ventre.</p>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">Semaine 1</div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Contagion Totale</h3>
                            <p>Le diagnostic est confirmé. C'est incurable. Nous sommes deux maintenant.</p>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">Aujourd'hui</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
