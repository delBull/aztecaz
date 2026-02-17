import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    const numeroTelefono = '523221023028';

    return (
        <div className="tf-section-2 wrap-accordion pt-80">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                            <h2 className="tf-title pb-40">Preguntas Frecuentes</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="flat-accordion">
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. ¿Por qué los NFT están ganando popularidad?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <p>Los NFTs (Tokens No Fungibles) están en auge debido a su capacidad para representar la propiedad única y verificable de activos digitales. Esta singularidad, respaldada por tecnologías blockchain, ha transformado la forma en que percibimos y comercializamos el arte, los coleccionables y otros activos digitales.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. ¿Cómo puedo mantener seguros mis NFTs?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <p>Para mantener seguros tus NFTs, utiliza billeteras digitales seguras y resguarda tus claves privadas. Evita compartir información sensible y verifica la autenticidad de los contratos inteligentes antes de realizar transacciones.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. ¿Qué es blockchain?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <p>Blockchain es una tecnología de registro distribuido que garantiza la transparencia y seguridad de las transacciones. Consiste en bloques encadenados, cada uno conteniendo datos y un hash del bloque anterior.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. ¿Qué es un NFT?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <p>Un NFT, o Token No Fungible, es una representación única y verificable de un activo, respaldada por blockchain. Cada NFT tiene información exclusiva que lo distingue de otros.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. ¿Cómo configuro mi cuenta?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <p>Configurar tu cuenta es sencillo. Ve a "login" en la barra de navegación, sigue los pasos de registro y completa la información necesaria.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="flat-accordion2">
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. ¿Qué es la tokenización?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <p>La tokenización es el proceso de convertir activos físicos o digitales en tokens en una cadena de bloques. Estos tokens son representaciones digitales únicas que pueden ser transferibles y negociables.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. ¿Qué puedo tokenizar?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                    <p>Puedes tokenizar una variedad de activos, incluyendo bienes raíces, obras de arte, coleccionables y más. La tokenización permite fraccionar la propiedad.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. ¿Por qué debería tokenizar mis activos?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                    <p>La tokenización proporciona liquidez, accesibilidad y transparencia. Al tokenizar, amplías el acceso a inversionistas y facilitas la negociación de fracciones de activos.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. ¿Por qué Aztecaz para mis activos tokenizados?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                    <p>Aztecaz ofrece una plataforma segura y eficiente para la comercialización de activos tokenizados. Nuestra experiencia garantiza una transición fluida hacia la tokenización.</p>
                                </div>
                            </div>
                            <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. ¿Ventajas de combinar real estate vs real estate blockchain?</h6>
                                <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                    <p>Combinar bienes raíces convencionales con la tokenización proporciona liquidez instantánea, fracciona la propiedad y agiliza los procesos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="content">
                            <div className="text">¿Aún te quedan dudas?</div>
                            <p>Si no encuentras lo que buscas, entonces
                            <Link href={`https://wa.me/${numeroTelefono}`} target="_blank" rel="noopener noreferrer" style={{ color: '#be7157'}}> chatea con alguien del equipo</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
