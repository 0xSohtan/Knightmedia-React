import React, { useState } from 'react';
import './faq.css';

export default function Faq() {

    const [showAnswers, setShowAnswers] = useState(Array(5).fill(false));

    const toggleAnswer = (index) => {
        const updatedAnswers = [...showAnswers];
        updatedAnswers[index] = !updatedAnswers[index];
        setShowAnswers(updatedAnswers);
    };

    const questions = [
        'Was ist Social Media Marketing?',
        'Warum sollte mein Unternehmen Social Media Marketing nutzen?',
        'Was kann Ihre Agentur für mein Unternehmen tun?',
        'Wie wählt Ihre Agentur die richtigen Social Media Plattformen für mein Unternehmen aus?',
        'Kann Ihre Agentur bei der Content-Erstellung helfen?'
    ]

    const answers = [
        'Social Media Marketing bezieht sich auf den Einsatz sozialer Medienplattformen wie Facebook, Instagram, Twitter, TikTok usw., um Marketingziele zu erreichen. Dies kann die Steigerung der Markenbekanntheit, das Generieren von Leads, die Kundenbindung und vieles mehr umfassen.',
        'Social Media bietet eine riesige Reichweite und ermöglicht es Ihnen, Ihre Zielgruppe effektiv anzusprechen. Durch Social Media Marketing können Sie Ihre Marke bekannter machen, mit Kunden interagieren, Produkte oder Dienstleistungen bewerben und wertvolles Feedback erhalten.',
        'Unsere Social Media Marketing Agentur bietet eine breite Palette von Dienstleistungen, darunter die Entwicklung einer maßgeschneiderten Social Media Strategie, Erstellung von ansprechendem Content, Community Management, Social Media Werbung, Analyse und Berichterstattung.',
        'Wir analysieren zunächst Ihr Unternehmen, Ihre Ziele und Ihre Zielgruppe. Basierend auf diesen Informationen empfehlen wir Ihnen die geeigneten Plattformen, auf denen Ihre Zielgruppe aktiv ist und die am besten zu Ihrer Markenidentität passen.',
        'Ja, definitiv! Unsere erfahrenen Content-Experten können ansprechende Texte, Bilder, Videos und Grafiken erstellen, die Ihre Zielgruppe ansprechen und Ihre Botschaft effektiv vermitteln.'
    ]


    return (
        <div className="faq-section space" id="faq">
            <h2 className="content-heading">
                Häufig gestellte <strong style={{ color: "blue" }}>Fragen</strong>
            </h2>
            <div className="faq-wrapper">
                {questions.map((question, index) => (
                    <div className='faq' key={index}>
                        <div key={index}>
                            <div className="question" onClick={() => toggleAnswer(index)}>
                                {question}
                            </div>
                            {showAnswers[index] && (
                                <div className="answer show">{answers[index]}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}