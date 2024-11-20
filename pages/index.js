import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Element } from 'react-scroll';
import Layout from "../components/layout/Layout";
import Hero from '../components/sections/home/Hero';
import Statistics from '../components/sections/home/Statistics';
import Team from '../components/sections/home/Team';
import FAQ from '../components/sections/home/FAQ';
import Contact from '../components/sections/home/Contact';
import Action8 from '../components/sections/Action8';
import HowItWorks from '../components/sections/home/HowItWorks';
import WhyAztecaz from '../components/sections/home/WhyAztecaz';

// Componentes que necesitan carga dinámica
const BidModal = dynamic(() => import("../components/elements/BidModal"));

export default function Home() {
    const [isBidModal, setBidModal] = useState(false);
    const handleBidModal = () => setBidModal(!isBidModal);

    return (
        <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">
            <Hero />
            
            <main>
                {/* Intro Section */}
                <div>
                    <div className="themesflat-container w-full white-section">
                        <div style={{ padding: '50px' }}></div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="">
                                    <h1 data-wow-delay="0s" className="wow fadeInUp" style={{ color: 'black' }}> 
                                        En Aztecaz, aspiramos a revolucionar el panorama inmobiliario en México. 
                                        Nuestro gran propósito es convertirnos en el pionero de la tokenización de activos, 
                                        desafiando las limitadas oportunidades que actualmente enfrenta nuestra comunidad. 
                                        Estamos aquí para transformar la forma en que se invierte en bienes raíces, brindando nuevas 
                                        y emocionantes posibilidades a todos.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: '50px' }}></div>
                        <div className="icon-background">
                            <img 
                                className="absolute item2" 
                                src="/assets/images/eagle1.png" 
                                style={{ 
                                    left: '0px', 
                                    position: 'absolute',
                                    width: '80vh',
                                    opacity: '0.4'
                                }} 
                                alt="Eagle background" 
                            />
                        </div>
                        <div style={{ padding: '100px' }}></div>
                    </div>
                </div>

                {/* Statistics Section */}
                <Statistics />

                {/* Why Aztecaz Section */}
                <Element name="aztecaz">
                    <WhyAztecaz />
                </Element>

                {/* How It Works Section */}
                <Element name="como">
                    <HowItWorks />
                </Element>

                {/* Team Section */}
                <Element name="team">
                    <Team />
                </Element>

                {/* FAQ Section */}
                <Element name="faq">
                    <FAQ />
                </Element>

                {/* Contact Section */}
                <Element name="contacto">
                    <Contact />
                </Element>

                {/* Call to Action */}
                <Action8 />
            </main>

            <BidModal 
                handleBidModal={handleBidModal} 
                isBidModal={isBidModal} 
            />
        </Layout>
    );
}
