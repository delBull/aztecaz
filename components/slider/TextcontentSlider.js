import Link from "next/link"
import BidModal from "../elements/BidModal"

import { useState } from "react"
const currentTime = new Date()
export default function TextcontentSlider() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    return (
        <>

<div className="tf-card-box">
                <div className="swipper-bg">
                            <div className="info">
                            <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="wow fadeInUp mobile-txt-18" >El modelo de inversión inmobiliario que utilizamos como servicio 
                                permite a inversores de todos los tamaños aprovechar la tecnología y servicios bajo demanda para adquirir, 
                                gestionar y vender propiedades a gran escala con mayor precisión, rapidez y eficiencia que 
                                los métodos tradicionales</p>
                            </div>
                        
                </div>
                <div className="swipper-bg">
                            <div className="info">
                            <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="wow fadeInUp mobile-txt-18" >Con Aztecaz, 
                            el acceso es más amplio y la gestión de inversiones inmobiliarias es más fácil. Estamos redefiniendo 
                            completamente cómo ganas en el mundo de las rentas inmobiliarias. ¡Prepárate para la revolución con Aztecaz! 🚀</p>
                            </div>
                        
                </div>
                <div className="swipper-bg">
                            <div className="info">
                            <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="wow fadeInUp mobile-txt-18" >En nuestro modelo 
                            único, estamos aquí para facilitar el camino de agencias y agentes inmobiliarios. Simplificamos procesos y 
                            desbloqueamos oportunidades, convirtiendo la búsqueda del lugar perfecto para comprar o vender en una 
                            experiencia cósmica. Con tecnología avanzada, estamos transformando el mundo inmobiliario. ¡Bienvenido al 
                            futuro de los bienes raíces! 🌌🏡</p>
                            </div>
                        
                </div>
                <div className="swipper-bg">
                            <div className="info">
                            <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="wow fadeInUp mobile-txt-18" >En el mundo de 
                            las inversiones, nuestro modelo es para todos: desde los pequeños aventureros hasta los medianos astutos 
                            y los grandes titanes. Aztecaz tiene oportunidades emocionantes y diversificadas para cada inversor, ya sea 
                            principiante o experto. ¡Bienvenido a un nuevo horizonte de posibilidades financieras! 🚀💼</p>
                            </div>
                        
                </div>
                <div className="swipper-bg">
                            <div className="info">
                            <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="wow fadeInUp mobile-txt-18" >Nuestro modelo 
                            abarca cada aspecto, desde construcción hasta diseño y fondeo. Creemos en experiencias inigualables, 
                            brindando soporte completo para cada proyecto. Ya sea construir desde cero o transformar espacios, nuestro 
                            enfoque integral asegura un viaje sin complicaciones hacia el futuro del bienes raíces. ¡Estamos aquí para 
                            materializar tus sueños! 🏗️✨</p>
                            </div>
                            <div style={{ padding: '10px' }}></div>
                            <button><Link href="/author-2" style={{ color: 'black'}}>Conoce este modelo</Link> </button>
                </div>
            </div>
            <div className="swiper-button-prev prev-3d over my-swipper-btn" />
            <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
        </>
    )
}
