import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, []);

    return (
        <div className="flat-pages-title-home2 relative bgContainer">
            <div className="overlay"></div>
            <video
                ref={videoRef}
                className="video-background"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/assets/planeta.mp4" type="video/mp4" />
            </video>
            <div className="container">
                <div className="themesflat-container w-full">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="content">
                                <h1 className="wow fadeInUp">
                                    Invierte en el futuro de la Tokenización Inmobiliaria
                                </h1>
                                <p className="wow fadeInUp" style={{ fontSize: '26px', lineHeight: '1.1' }}>
                                    Aplicamos herramientas blockchain para impulsar el crecimiento en el sector inmobiliario.
                                </p>
                                <div className="wow fadeInUp flat-button flex">
                                    <Link href="/market-wallet" className="tf-button style-1 h50 w190 mr-30">
                                        ¡Empieza Ahora!
                                        <i className="icon-arrow-up-right2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 