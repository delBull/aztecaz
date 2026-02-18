import Link from "next/link"
import React, { useState, useEffect } from 'react';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import Headroom from 'react-headroom';
export default function Header1({ isMobileMenu, handleMobileMenu }) {
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar)
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [shouldHide, setShouldHide] = useState(false);

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
                <header id="header_main" className={`header_1 header-fixed ${shouldHide ? 'ocultar' : ''}`}>
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="site-header-inner">
                                    <div className="wrap-box flex">
                                        <div id="site-logo">
                                            <div id="site-logo-inner">
                                                <Link href="/" rel="home" className="main-logo mobile-none">
                                                    <img id="logo_header" src="/assets/images/logo/only_h_g.png" style={{ height: '40px', width: 'auto' }} data-retina="/assets/images/logo/only_h_g.png" />
                                                </Link>
                                                <Link href="/" rel="home" className="web-none">
                                                    <img id="logo_header" src="/assets/images/logo/icon_dark.png" style={{ width: '80px' }} data-retina="assets/images/logo/icon_dark.png" />
                                                </Link>
                                            </div>
                                        </div>{/* logo */}
                                        {/* <div className="mobile-button" onClick={handleMobileMenu}>
                                        <span /></div> */} {/* /.mobile-button */}
                                        <nav id="main-nav" className="main-nav">
                                            <Menu />
                                        </nav>{/* /#main-nav */}
                                        <div className="flat-wallet flex">
                                            <div id="wallet-header">
                                                <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001/dashboard"} id="connectbtn" className="tf-button style-1">
                                                    <span>Dashboard</span>
                                                    <i className="icon-wa" />
                                                </Link>
                                            </div>
                                            {/* <div className="canvas" onClick={handleSidebar}> 
                                            <span /> </div> */}
                                        </div>
                                    </div>
                                </div>
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
                    <div className={`mobile-nav-wrap ${isMobileMenu ? "active" : ""}`}>
                        <div className="overlay-mobile-nav" onClick={handleMobileMenu} />
                        <div className="inner-mobile-nav">
                            <Link href="/" rel="home" className="main-logo">
                                <img id="mobile-logo_header" src="/assets/images/logo/logo_navbar.png" data-retina="assets/images/logo/logo_h.png" />
                            </Link>
                            <div className="mobile-nav-close" onClick={handleMobileMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                            </div>
                            <MobileMenu />
                        </div>
                    </div>
                </header>
            </Headroom>
        </>
    )
}
