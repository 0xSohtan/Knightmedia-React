import Faq from '../../components/faq/faq';
import './home.css';

export default function Homepage() {

    const icons = [
        'Shopify',
        'Webflow',
        'TikTok',
        'Meta',
        'Html',
        'Css',
        'Javascript'
    ]

    const gridItems = [
        {
            name: 'Rückmeldung',
            heading: 'Rückmeldung am selben Tag',
            paragraph: 'Ich werde mich persönlich bei Ihnen melden, damit wir uns austauschen können.'
        },
        {
            name: 'Support',
            heading: 'Professionelle Einschätzung und Beratung',
            paragraph: 'Gerne nehmen wir uns die Zeit, um Dich und Dein Unternehmen gründlich kennenzulernen.'
        },
        {
            name: 'Festpreis',
            heading: 'Garantierte Festpreise auf jedes Budget abgestimmt',
            paragraph: 'Dank unserer Agentur Struktur halten wir unsere Gemeinkosten niedrig und liefern dennoch eine hohe Arbeitsqualität.'
        },
        {
            name: 'Shopentwicklung',
            heading: 'Garantierte Festpreise auf jedes Budget abgestimmt',
            paragraph: 'Die Entwicklung und Optimierung des Shops steigert die Conversions und verbessert die Nutzererfahrung.'
        },
        {
            name: 'Social Media',
            heading: 'Garantierte Festpreise auf jedes Budget abgestimmt',
            paragraph: 'Leistungsorientiertes Marketing maximiert den Erfolg einer Kampagne durch gezielte Analyse und Optimierung.'
        },
        {
            name: 'Erfolg',
            heading: 'Garantierte Festpreise auf jedes Budget abgestimmt',
            paragraph: 'Eine gezielte Marketingstrategie kann zu einer deutlichen Umsatzsteigerung führen.'
        }
    ]

    return (
        
        <div className="main-content">

            <div className="header-section">
                <div className="header-wrapper">
                    <h1>Verstärken Sie Ihre digitale <strong style={{ color: 'blue' }}>Sichtbarkeit</strong>!</h1>
                    <h2 className="header-description">Erleben Sie den Unterschied mit unserer Online-Marketing-Agentur</h2>
                    <h2 className="header-description">Wir bieten individuelle Lösungen für Ihr Geschäft.<br />Steigern Sie
                        Ihre Sichtbarkeit und Ihren Umsatz jetzt!</h2>
                    <div className="header-buttons-wrapper">
                        <button className="buttons header-button large">Wie wir skalieren</button>
                        <button className="button-blue buttons header-button large">Termin
                            vereinbaren</button>
                    </div>
                </div>
            </div>


            <div className="about-me-section" id="aboutme">
                <img
                    src={require('../../assets/images/Alex.png')}
                    alt={'Alex'}
                />
                <h2 className="about-me-description">
                    Hi, mein Name ist Alexander Knight und ich bin CEO von Knightmedia.
                    <br />
                    Wir haben uns auf die Entwicklung und Umsetzung von Social-Media-Strategien spezialisiert und helfen
                    unseren Kunden dabei,
                    ihr Online-Marketing zu optimieren und ihre Umsätze zu steigern.
                </h2>
                <div className="about-me-infos">
                    <div className="info-box">
                        <h2 className="bold-font padding-bottom">Followers</h2>
                        <h2>20.000+</h2>
                    </div>
                    <div className="info-box">
                        <h2 className="bold-font padding-bottom">Videos</h2>
                        <h2>200+</h2>
                    </div>
                </div>
            </div>

            <div className="content-one space content-column" id="">
                <img
                    src={require('../../assets/images/Erfolg.png')}
                    alt={'Erfolg'}
                    className="content-image-left"
                />
                <div className="content-info-box">
                    <h2 className="content-heading">
                        Erlebte <strong style={{ color: 'blue' }}>Erfahrung</strong> für <br />nachhaltigen <strong
                            style={{ color: 'blue' }}>Erfolg</strong>.
                    </h2>
                    <h2 className="content-description">
                        Wir optimieren Dein Geschäft individuell für mehr Umsatz und bringen es erfolgreich nach vorne.
                        <br />
                        Dein neuer oder bestehender Onlineshop wird durch unsere gezielte und strategische Ausrichtung
                        zu einer effizienten Verkaufsmaschine.
                    </h2>
                </div>
            </div>

            <div className="icons-section space">
                {icons.map((icon, index) =>
                    <img
                        src={require(`../../assets/images/${icon}.png`)}
                        alt={icon}
                        key={index}
                    />
                )}
            </div>

            <div className="content-one space content-reverse" id="webdesign">
                <div className="content-info-box">
                    <h2 className="content-heading">
                        Wir erstellen für <br />ihnen
                        eine <strong style={{ color: 'blue' }}>Webseite</strong>.
                    </h2>
                    <h2 className="content-description">
                        Vom ersten Entwurf bis zur Fertigstellung.
                        Wir berücksichtigen dabei ihre individuellen Wünsche und Bedürfnisse, um eine Webseite zu
                        entwickeln, die perfekt zu ihnen passt.
                        <br />
                        Mit unserer Erfahrung im Webdesign und der Benutzerfreundlichkeit sorgen wir dafür, dass ihre
                        Webseite professionell aussieht und einfach zu navigieren ist.
                    </h2>
                </div>
                <img
                    src={require('../../assets/images/Mac2.png')}
                    alt={'Mac2'}
                    className="content-image-right-1"
                />
            </div>

            <div className="how-we-work-section space" id="services">
                <h2 className="content-heading">
                    Was wir dir <strong style={{ color: 'blue' }}>versprechen</strong>
                </h2>
                <div className="how-we-work-box grid">
                    {gridItems.map((gridItem, index) =>
                        <div className="grid-item" key={index}>
                            <img
                                src={require(`../../assets/images/${gridItem.name}.png`)}
                                alt={gridItem.name}
                                key={index}
                            />
                            <h2 className="work-heading bold-font">{gridItem.heading}</h2>
                            <h2 className="work-paragraph">{gridItem.paragraph}</h2>
                        </div>
                    )}
                </div>
            </div>

            <div className="content-one space content-column" id="management">
                <img
                    src={require('../../assets/images/Management.png')}
                    alt={'Management'}
                    className="content-image-left"
                />
                <div className="content-info-box">
                    <h2 className="content-heading">
                        TikTok und Meta Ads <br /><strong style={{ color: 'blue' }}>Management</strong>.
                    </h2>
                    <h2 className="content-description">
                        Wir empfehlen unseren Kunden, TikTok in ihre Marketingstrategie aufzunehmen,
                        da die Plattform eine hohe Reichweite und ein enormes Potenzial für virales Marketing bietet.
                        <br />
                        Unser Meta Ads Management-Service bietet unseren Kunden eine einfache Möglichkeit, ihre Anzeigen
                        auf verschiedenen Social-Media-Plattformen wie Facebook, Instagram und jetzt auch Meta zu
                        verwalten und zu optimieren.
                    </h2>
                </div>
            </div>

            <div className="content-one space content-reverse" id="videoediting">
                <div className="content-info-box">
                    <h2 className="content-heading">
                        <strong style={{ color: 'blue' }}>Video Editing</strong> für<br />TikTok und Instagram.
                    </h2>
                    <h2 className="content-description">
                        Vom ersten Entwurf bis zur Fertigstellung.
                        Wir berücksichtigen dabei ihre individuellen Wünsche und Bedürfnisse, um eine Webseite zu
                        entwickeln, die perfekt zu ihnen passt.
                        <br />
                        Mit unserer Erfahrung im Webdesign und der Benutzerfreundlichkeit sorgen wir dafür, dass ihre
                        Webseite professionell aussieht und einfach zu navigieren ist.
                    </h2>
                </div>
                <img
                    src={require('../../assets/images/Mac.png')}
                    alt={'Mac'}
                    className="content-image-right"
                />
            </div>

            <div className="work-together-section space">
                <h2 className="content-heading">
                    So kannst du mit mir <strong style={{ color: 'blue' }}>zusammen arbeiten</strong>
                </h2>
                <div className="work-together-box">
                    <div className="work-together-item">
                        <div className="work-img">
                            <img
                                src={require('../../assets/images/Kalendar.png')}
                                alt={'Kalendar'}
                            />
                        </div>
                        <h2 className="work-heading bold-font">Wählen Sie Datum und Uhrzeit aus</h2>
                        <h2 className="work-paragraph">Die Auswahl von Datum und Uhrzeit ist wichtig, um sicherzustellen,
                            dass Termine koordiniert
                            werden können und alle Beteiligten rechtzeitig informiert werden.</h2>
                    </div>
                    <div className="work-together-item">
                        <div className="work-img">
                            <img
                                src={require('../../assets/images/Details.png')}
                                alt={'Details'}
                            />
                        </div>
                        <h2 className="work-heading bold-font">Beantworten Sie ein paar Fragen</h2>
                        <h2 className="work-paragraph">Nehmen Sie sich bitte zwei Minuten Zeit, um alle Fragen zu
                            beantworten. Es ist wichtig, dass jede Frage beantwortet wird.</h2>
                    </div>
                    <div className="work-together-item">
                        <div className="work-img">
                            <img
                                src={require('../../assets/images/Bestätigung.png')}
                                alt={'Bestätigung'}
                            />
                        </div>
                        <h2 className="work-heading bold-font">Sie haben den Termin!
                        </h2>
                        <h2 className="work-paragraph">Wenn Sie den Termin haben werde ich mich bei Ihnen melden und wir
                            können uns dann besser kennenlernen.</h2>
                    </div>
                </div>
                <div className="work-button">
                    <button className="button-blue buttons header-button large">Termin
                        vereinbaren</button>
                </div>
            </div>

            <div className="customer-reviews space">
                <h2 className="content-heading">
                    Erfolgreiche <strong style={{ color: 'blue' }}>Kundenbewertungen</strong> sprechen für sich!
                </h2>
                <div className="customer-reviews-wrapper">
                    <div className="customer-reviews-item">
                        <h1 className="customer-reviews-heading">"</h1>
                        <h2 className="work-paragraph">Die SMMA hat unsere Social-Media-Präsenz transformiert! Kreative
                            Inhalte und gezielte Werbung haben unsere Reichweite gesteigert. Transparente Kommunikation
                            und professioneller Service - eine Top-Agentur!</h2>
                    </div>
                    <div className="customer-reviews-item">
                        <h1 className="customer-reviews-heading">"</h1>
                        <h2 className="work-paragraph">Die Zusammenarbeit war beeindruckend! SMMA versteht Social Media.
                            Unsere Follower-Zahlen steigen, Markenbekanntheit wächst - Empfehlenswert!</h2>
                    </div>
                    <div className="customer-reviews-item">
                        <h1 className="customer-reviews-heading">"</h1>
                        <h2 className="work-paragraph">Die SMMA half, eine starke Online-Präsenz aufzubauen. Engagierte
                            Community, steigender Traffic und Conversions. Danke für eure exzellente Arbeit!</h2>
                    </div>
                </div>
            </div>

            <Faq />
        </div>
    )
}