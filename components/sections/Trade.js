import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { useState } from "react"
import BidModal from '../elements/BidModal'
const currentTime = new Date()

import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'
export default function Explore() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <div className="walletwrap-top">
                <div className="inner-content">
                {/*    <div className="action__body w-full mb-40">
                        <div className="tf-tsparticles">
                            <div id="tsparticles3" data-color="#161616" data-line="#000" />
                        </div>
                        <h2>Intercambia tus activos, aumenta tu liquidez, divisa tus oportunidades</h2>
                        <div className="bg-home7">
                            <AutoSlider1 />
                            <AutoSlider2 />
                            <AutoSlider1 />
                        </div>
                    </div> */}
                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Plataforma de Intercambio, Staking y Swap</h2>
                    </div>
                        </div>
                        <ul className="widget-menu-tab ">
                            <li className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)} style={{ width: '200px', height: '200px'}}>
                                <span className="inner">Trade</span>
                            </li>
                            <li className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)} style={{ width: '200px', height: '200px'}}>
                                <span className="inner">Swap</span>
                            </li>
                            <li className={activeIndex === 3 ? "item-title active" : "item-title"} onClick={() => handleOnClick(3)} style={{ width: '200px', height: '200px'}}>
                                <span className="inner">Stacking</span>
                            </li>
                            <li className={activeIndex === 4 ? "item-title active" : "item-title"} onClick={() => handleOnClick(4)} style={{ width: '200px', height: '200px'}}>
                                <span className="inner">Re-invest</span>
                            </li>
                        </ul>
                        </div>
                        
             {/*}   <div className="side-bar">
                    <div className="widget widget-recently">
                        <h5 className="title-widget">Swap assets</h5>
                        <div className="card-small-main">
                            <img src="assets/images/blog/sidebar-05.jpg" alt="" />
                            <div className="card-bottom">
                                <h5><Link href="#">Fiat to Crypto</Link></h5>
                            </div>
                        </div>
                    </div> 
                </div> */}
            
            <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
        </>
    )
}
