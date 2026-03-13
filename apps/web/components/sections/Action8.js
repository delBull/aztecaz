

import Link from "next/link"
import AutoSlider1 from "../slider/AutoSlider1"
import AutoSlider2 from "../slider/AutoSlider2"

const marketUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL
    ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/market`
    : 'http://localhost:3001/dashboard/market';

export default function Action8() {
    return (
        <>
            <div className="tf-section action">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="action__body">
                                <div className="tf-tsparticles">
                                    <div id="tsparticles1" data-color="#161616" data-line="#000" />
                                </div>
                                <h2>Compra y vende tickets inmobiliarios, usa crypto, comercia con NFTs y más!</h2>
                                <div className="flat-button flex">
                                    <a href={marketUrl} className="tf-button style-2 h50 w190 mr-10">Explora más<i className="icon-arrow-up-right2" /></a>
                                </div>
                                <div className="bg-home7">
                                    <AutoSlider1 />
                                    <AutoSlider2 />
                                    <AutoSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
