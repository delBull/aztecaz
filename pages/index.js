import { useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from "../components/layout/Layout";
import Hero from '../components/sections/home/Hero';
import Statistics from '../components/sections/home/Statistics';
import Team from '../components/sections/home/Team';
import FAQ from '../components/sections/home/FAQ';
import Contact from '../components/sections/home/Contact';

// Componentes que necesitan carga dinámica
const BidModal = dynamic(() => import("../components/elements/BidModal"));

export default function Home() {
    const [isBidModal, setBidModal] = useState(false);
    const handleBidModal = () => setBidModal(!isBidModal);

    return (
        <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">
            <Hero />
            
            <main>
                <Statistics />
                <Team />
                <FAQ />
                <Contact />
            </main>

            <BidModal 
                handleBidModal={handleBidModal} 
                isBidModal={isBidModal} 
            />
        </Layout>
    );
}
