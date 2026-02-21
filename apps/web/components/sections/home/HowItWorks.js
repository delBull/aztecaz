import Link from 'next/link';
import { Element as ScrollElement } from 'react-scroll';

export default function HowItWorks() {
    return (
        <ScrollElement name="como">
            <div className="tf-section create-sell">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section justify-content-center">
                                <h2 className="tf-title pb-30">Desata el potencial de tu inversión con la tecnología, siguiendo los pasos de los titanes financieros.</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-01.png" alt="" className="mx-auto" />
                                    <p>Paso 1</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Descubrimiento</Link></h4>
                                <p className="content">Identifica las oportunidades más destacadas para la adquisición</p>
                                <div className="arrow">
                                    <svg width={114} height={114} viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0682 58.6163C14.3723 57.8473 15.7186 57.1206 17.0509 56.436L16.1333 54.65C14.7448 55.3625 13.3845 56.1032 12.0524 56.9002L13.0683 58.6444L13.0682 58.6163Z" fill="#919191" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center type-1">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-02.png" alt="" className="mx-auto" />
                                    <p>Paso 2</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Tokenización Maestra</Link></h4>
                                <p className="content">Convertimos el vehículo en tokens, permitiendo la participación de cualquier inversor.</p>
                                <div className="arrow">
                                    <svg width={114} height={114} viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0682 58.6163C14.3723 57.8473 15.7186 57.1206 17.0509 56.436L16.1333 54.65C14.7448 55.3625 13.3845 56.1032 12.0524 56.9002L13.0683 58.6444L13.0682 58.6163Z" fill="#919191" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-03.png" alt="" className="mx-auto" />
                                    <p>Paso 3</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Frutos Financieros</Link></h4>
                                <p className="content">Recolección de los beneficios generados por tus ingresos pasivos y/o ventas directas.</p>
                                <div className="arrow">
                                    <svg width={114} height={114} viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0682 58.6163C14.3723 57.8473 15.7186 57.1206 17.0509 56.436L16.1333 54.65C14.7448 55.3625 13.3845 56.1032 12.0524 56.9002L13.0683 58.6444L13.0682 58.6163Z" fill="#919191" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-04.png" alt="" className="mx-auto" />
                                    <p>Paso 4</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Ciclo de Crecimiento</Link></h4>
                                <p className="content">Reinvierte tus ganancias y haz florecer tu inversión inicial.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link href="/dashboard/market" className="tf-button style-1 h50 w190 m-auto">¡Empieza ya!<i className="icon-arrow-up-right2" /></Link>
                        </div>
                    </div>
                    <div style={{ padding: '50px' }}></div>
                </div>
            </div>
        </ScrollElement>
    );
}
