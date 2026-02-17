import Link from "next/link"

import Countdown from '@/components/elements/Countdown'
import { useState } from "react"
import BidModal from "../elements/BidModal"
const currentTime = new Date()
export default function FeaturedSlider1() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    return (
        <>
            {/* <Swiper {...swiperOptions} className="abc">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper> */}

            <div className="featured pt-10 swiper-container carousel">
                <div className="tf-card-box">
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-01.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-02.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-03.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-04.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-01.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-05.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-02.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-06.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-03.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-07.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                        <div className="tf-card-box style-1">
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/card-item-04.jpg" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                </div>
                                <div className="button-place-bid">
                                    <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                </div>
                            </div>
                            <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                            <div className="author flex items-center">
                                <div className="avatar">
                                    <img src="/assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                </div>
                                <div className="info">
                                    <span>Created by:</span>
                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                                <span className="text-bid">Current Bid</span>
                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                            </div>
                        </div>
                </div>
                <div className="swiper-pagination" />
                <div className="slider-next swiper-button-next" />
                <div className="slider-prev swiper-button-prev" />
            </div>
            <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
        </>
    )
}
