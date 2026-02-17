import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center">Términos &amp; Políticas</h1>
                                  {/*  <ul className="breadcrumbs flex justify-center">
                                        <li className="icon-keyboard_arrow_right">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Creators</Link>
                                        </li>
                                       </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-term-condition">
                        <div className="themesflat-container">
                            <div className="row flat-tabs">
                                <div className="col-md-3 col-12">
                                    <div className="wrap-menu po-sticky">
                                        <div className="title">Menu</div>
                                        <ul className="menu-tab">
                                            <li className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                <span className="inner">1. Términos y Condiciones</span>
                                            </li>
                                            <li className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)}>
                                                <span className="inner">2. Política de Privacidad</span>
                                            </li>
                                         {/*}   <li className={activeIndex === 3 ? "item-title active" : "item-title"} onClick={() => handleOnClick(3)}>
                                                <span className="inner">3. Ownership</span>
                                            </li>
                                            <li className={activeIndex === 4 ? "item-title active" : "item-title"} onClick={() => handleOnClick(4)}>
                                                <span className="inner">4. License to Access</span>
                                            </li>
                                            <li className={activeIndex === 5 ? "item-title active" : "item-title"} onClick={() => handleOnClick(5)}>
                                                <span className="inner">5. Use Our Service and Content</span>
                                            </li>
                                            <li className={activeIndex === 6 ? "item-title active" : "item-title"} onClick={() => handleOnClick(6)}>
                                                <span className="inner">6. User Conduct</span>
                                            </li>
                                            <li className={activeIndex === 7 ? "item-title active" : "item-title"} onClick={() => handleOnClick(7)}>
                                                <span className="inner">7. Intellectual Property Rights</span>
                                            </li>
                                            <li className={activeIndex === 8 ? "item-title active" : "item-title"} onClick={() => handleOnClick(8)}>
                                                <span className="inner">8. Communication Preferences</span>
                                            </li>
                                            <li className={activeIndex === 9 ? "item-title active" : "item-title"} onClick={() => handleOnClick(9)}>
                                                <span className="inner">9. App Termsy</span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9 col-12">
                                    <div className="content-tab po-sticky-footer">
                                        <div className="content-inner" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
                                            <div className="date">1. Términos y Condiciones de Aztecaz Hub Inmobiliario</div>
                                            <div className="date">1.1 Uso de la Plataforma: </div>
                                            <p>Al utilizar Aztecaz Hub Inmobiliario, aceptas cumplir con todas las leyes y regulaciones mexicanas relacionadas con la tokenización de activos inmobiliarios. Esta plataforma se proporciona exclusivamente para facilitar la tokenización legal y segura.</p><br/><br/>
                                            <div className="date">1.2 Tokenización y Propiedad: </div>
                                            <p>La tokenización de activos inmobiliarios implica la creación de representaciones digitales (tokens) de dichos activos en una cadena de bloques. Estos tokens están sujetos a las leyes de propiedad mexicanas. Al tokenizar un activo, reconoces y aceptas que los derechos de propiedad asociados se transfieren según lo establecido por la legislación mexicana. </p><br/><br/>
                                            <div className="date">1.3 Responsabilidades del Usuario: </div>
                                            <p>Te comprometes a proporcionar información precisa y veraz durante el proceso de tokenización. Es tu responsabilidad garantizar que la información proporcionada cumpla con las leyes mexicanas aplicables. Mantener seguras tus credenciales de cuenta es crucial para garantizar la seguridad de la plataforma y tus activos tokenizados. </p><br/><br/>
                                            <div className="date">1.4 Liquidez y Transacciones: </div>
                                            <p>La tokenización puede mejorar la liquidez de los activos inmobiliarios al permitir transacciones más eficientes. Todas las transacciones realizadas a través de la plataforma están sujetas a procesos seguros y cumplen con las leyes mexicanas de transacciones financieras. </p><br/><br/>
                                            <div className="date">1.5 Privacidad y Seguridad: </div>
                                            <p>La protección de tus datos personales es fundamental. Nuestra plataforma opera bajo estrictas medidas de seguridad para garantizar la confidencialidad de la información del usuario. Para obtener detalles específicos sobre cómo manejamos tus datos, consulta nuestra Política de Privacidad. </p><br/><br/>
                                            <div className="date">1.6 Regulaciones Mexicanas: </div>
                                            <p>Aztecaz Hub Inmobiliario se compromete a operar conforme a las regulaciones mexicanas que rigen la tokenización y los bienes raíces. Nuestra plataforma se adhiere a las normativas vigentes para ofrecer servicios legales y seguros. </p><br/><br/>
                                            <div className="date">1.7 Terminación de Cuenta: </div>
                                            <p>Nos reservamos el derecho de terminar cuentas que violen los términos y condiciones establecidos o las leyes aplicables de México. La terminación de una cuenta puede ocurrir en casos de violación grave o repetida de los términos y condiciones.</p>
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex === 2 ? "block" : "none"}` }}>
                                            <div className="date">2. Política de Privacidad de Aztecaz Hub Inmobiliario</div>
                                            <div className="date">2.1 Recopilación de Información: </div>
                                            <p>La información personal recopilada por Aztecaz Hub Inmobiliario se limita a la necesaria para facilitar la tokenización y cumplir con las regulaciones mexicanas. Nos comprometemos a recopilar solo la información relevante y proporcionar transparencia sobre su uso. </p><br/><br/>
                                            <div className="date">2.2 Uso de la Información: </div>
                                            <p>Los datos personales recopilados se utilizan para facilitar el proceso de tokenización, procesar transacciones y cumplir con las leyes aplicables de privacidad en México. No utilizamos la información para fines no autorizados o no relacionados con la plataforma. </p><br/><br/>
                                            <div className="date">2.3 Seguridad de Datos: </div>
                                            <p>Implementamos medidas de seguridad robustas para proteger tu información contra accesos no autorizados, divulgación, alteración y destrucción no autorizadas. Estas medidas cumplen con los estándares de seguridad de la industria y las regulaciones mexicanas. </p><br/><br/>
                                            <div className="date">2.4 Compartir Información: </div>
                                            <p>No compartimos tus datos personales con terceros sin tu consentimiento, excepto según lo requieran las leyes aplicables o en situaciones específicas que se detallan en nuestra Política de Privacidad. </p><br/><br/>
                                            <div className="date">2.5 Cookies: </div>
                                            <p>Nuestra plataforma utiliza cookies para mejorar la experiencia del usuario. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador. Consulta nuestra Política de Cookies para obtener más información. </p><br/><br/>
                                            <div className="date">2.6 Derechos del Usuario: </div>
                                            <p>Tienes el derecho de acceder, corregir y eliminar tus datos personales. Si deseas ejercer estos derechos, ponte en contacto con nuestro equipo de soporte. Cumpliremos con tus solicitudes según lo establecido por las leyes mexicanas. </p><br/><br/>
                                            <div className="date">2.7 Actualizaciones de la Política: </div>
                                            <p>Nos reservamos el derecho de actualizar nuestra Política de Privacidad para reflejar cambios en nuestras prácticas de recopilación y uso de datos. Te notificaremos sobre cambios significativos según lo requieran las leyes mexicanas. </p><br/><br/>
                                            <div className="date">2.8 Cumplimiento Legal: </div>
                                            <p>Aztecaz Hub Inmobiliario cumple con todas las leyes de privacidad mexicanas y proporciona la información requerida a las autoridades competentes según sea necesario para cumplir con las leyes aplicables. </p><br/><br/>
                                            <p>Al utilizar nuestros servicios, aceptas los términos y condiciones establecidos en este documento y nuestra Política de Privacidad. Si tienes preguntas o inquietudes, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
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