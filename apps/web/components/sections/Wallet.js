import Link from 'next/link'

export default function Wallet() {
    return (
        <>
                        <div className='walletwrap-top'>
                        <h2 className="tf-title">Conecta tu wallet</h2>
                       <p>Si aún no cuentas con tu wallet, puedes elegir la que mejor te parezca y crearla ahora, <span className="tf-color button-connect-wallet">aquí mismo.</span></p>
                    <div id="connect-wallet-grid">
                        <div className="wrap-box-card ">
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-01.png" alt="" />
                                    <h6><Link href="#">MetaMask</Link></h6>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-02.png" alt="" />
                                    <h6><Link href="#">Coibase Wallet</Link></h6>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-03.png" alt="" />
                                    <h6><Link href="#">WalletConnect</Link></h6>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-04.png" alt="" />
                                    <h6><Link href="#">Ledger</Link></h6>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-05.png" alt="" />
                                    <h6><Link href="#">Phantom</Link></h6>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-06.png" alt="" />
                                    <h6><Link href="#">Bitkeep</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>   
                    </div>
        </>
    )
}
