import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer">
                <div className="themesflat-container">
                    <div id="footer details" className="row">
                        <div className="col-12">
                            <div className="footer-content flex flex-grow">
                                <div className="widget-logo flex-grow">
                                    <div className="logo-footer" id="logo-footer">
                                        <Link href="/">
                                            <img id="logo_footer" src="/assets/images/logo/logo_full.png" data-retina="assets/images/logo/logo_h.png" style={{ width: '200px'}} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget widget-menu style-1">
                                    <h5 className="title-widget">Market</h5>
                                    <ul>
                                        <li><Link href="#">Todas las Propiedades</Link></li>
                                        <li><Link href="#">Rentas</Link></li>
                                        <li><Link href="#">Vende tu Propiedad</Link></li>
                                        <li><Link href="#">Encuentra tu lugar perfecto</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-2">
                                    <h5 className="title-widget">Recursos</h5>
                                    <ul>
                                        <li><Link href="#">Estatus de Plataforma</Link></li>
                                        <li><Link href="#">Socios</Link></li>
                                        <li><Link href="#">Intercambia Fiat-Crypto</Link></li>
                                        <li><Link href="#">Subastas</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-3">
                                    <h5 className="title-widget">Cuenta</h5>
                                    <ul>
                                        <li><Link href="#">Mis Activos</Link></li>
                                        <li><Link href="#">Desarollos</Link></li>
                                        <li><Link href="#">Ir al dashboard</Link></li>
                                        <li><Link href="#">Transformar mis activos</Link></li>
                                    </ul>
                                </div>
                                <div className="widget-last">
                                    <div className="widget-menu style-4">
                                        <h5 className="title-widget">Empresa</h5>
                                        <ul>
                                            <li><Link href="#">Centro de ayuda</Link></li>
                                            <li><Link href="#">Comunidad Blockchain</Link></li>
                                        </ul>
                                    </div>
                                    <h5 className="title-widget mt-30">Síguenos</h5>
                                    <div className="widget-social">
                                        <ul className="flex">
                                            <li><Link href="#" className="icon-facebook" /></li>
                                            <li><Link href="#" className="icon-twitter" /></li>
                                            <li><Link href="#" className="icon-vt" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} ATECAZ: HUB INMOBILIARIO </p>
                        <ul className="flex">
                            <li>
                                <Link href="/terms-condition">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-condition">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
