import Layout from "@/components/layout/Layout"
import Link from "next/link"


export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="slider-scroll-page">
                <div className="flat-pages-title-home7 relative">
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-12 pages-title">
                                <div className="content">
                                    <h1>Join the world’s largest <br /> nFT community &amp; <br /> start collecting NFTS</h1>
                                    <p>Discover the Most Premium, Unique and Exclusive
                                        NFT Collection</p>
                                    <div className="flat-button flex">
                                        <Link href="#" className="tf-button style-1 h50 w230 mr-10">Create your first NFT <i className="icon-arrow-up-right2" /></Link>
                                        <Link href="#" className="tf-button style-1 h50 w190 active">Explore now <i className="icon-arrow-up-right2" /></Link>
                                    </div>
                                </div>
                                <div className="icon-background">
                                    <img className="absolute item1" src="/assets/images/item-background/item8.png" alt="" />
                                    <img className="absolute item2" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item3" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item4" src="/assets/images/item-background/item7.png" alt="" />
                                    <img className="absolute item5" src="/assets/images/item-background/item2.png" alt="" />
                                    <img className="absolute item6" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item7" src="/assets/images/item-background/item9.png" alt="" />
                                    <img className="absolute item8" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item9" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item10" src="/assets/images/item-background/item2.png" alt="" />
                                </div>
                                <div className="bg-home7">
                                    <div className="tf-card-box">
                                        <div>
                                            <img src="/assets/images/item-background/bg-home7-item1.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/item-background/bg-home7-item2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tf-card-box">
                                        <div>
                                            <img src="/assets/images/item-background/bg-home7-item3.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/item-background/bg-home7-item4.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tf-card-box">
                                        <div>
                                            <img src="/assets/images/item-background/bg-home7-item5.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/item-background/bg-home7-item6.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}