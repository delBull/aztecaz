import Link from 'next/link';
import { Element as ScrollElement } from 'react-scroll';
import { TabView, TabPanel } from 'primereact/tabview';

export default function WhyAztecaz() {
    const numeroTelefono = '523221023028';

    const tab1HeaderTemplate = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={`tabview-title ${options.className}`} style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '14px', fontWeight: '500' }}>
                <i className="pi pi-prime mr-2" />
                {options.titleElement}
            </button>
        );
    };

    return (
        <ScrollElement name="aztecaz">
            {/* Primera parte: Desatamos el conocimiento */}
            <div className="themesflat-container w-full">
                <div style={{ padding: '50px' }}></div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="">
                            <h2 data-wow-delay="0s" className="wow fadeInUp tf-title" style={{ color: 'white', marginBottom: '20px' }}>
                                Desatamos el conocimiento acumulado, datos exclusivos y tecnología avanzada.
                            </h2>
                            <p data-wow-delay="0.1s" className="wow fadeInUp content" style={{ color: 'white', fontSize: '18px', lineHeight: '1.6' }}>
                                En cada paso, fusionamos innovación y experiencia para abrir nuevas fronteras en el éxito financiero.
                            </p>
                            <div style={{ margin: '10px' }}></div>
                            <p style={{ fontSize: '26px' }} data-wow-delay="0.1s" className="wow fadeInUp">
                                Vamos más allá de las inversiones convencionales y reconociendo que, con el tiempo,
                                la inflación puede afectar el valor de propiedad.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '50px' }}></div>
                <div className="icon-background">
                    <img
                        className="absolute item2 eagle-img"
                        src="/assets/images/eagle1.png"
                        alt="Eagle background"
                    />
                </div>
                <div style={{ padding: '100px' }}></div>
            </div>

            {/* Segunda parte: Nuestra Experiencia Como Servicio */}
            <div className="div-black" style={{ backgroundColor: '#0E0E17', padding: '100px' }}>
                <h2 style={{ color: 'white', fontSize: '52px', textAlign: 'right', lineHeight: '1.1', fontWeight: '800' }} data-wow-delay="0.1s" className="wow fadeInUp white-txt tf-title">
                    Nuestra experiencia,<br />disponible como<br />servicio.
                </h2>
                <div style={{ margin: '10px' }}></div>
                <div className="div-text-slider">
                    <TabView className="custom-tabview">
                        <TabPanel header="Integral" headerTemplate={tab1HeaderTemplate}>
                            <p style={{ fontSize: '22px', color: 'white' }} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
                                Nuestro modelo abarca cada aspecto, desde construcción hasta diseño y fondeo. Creemos en experiencias inigualables,
                                brindando soporte completo para cada proyecto. Ya sea construir desde cero o transformar espacios, nuestro
                                enfoque integral asegura un viaje sin complicaciones hacia el futuro del bienes raíces. ¡Estamos aquí para
                                materializar tus sueños! 🏗️✨
                            </p>
                            <div style={{ padding: '10px' }}></div>
                            <Link href={`https://wa.me/${numeroTelefono}`} target="_blank" rel="noopener noreferrer">
                                <button className="tabview-title">Personaliza tu experiencia</button>
                            </Link>
                        </TabPanel>
                        <TabPanel header="Revolución" headerTemplate={tab1HeaderTemplate}>
                            <p style={{ fontSize: '22px', color: 'white' }} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
                                Con Aztecaz, el acceso es más amplio y la gestión de inversiones inmobiliarias es más fácil. Estamos redefiniendo
                                completamente cómo ganas en el mundo de las rentas inmobiliarias. ¡Prepárate para la revolución con Aztecaz! 🚀
                            </p>
                        </TabPanel>
                        <TabPanel header="Versatilidad" headerTemplate={tab1HeaderTemplate}>
                            <p style={{ fontSize: '22px', color: 'white' }} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
                                El modelo de inversión inmobiliario que utilizamos como servicio permite a inversores de todos los tamaños aprovechar la tecnología y servicios bajo demanda para adquirir,
                                gestionar y vender propiedades a gran escala con mayor precisión, rapidez y eficiencia que los métodos tradicionales
                            </p>
                        </TabPanel>
                        <TabPanel header="Oportunidad" headerTemplate={tab1HeaderTemplate}>
                            <p style={{ fontSize: '22px', color: 'white' }} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
                                En nuestro modelo único, estamos aquí para facilitar el camino de agencias y agentes inmobiliarios. Simplificamos procesos y
                                desbloqueamos oportunidades, convirtiendo la búsqueda del lugar perfecto para comprar o vender en una
                                experiencia cósmica. Con tecnología avanzada, estamos transformando el mundo inmobiliario. ¡Bienvenido al
                                futuro de los bienes raíces! 🌌🏡
                            </p>
                        </TabPanel>
                        <TabPanel header="Para todos" headerTemplate={tab1HeaderTemplate}>
                            <p style={{ fontSize: '22px', color: 'white' }} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
                                En el mundo de las inversiones, nuestro modelo es para todos: desde los pequeños aventureros hasta los medianos astutos
                                y los grandes titanes. Aztecaz tiene oportunidades emocionantes y diversificadas para cada inversor, ya sea
                                principiante o experto. ¡Bienvenido a un nuevo horizonte de posibilidades financieras! 🚀💼
                            </p>
                        </TabPanel>
                    </TabView>
                    <div className="logo-rotate logo-rotador">
                        <div className="logoimg">
                            <img src="/assets/images/logo/icon.png" alt="" />
                        </div>
                        <img className="logotext" src="/assets/images/item-background/item6-text.png" alt="" />
                    </div>
                </div>
            </div>
        </ScrollElement>
    );
}
