import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Element as ScrollElement } from 'react-scroll';
import Layout from "../components/layout/Layout";
import Hero from '../components/sections/home/Hero';
import Intro from '../components/sections/home/Intro';
import Problem from '../components/sections/home/Problem';
import WhyAztecaz from '../components/sections/home/WhyAztecaz';
import HowItWorks from '../components/sections/home/HowItWorks';
import Team from '../components/sections/home/Team';
import FAQ from '../components/sections/home/FAQ';
import Contact from '../components/sections/home/Contact';
import Action8 from '../components/sections/Action8';

// Componentes que necesitan carga dinámica
const BidModal = dynamic(() => import("../components/elements/BidModal"));

export default function Home() {
    const [isBidModal, setBidModal] = useState(false);
    const handleBidModal = () => setBidModal(!isBidModal);

    return (
        <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">
            {/* Hero Section */}
            <Hero />
            
            <main>
                {/* Intro Section */}
                <Intro />

                {/* Problem Section with Statistics */}
                <ScrollElement name="problema">
                    <Problem />
                </ScrollElement>

                {/* Why Aztecaz Section */}
                <ScrollElement name="aztecaz">
                    <WhyAztecaz />
                </ScrollElement>

                {/* How It Works Section */}
                <ScrollElement name="como">
                    <HowItWorks />
                </ScrollElement>

                {/* Team Section */}
                <ScrollElement name="team">
                    <Team />
                </ScrollElement>

                {/* FAQ Section */}
                <ScrollElement name="faq">
                    <FAQ />
                </ScrollElement>

                {/* Contact Section */}
                <ScrollElement name="contacto">
                    <Contact />
                </ScrollElement>

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
