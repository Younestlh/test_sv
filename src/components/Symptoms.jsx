import React from 'react';
import { Thermometer, HeartPulse, Smile, Zap } from 'lucide-react';
import './Symptoms.css';

const Symptoms = () => {
    const symptoms = [
        {
            icon: <HeartPulse size={40} />,
            title: "Palpitations",
            description: "Le cœur qui s'emballe dès que vous recevez un message."
        },
        {
            icon: <Smile size={40} />,
            title: "Sourire Niais",
            description: "Apparition soudaine et incontrôlée de sourires sans raison apparente."
        },
        {
            icon: <Thermometer size={40} />,
            title: "Fièvre Amoureuse",
            description: "Une chaleur intense et une incapacité à penser à autre chose."
        },
        {
            icon: <Zap size={40} />,
            title: "Énergie Débordante",
            description: "Envie de déplacer des montagnes (ou juste d'aller acheter du pain ensemble)."
        }
    ];

    return (
        <section id="symptoms" className="symptoms">
            <div className="container">
                <div className="section-header">
                    <h2>Symptômes Courants</h2>
                    <p>Avez-vous remarqué ces signes ?</p>
                </div>

                <div className="symptoms-grid">
                    {symptoms.map((item, index) => (
                        <div className="symptom-card" key={index}>
                            <div className="icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Symptoms;
