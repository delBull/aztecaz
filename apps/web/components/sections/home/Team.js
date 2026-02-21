import Link from 'next/link';

export default function Team() {
    return (
        <div className="widget-our-team">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                            <h2 className="tf-title pb-40">Conoce a nuestro super Team</h2>
                        </div>
                    </div>
                    <div data-wow-delay="0s" className="wow fadeInUp col-md-3 col-6">
                        <div className="our-team-item pb-38 text-center">
                            <img src="/assets/images/avatar/team-01.png" alt="" className="mx-auto" />
                            <div className="name"><Link href="#">Sue Del Toro</Link></div>
                            <div className="info">CEO, Director</div>
                        </div>
                    </div>
                    <div data-wow-delay="0.1s" className="wow fadeInUp col-md-3 col-6">
                        <div className="our-team-item pb-38 text-center">
                            <img src="/assets/images/avatar/team-02.png" alt="" className="mx-auto" />
                            <div className="name"><Link href="#">Celina Del Toro</Link></div>
                            <div className="info">Rental Manager</div>
                        </div>
                    </div>
                    <div data-wow-delay="0.2s" className="wow fadeInUp col-md-3 col-6">
                        <div className="our-team-item pb-38 text-center">
                            <img src="/assets/images/avatar/team-03.png" alt="" className="mx-auto" />
                            <div className="name"><Link href="#">Erwin Mayoral</Link></div>
                            <div className="info">Real Estate Expert</div>
                        </div>
                    </div>
                    <div data-wow-delay="0.3s" className="wow fadeInUp col-md-3 col-6">
                        <div className="our-team-item pb-38 text-center">
                            <img src="/assets/images/avatar/team-05.png" alt="" className="mx-auto" />
                            <div className="name"><Link href="#">Karla Alvarez</Link></div>
                            <div className="info">Real Estate Expert</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
