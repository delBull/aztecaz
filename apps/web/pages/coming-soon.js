import Link from "next/link"
export default function Home() {

    return (
        <>

            <div id="wrapper">
                <div id="page">
                    <div className="section-single-page coming-soon">
                        <Link href="/">
                            <img src="/assets/images/logo/logo_full.png" style={{ width: '300px'}} />
                        </Link>
                        <div className="content">
                            <div className="widget-bg-line">
                                <div className="wraper">
                                    <div className="bg-grid-line y top">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line x left">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line y bottom">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line x right">
                                        <div className="bg-line" />
                                    </div>
                                </div>
                            </div>
                            <h1>Coming soon</h1>
                            <p>Mientras tanto suscríbete al newsletter para mantenerte al tanto</p>
                            <fieldset className="email">
                                <input type="email" className="style-1" id="email" placeholder="Email*" name="email" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <Link href="#" className="tf-button style-1 h50">Subscríbete<i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="widget-social">
                            <ul className="flex justify-center">
                                <li><Link href="#" className="icon-facebook" /></li>
                                <li><Link href="#" className="icon-twitter" /></li>
                                <li><Link href="#" className="icon-vt" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /#page */}
            </div>

        </>
    )
}