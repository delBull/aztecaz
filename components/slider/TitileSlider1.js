import Link from "next/link"
import BidModal from "../elements/BidModal"

import Countdown from '@/components/elements/Countdown'
import { useState } from "react"

export default function TitileSlider1() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    const currentTime = new Date()
    const timerx = <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
    return (
        <>


<div className="tf-card-box">
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-01.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-02.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-03.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-04.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-05.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-06.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-07.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-01.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-02.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-03.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-04.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-05.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-06.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/banner-07.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                {timerx}
                            </div>
                            <div className="button-place-bid">
                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                            </div>
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>

                <div className="swiper-pagination pagination-number" />
            </div>
            <div className="swiper-button-next next-3d over" />
            <div className="swiper-button-prev prev-3d over" />
            <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />

        </>
    )
}
