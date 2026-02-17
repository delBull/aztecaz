
import Link from "next/link"
import HoverDropdown from "../elements/HoverDropdown"
export default function Seller1() {
    return (
        <>

            <div className="tf-section seller ">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section">
                                <h2 className="tf-title pb-30">Top seller in
                                    <HoverDropdown />
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                        <div className="tf-card-box">
                                <div className="swiper-wrapper">
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                                <div className="number">1</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                                <div className="number">2</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Robertson</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-03.png" alt="" className="avatar" />
                                                <div className="number">3</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Midjourney NFTs</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-04.png" alt="" className="avatar" />
                                                <div className="number">4</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Kristin Watson</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-05.png" alt="" className="avatar" />
                                                <div className="number">5</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Dianne Russell</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-06.png" alt="" className="avatar" />
                                                <div className="number">6</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Jenny Wilson</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                                <div className="number">7</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                                <div className="number">8</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="swiper-button-next seller-next over active" />
                            <div className="swiper-button-prev seller-prev over " />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
