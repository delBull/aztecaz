import React from "react";
import Link from 'next/link';

function BgVideo() {
    return (
    <div className="bgContainer">
        <div className="overlay"></div>
            <video src="/assets/planeta.mp4" autoPlay loop muted />
            <div className="container">
            <div className="themesflat-container w-full">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="content">
                                <h1 data-wow-delay="0s" className="wow fadeInUp">Invierte En El Futuro Real Estate</h1>
                                        <p data-wow-delay="0.1s" className="wow fadeInUp" style={{ fontSize: '26px', lineHeight: '1.1' }}>Aplicacamos herramientas blockchain para impulsar el rendimiento en el sector inmobiliario.</p>
                                <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex">
                                    <Link href="/market-collection" className="tf-button style-1 h50 w190 mr-30">¡Empieza Ahora!<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default BgVideo;
