import Link from "next/link"
import React, { useState, useEffect } from 'react';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import Headroom from 'react-headroom';
import { Menu as MenuIcon } from 'lucide-react';
import { useRouter } from "next/router";

export default function Header1({ isMobileMenu, handleMobileMenu }) {
    const router = useRouter();
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar)
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [shouldHide, setShouldHide] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setShouldHide(scrollTop > lastScrollTop && scrollTop > 0);
        setLastScrollTop(scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            <Headroom style={{ zIndex: '100' }}>
                <header id="header_main" className={`header_1 header-fixed ${shouldHide ? 'ocultar' : ''} ${router.pathname === '/market' ? 'market-header' : ''}`}>
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="site-header-inner" style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100%', backgroundColor: 'transparent' }}>

                                    {/* Centered White Navbar Container (Logo + Menu) */}
                                    <div className="nav-container-floating" style={{
                                        width: isMobile ? '95%' : (router.pathname === '/market' ? '33%' : '66%'),
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: isMobile ? 'space-between' : 'space-between',
                                        padding: isMobile ? '8px 12px' : '10px 30px',
                                        borderRadius: '50px',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                                        position: 'relative',
                                        zIndex: 5,
                                        marginLeft: isMobile ? '0' : '0'
                                    }}>
                                        {isMobile ? (
                                            <div className="flex items-center justify-between w-full">
                                                {/* Mobile Logo */}
                                                <Link href="/" rel="home" className="main-logo">
                                                    <img src="/assets/images/logo/icon.png" style={{ height: '30px', width: 'auto' }} alt="Aztecaz" />
                                                </Link>

                                                {/* Mobile Actions */}
                                                <div className="flex items-center" style={{ gap: '12px' }}>
                                                    <Link href="/dashboard/market" className="flex items-center justify-center" style={{
                                                        backgroundColor: '#f3f4f6', color: 'black', height: '36px', padding: '0 12px', borderRadius: '18px', gap: '6px', textDecoration: 'none'
                                                    }}>
                                                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Propiedades</span>
                                                    </Link>
                                                    <Link href="/dashboard" className="flex items-center justify-center" style={{
                                                        backgroundColor: '#14141F', color: 'white', height: '36px', padding: '0 12px', borderRadius: '18px', gap: '6px', textDecoration: 'none'
                                                    }}>
                                                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Dash</span>
                                                        <i className="icon-wa" style={{ fontSize: '12px' }} />
                                                    </Link>
                                                    {/* Burger Menu Trigger */}
                                                    <div onClick={handleMobileMenu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                                        <MenuIcon size={24} color="black" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            // Desktop: Logo + Menu
                                            <>
                                                <div id="site-logo">
                                                    <div id="site-logo-inner">
                                                        <Link href="/" rel="home" className="main-logo mobile-none">
                                                            <img id="logo_header" src="/assets/images/logo/only_h_g.png" style={{ height: '40px', width: 'auto' }} data-retina="/assets/images/logo/only_h_g.png" />
                                                        </Link>
                                                        <Link href="/" rel="home" className="web-none">
                                                            <img id="logo_header" src="/assets/images/logo/icon_dark.png" style={{ width: '80px' }} data-retina="assets/images/logo/icon_dark.png" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                <nav id="main-nav" className="main-nav" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                                    {router.pathname === '/market' ? (
                                                        <ul className="d-flex align-items-center" style={{ gap: '20px', margin: 0, padding: 0, listStyle: 'none' }}>
                                                            <li>
                                                                <Link href="/" style={{ color: '#14141F', fontWeight: '600' }}>Inicio</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/dashboard" style={{ color: '#14141F', fontWeight: '600' }}>Dashboard</Link>
                                                            </li>
                                                        </ul>
                                                    ) : (
                                                        <Menu />
                                                    )}
                                                </nav>
                                            </>
                                        )}
                                    </div>

                                    {/* Action Buttons (Right, Floating Outside) - Desktop Only */}
                                    {!isMobile && (
                                        <div className="flat-wallet flex" style={{ position: 'absolute', right: 0, zIndex: 4, height: '100%', alignItems: 'center' }}>
                                            <div id="wallet-header" className="flex items-center gap-2">
                                                <Link href="/dashboard/market" className="tf-button style-1" style={{ color: 'white', whiteSpace: 'nowrap', backdropFilter: 'blur(5px)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                                                    <span>Propiedades</span>
                                                </Link>
                                                <Link href="/dashboard" id="connectbtn" className="tf-button style-1" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', marginLeft: '5px', whiteSpace: 'nowrap' }}>
                                                    <span>Dashboard</span>
                                                    <i className="icon-wa" style={{ marginLeft: '5px' }} />
                                                </Link>
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <style jsx>{`
                                    .header_1 {
                                        background-color: transparent !important;
                                        box-shadow: none !important;
                                    }
                                    /* Ensure menu items color is correct inside the white box, but NOT on market page if we want custom */
                                    .header_1:not(.market-header) .main-nav > ul > li > a {
                                        color: #14141F !important; 
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                    <div className={`canvas-nav-wrap ${isSidebar ? "active" : ""}`}>
                        <div className="overlay-canvas-nav" onClick={handleSidebar} />
                        <div className="inner-canvas-nav">
                            <div className="side-bar">
                                <Link href="/" rel="home" className="main-logo">
                                    <img id="logo_header" src="/assets/images/logo/logo_navbar.png" data-retina="assets/images/logo/logo_h.png" />
                                </Link>
                                <div className="canvas-nav-close" onClick={handleSidebar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                                </div>
                                <div className="widget-search mt-30">
                                    {/* <form action="#" method="get" role="search" className="search-form relative">
                                    <input type="search" id="search" className="search-field style-1" placeholder="Search..." name="s" title="Search for" required />
                                    <button className="search search-submit" type="submit" title="Search">
                                        <i className="icon-search" />
                                    </button>
                                </form> */}
                                </div>
                                <div className="widget widget-categories">
                                    <h5 className="title-widget">Categorías</h5>
                                    <ul>
                                        <li>
                                            <div className="cate-item"><Link href="#">NFT Rentas</Link></div>
                                            <div className="number">(1.483)</div>
                                        </li>
                                        <li>
                                            <div className="cate-item"><Link href="#">NFT Accionarios</Link></div>
                                            <div className="number">(97)</div>
                                        </li>
                                        <li>
                                            <div className="cate-item"><Link href="#">Tokens por Respaldo</Link></div>
                                            <div className="number">(45)</div>
                                        </li>
                                        <li>
                                            <div className="cate-item"><Link href="#">Inversiones NFTs</Link></div>
                                            <div className="number">(728)</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-4">
                                    <h5 className="title-widget">Empresa</h5>
                                    <ul>
                                        <li><Link href="#">Centro de ayuda</Link></li>
                                        <li><Link href="#">Comunidad Blockchain</Link></li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h5 className="title-widget">Síguenos</h5>
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
                    {isMobile && (
                        <div className={`mobile-nav-wrap ${isMobileMenu ? "active" : ""}`} style={{
                            zIndex: 9999999,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            transform: isMobileMenu ? 'translateX(0)' : 'translateX(100%)',
                            visibility: isMobileMenu ? 'visible' : 'hidden',
                            opacity: isMobileMenu ? 1 : 0,
                            pointerEvents: isMobileMenu ? 'auto' : 'none',
                            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s'
                        }}>
                            <div className="overlay-mobile-nav" onClick={handleMobileMenu} style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }} />
                            <div className="inner-mobile-nav" style={{ position: 'relative', height: '100%', background: '#1c1c1c', zIndex: 10000000 }}>
                                <Link href="/" rel="home" className="main-logo">
                                    <img id="mobile-logo_header" src="/assets/images/logo/logo_navbar.png" data-retina="assets/images/logo/logo_h.png" />
                                </Link>
                                <div className="mobile-nav-close" onClick={handleMobileMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                                </div>
                                <MobileMenu />
                            </div>
                        </div>
                    )}
                </header>
            </Headroom>
        </>
    )
}
