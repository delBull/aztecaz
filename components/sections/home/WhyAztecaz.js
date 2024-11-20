import Link from 'next/link';

export default function WhyAztecaz() {
    return (
        <div className="tf-section-2 widget-box-icon" id="aztecaz">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                            <h2 className="tf-title pb-40">¿Por qué ahora?</h2>
                        </div>
                    </div>
                    <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                        <div className="box-icon-item">
                            <img src="/assets/images/Graph1.webp" alt="" />
                            <div className="title"><Link href="#">Crecimiento ≥ Inlfación</Link></div>
                            <p style={{ fontSize: '16px' }}>Históricamente, el crecimiento de los precios de las viviendas 
                            y los alquileres ha superado la tasa de inflación.</p>
                        </div>
                    </div>
                    <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                        <div className="box-icon-item">
                            <img src="/assets/images/Graph2.webp" alt="" />
                            <div className="title"><Link href="#">ROI en Aumento</Link></div>
                            <p style={{ fontSize: '16px' }}>Desde 2016, los rendimientos de las viviendas 
                             en alquiler han superado a la mayoría de los sectores inmobiliarios.</p>
                        </div>
                    </div>
                    <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                        <div className="box-icon-item">
                            <img src="/assets/images/Graph3.webp" alt="" />
                            <div className="title"><Link href="#">Desbalance de Inventario</Link></div>
                            <p style={{ fontSize: '16px' }}>La oferta de viviendas unifamiliares ha estado insuficientemente abastecida durante 
                                más de una década</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
