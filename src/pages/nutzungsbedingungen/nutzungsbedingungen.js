import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Faq from '../../components/faq/faq'
import './nutzungsbedingungen.css';

export default function Nutzungsbedingungen() {
    return (
        <HelmetProvider>
            <div className="main-content">
                <Helmet>
                    <title>Bedingungen & Konditionen</title>
                </Helmet>
                <div className="text-content space">
                    <h2 className="content-heading">
                        Bedingungen & Konditionen
                    </h2>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            1. Allgemeine Informationen
                        </h2>
                        <h3 className="text-content-paragraph">Willkommen bei der Social Media Marketing Agentur (SMMA). Die
                            folgenden Bedingungen und Konditionen
                            regeln Ihre Nutzung unserer Dienstleistungen. Durch die Inanspruchnahme unserer Leistungen
                            erklären
                            Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie diese Bedingungen sorgfältig
                            durch.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            2. Leistungen der SMMA
                        </h2>
                        <h3 className="text-content-paragraph">Die SMMA bietet umfassende Social Media Marketing
                            Dienstleistungen an, darunter Strategieentwicklung, Content-Erstellung, Community Management,
                            Social Media Werbung, Analyse und Berichterstattung. Die spezifischen Leistungen werden in einem
                            individuellen Vertragsdokument festgehalten.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            3. Zusammenarbeit und Kommunikation
                        </h2>
                        <h3 className="text-content-paragraph">Die Zusammenarbeit erfolgt auf der Grundlage offener
                            Kommunikation und vertrauensvoller Zusammenarbeit. Der Kunde wird bei Bedarf einen
                            Ansprechpartner für die Agentur benennen, um den reibungslosen Informationsaustausch zu
                            gewährleisten.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            4. Vertraulichkeit
                        </h2>
                        <h3 className="text-content-paragraph">Beide Parteien verpflichten sich, alle vertraulichen
                            Informationen, die während der Zusammenarbeit offenbart werden, streng vertraulich zu behandeln
                            und diese nicht an Dritte weiterzugeben.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            5. Zahlungsbedingungen
                        </h2>
                        <h3 className="text-content-paragraph">Die Zahlungsbedingungen werden in einem individuellen
                            Vertragsdokument festgelegt. Der Kunde verpflichtet sich, die vereinbarten Zahlungen
                            fristgerecht zu leisten.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            6. Haftungsausschluss
                        </h2>
                        <h3 className="text-content-paragraph">Die SMMA übernimmt keine Haftung für Schäden oder Verluste, die
                            durch die Nutzung der Social Media Plattformen oder anderer Dienstleistungen entstehen. Die
                            Verantwortung für die Inhalte und die Einhaltung rechtlicher Bestimmungen liegt beim Kunden.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            7. Vertragslaufzeit und Kündigung
                        </h2>
                        <h3 className="text-content-paragraph">Die Vertragslaufzeit wird in einem individuellen Vertragsdokument
                            festgehalten. Beide Parteien haben das Recht, den Vertrag aus wichtigem Grund vorzeitig zu
                            kündigen.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            8. Geistiges Eigentum
                        </h2>
                        <h3 className="text-content-paragraph">Alle Inhalte, die von der SMMA erstellt werden, sind geistiges
                            Eigentum der Agentur, sofern nicht anders vereinbart. Die Nutzung oder Verbreitung von Inhalten
                            bedarf der ausdrücklichen Zustimmung der SMMA.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            9. Änderungen der Bedingungen
                        </h2>
                        <h3 className="text-content-paragraph">Die SMMA behält sich das Recht vor, diese Bedingungen und
                            Konditionen jederzeit zu ändern. Änderungen werden auf unserer Website veröffentlicht und sind
                            ab dem Zeitpunkt der Veröffentlichung gültig.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h2 className="text-content-heading">
                            10. Anwendbares Recht und Gerichtsstand
                        </h2>
                        <h3 className="text-content-paragraph">Diese Bedingungen unterliegen dem Recht des Landes, in dem die
                            SMMA ihren Hauptsitz hat. Im Falle von Streitigkeiten wird der ausschließliche Gerichtsstand am
                            Sitz der SMMA festgelegt.
                        </h3>
                    </div>
                    <div className="text-item">
                        <h3 className="text-content-paragraph">Durch die Nutzung unserer Dienstleistungen akzeptieren Sie diese
                            Bedingungen und Konditionen vollständig. Bei Fragen oder Unklarheiten stehen wir Ihnen gerne zur
                            Verfügung.
                        </h3>
                    </div>
                </div>
                <Faq />
            </div>
        </HelmetProvider>
    )
}