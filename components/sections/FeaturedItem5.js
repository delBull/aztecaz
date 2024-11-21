

import Link from "next/link"
import FeaturedSlider1 from "../slider/FeaturedSlider1"
export default function FeaturedItem5() {
    return (
        <>
            <div className="tf-section featured-item">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-20">
                                <h2 className="tf-title ">Browse by category</h2>
                                <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-full">
                    <FeaturedSlider1 />
                </div>
            </div>

        </>
    )
}
