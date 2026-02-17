import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="flat-pages-title-home2 relative bgContainer">
            <div className="overlay"></div>
            <video src="/assets/planeta.mp4" autoPlay loop muted playsInline>
                <source src="/assets/planeta.mp4" type="video/mp4" />
                <img src="/assets/fallback-image.jpeg" alt="Imagen de respaldo" />
            </video>
            <div className="container">
                <div className="themesflat-container w-full">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="content">
                                <h1 data-wow-delay="0s" className="wow fadeInUp" style={{ lineHeight: '1.1' }}>
                                    Invierte en el futuro de la Tokenización Inmobiliaria
                                </h1>
                                <p data-wow-delay="0.1s" className="wow fadeInUp" style={{ fontSize: '26px', lineHeight: '1.1' }}>
                                    Aplicamos herramientas blockchain para impulsar el crecimiento en el sector inmobiliario.
                                </p>
                                <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex">
                                    <Link href="/market-wallet" className="tf-button style-1 h50 w190 mr-30">
                                        ¡Empieza Ahora!<i className="icon-arrow-up-right2" />
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
