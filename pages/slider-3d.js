import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="slider-3d-page">

                <div className="flat-pages-title">
                    <div className="bg-grid-line">
                        <div className="bg-line" />
                    </div>
                    <div className="themesflat-container w1358">
                        <div className="row">
                            <div className="col-12 pages-title">
                                <div className="content">
                                    <h1>World of top works</h1>
                                    <p>Welcome to the world of rare digital art. Explore the best art from hand-picked digital artist out there and find the hidden gem.</p>
                                    <div className="flat-button flex justify-center">
                                        <Link href="#" className="tf-button style-1 h50 w190 mr-16">Discover more <i className="icon-arrow-up-right2" /></Link>
                                        <Link href="#" className="tf-button style-1 h50 w190 active">All collections <i className="icon-arrow-up-right2" /></Link>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="tf-card-box">
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-14.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-15.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-14.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-15.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-14.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-15.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-14.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-card-box style-2">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/banner-15.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">44</span><span className="countdown__label">s</span></span></div></span>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="swiper-pagination pagination-number" />
                                    <div className="swiper-button-next next-3d over" />
                                    <div className="swiper-button-prev prev-3d over" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout>
        </>
    )
}