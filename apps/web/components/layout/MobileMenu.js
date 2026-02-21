import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    return (
        <>



            <div className="inner-canvas-nav">
                <div className="side-bar">

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


            {/* <nav id="mobile-main-nav" className="mobile-main-nav">
                <ul id="menu-mobile-menu" className="menu">
                    <li className="menu-item menu-item-has-children-mobile current-menu-item" onClick={() => handleToggle(1)}>
                        <a className="item-menu-mobile">Home</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li className="menu-item current-item"><Link href="/">Home 1</Link></li>
                            <li className="menu-item"><Link href="/home-2">Home 2</Link></li>
                            <li className="menu-item"><Link href="/home-3">Home 3</Link></li>
                            <li className="menu-item"><Link href="/home-4">Home 4</Link></li>
                            <li className="menu-item"><Link href="/home-5">Home 5</Link></li>
                            <li className="menu-item"><Link href="/home-6">Home 6</Link></li>
                            <li className="menu-item"><Link href="/home-7">Home 7</Link></li>
                            <li className="menu-item"><Link href="/slider-3d">Slider 3d</Link></li>
                            <li className="menu-item"><Link href="/slider-scroll">Slider Scroll</Link></li>
                            <li className="menu-item"><Link href="/slider-animation">Slider Animation</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/about-us">About us</Link>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(2)}>
                        <a className="item-menu-mobile">Explore</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/explore-1">Explore Style 1</Link></li>
                            <li className="menu-item"><Link href="/explore-2">Explore Style 2</Link></li>
                            <li className="menu-item"><Link href="/explore-3">Explore Style 3</Link></li>
                            <li className="menu-item"><Link href="/explore-4">Explore Style 4</Link></li>
                            <li className="menu-item"><Link href="/product-detail-1">Product Detail 1</Link></li>
                            <li className="menu-item"><Link href="/product-detail-2">Product Detail 2</Link></li>
                            <li className="menu-item"><Link href="/product-detail-3">Product Detail 3</Link></li>
                            <li className="menu-item"><Link href="/ranking">Ranking</Link></li>
                            <li className="menu-item"><Link href="/upcoming">Upcoming Projects</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(3)}>
                        <a className="item-menu-mobile">Pages</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/dashboard/market">Market</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">Create</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">Active Bid</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">Explore</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">My collection</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">My favorite</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">Wallet</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">History</Link></li>
                            <li className="menu-item"><Link href="/dashboard/market">Settings</Link></li>
                            <li className="menu-item"><Link href="/author-1">Authors Style 1</Link></li>
                            <li className="menu-item"><Link href="/author-2">Authors Style 2</Link></li>
                            <li className="menu-item"><Link href="/terms-condition">Terms &amp; Condition</Link></li>
                            <li className="menu-item"><Link href="/faq">FAQs</Link></li>
                            <li className="menu-item"><Link href="/coming-soon">Coming Soon</Link></li>
                            <li className="menu-item"><Link href="/maintenance">Maintenance</Link></li>
                            <li className="menu-item"><Link href="/404">404</Link></li>
                            <li className="menu-item"><Link href="/login">Login</Link></li>
                            <li className="menu-item"><Link href="/sign-up">Sign up</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(4)}>
                        <a className="item-menu-mobile">Blog</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/blog-grid">Blog Grid</Link></li>
                            <li className="menu-item"><Link href="/blog-grid-1">Blog Grid 1</Link></li>
                            <li className="menu-item"><Link href="/blog-list">Blog List</Link></li>
                            <li className="menu-item"><Link href="/blog-list-1">Blog List 1</Link></li>
                            <li className="menu-item"><Link href="/blog-detail">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/contact-us">Contact</Link>
                    </li>
                    </ul> 
    </nav> */}
        </>
    )
} 
