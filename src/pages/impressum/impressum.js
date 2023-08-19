import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './impressum.css';
import Faq from '../../components/faq/faq';

export default function Impressum() {
    return (
        <HelmetProvider>
            <div className="main-content">
                <Helmet>
                    <title>Impressum</title>
                </Helmet>
                <div className="text-content space">
                    <h2 className="content-heading">
                        Impressum
                    </h2>
                    <div className="text-item">
                        <h3 className="text-content-paragraph">
                            Angaben gemäß § 5 TMG
                        </h3>
                        <h3 className="text-content-paragraph text-content-space">
                            Name: Sebastian Alexander Knight
                            <br />
                            Adresse: Brunnenstraße 36
                            <br />
                            PLZ, Ort: 10115, Berlin
                        </h3>
                        <h3 className="text-content-paragraph text-content-space">
                            Kontakt: +4917640177475
                            <br />
                            Telefon: +4917640177475
                            <br />
                            E-Mail: info@knightmedia.shop
                        </h3>
                        <h3 className="text-content-paragraph text-content-space">
                            Steuernummer 34/386/01828
                            <br />
                            Umsatzsteuer-ID: DE345826080
                        </h3>
                        <h3 className="text-content-paragraph text-content-space">
                            EU-Streitschlichtung
                        </h3>
                        <h3 className="text-content-paragraph text-content-space">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                            <br />
                            (OS) bereit: https://ec.europa.eu/consumers/odr/.
                            <br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </h3>
                        <h3 className="text-content-paragraph text-content-space">
                            Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                            <br />
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            <br />
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </h3>
                    </div>
                    <Faq />
                </div>
            </div>
        </HelmetProvider>
    )
}