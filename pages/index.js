import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import Action8 from "@/components/sections/Action8"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { useState } from "react"
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from "swiper/react"
import video from '../public/assets/planeta.mp4';
import fallbackImage from '../public/assets/fallback-image.jpeg';
import { TabView, TabPanel } from 'primereact/tabview';

const parallaxStyles = {
    backgroundImage: 'url("/assets/images/eagle1.png")', // Reemplaza con la ruta de tu imagen
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    right: '0px',
    height: '500px', // Ajusta la altura según tus necesidades
    display: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Color del texto sobre la imagen
    fontSize: '24px', // Tamaño del texto
  };

    // const para enviar email
    const email = 'ayuda@aztecaz.xyz';
    const subject = 'Tengo interés en Aztecaz';
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
}
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})


export default function Home() {

    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const [mensaje, setMensaje] = useState('Hola, me interesa invertir con Azetcaz');
    const [numeroTelefono, setNumeroTelefono] = useState('523221023028');

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

    const tab1HeaderTemplate = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={'tabview-title ${options.className}'}>
                <i className="pi pi-prime mr-2" />
                {options.titleElement}
            </button>
        );
    };

    const abrirWhatsapp = () => {
        const urlWhatsapp = `whatsapp://send?text=${encodeURIComponent(mensaje)}&phone=${numeroTelefono}`;
        window.location.href = urlWhatsapp;
    };

    return (
        <>


            <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">

{/* Cover */}
            <div className="flat-pages-title-home2 relative bgContainer">
            <div className="overlay"></div>
            {/* Background Video */}
            <video src={video} autoPlay loop muted playsInline onCanPlay={() => { /* Acciones adicionales si es necesario */ }}>
                <source src={video} type="video/mp4" />
                <img src={fallbackImage} alt="Imagen de respaldo" />
            </video>
            {/* end Background Video */}
            <div className="container">
                <div className="themesflat-container w-full">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="content">
                                <h1 data-wow-delay="0s" className="wow fadeInUp">Invierte en el futuro de la Tokenización Inmobiliaria</h1>
                                        <p data-wow-delay="0.1s" className="wow fadeInUp" style={{ fontSize: '26px', lineHeight: '1.1' }}>Aplicacamos herramientas blockchain para impulsar el crecimiento en el sector inmobiliario.</p>
                                <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex">
                                    <Link href="/coming-soon" className="tf-button style-1 h50 w190 mr-30">¡Empieza Ahora!<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
{/* end Cover */}

{/* Intro */}
                <div>
                    
                <div className="themesflat-container w-full white-section">
                <div style={{ padding: '50px' }}></div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="">
                                <h1 data-wow-delay="0s" className="wow fadeInUp" style={{ color: 'black' }}> En Aztecaz, aspiramos a revolucionar el panorama inmobiliario en México. 
                                        Nuestro gran propósito es convertirnos en el pionero de la tokenización de activos, 
                                        desafiando las limitadas oportunidades que actualmente enfrenta nuestra comunidad. 
                                        Estamos aquí para transformar la forma en que se invierte en bienes raíces, brindando nuevas 
                                        y emocionantes posibilidades a todos.</h1>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: '80px' }}></div>
                </div>
{/* end Intro */}

{/* Problema */}
<Element name="problema">
<div style={{ padding: '50px' }}></div>
<div className="tf-section create-sell">
                <div className="themesflat-container">
                    <div className="row pl-2-5">
                        <div className="col-md-12">
                            <div className="heading-section">
                                <h2 className="tf-title pb-30">Factores clave del <br /> sector inmobiliario</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="grid-box-icon">
                                <div data-wow-delay="0s" className="wow fadeInUp tf-box-icon style-1 relative mb-0">
                                    <div className="image">
                                     {/*   <img src="/assets/images/box-icon/icon-01.png" alt="" /> */}
                                        <p>Muchas Barreras</p>
                                    </div>
                                   {/* <h4 className="heading"><Link href="/contact-us">Título</Link></h4> */}
                                    <p style={{ color: 'white'}} className="content">Enfrentamos una industria inmobiliaria ilíquida, 
                                    llena de intermediarios y barreras que excluyen a muchos. Queremos cambiar eso y 
                                    abrir las puertas para todos.</p>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp tf-box-icon style-1 relative mb-0">
                                    <div className="image">
                                      {/*  <img src="/assets/images/box-icon/icon-02.png" alt="" /> */}
                                        <p>Atascado en el Pasado</p>
                                    </div>
                                  {/*  <h4 className="heading"><Link href="/contact-us">Create collection</Link></h4> */}
                                    <p style={{ color: 'white'}} className="content">Nos apoyamos en nuestra experiencia de 30 años y destacamos 
                                    cómo la tecnología blockchain es clave. Dreamhub es el socio tecnológico que hace 
                                    posible la revolución.</p>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp tf-box-icon style-1 relative mb-0">
                                    <div className="image">
                                      {/*  <img src="/assets/images/box-icon/icon-03.png" alt="" /> */}
                                        <p>Una nueva Normalidad</p>
                                    </div>
                                  {/*  <h4 className="heading"><Link href="/contact-us">Add your NFTs</Link></h4> */}
                                    <p style={{ color: 'white'}} className="content">Blockchain hace que la tokenización sea inclusiva, 
                                    brindando acceso global a cualquier inversor, sin importar el tamaño del capital 
                                    inicial. Nuestra experiencia y conocimientos respaldan esta transformación.</p>
                                </div>
                              {/*  <div data-wow-delay="0.3s" className="wow fadeInUp tf-box-icon style-1 relative mb-0">
                                    <div className="image">
                                        <img src="/assets/images/box-icon/icon-04.png" alt="" /> 
                                        <p>Step 4</p>
                                    </div>
                                   <h4 className="heading"><Link href="/contact-us">Sell your NFTs</Link></h4> 
                                    <p className="content">Abrimos el mercado inmobiliario a todos, permitiendo que 
                                    cualquiera pueda participar en la tokenización de activos, brindando flexibilidad y 
                                    liquidez.</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-icon-img">
                                <img src="/assets/images/backgroup-section/img-02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-title about-us relative">
                        <div className="themesflat-container">
                            <div className="row">
                            <div className="col-md-12">
                                    <div className="heading-section-1">
                                    </div>
                                    <div style={{ padding: '10px' }}></div>
                                </div>
                                <div className="col-12 pages-title">
                                    <div className="icon-background">
                                        <img className="absolute item2" src="/assets/images/item-background/item10.png" alt="" />
                                        <img className="absolute item4" src="/assets/images/item-background/item13.png" alt="" />
                                    </div>
                                    <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                                <img src="/assets/images/realestate4.jpeg" alt="" />
                                                        </div>
                                                        <div className="card-info">
                                                                <p>El crecimiento de los Fideicomisos de Inversión en Bienes Raíces 
                                                                    (REITs) durante la década de 1990 fue sin precedentes y probablemente 
                                                                    posicionó la clase de activos de manera permanente en el panorama de 
                                                                    inversiones más amplio. Según la 
                                                                    Asociación Nacional de Fideicomisos de Inversión en Bienes Raíces 
                                                                    (NAREIT), en 1990 había 119 REITs con una capitalización de mercado 
                                                                    total de $8.7 mil millones.</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                                <img src="/assets/images/realestate7.jpeg" alt="" />
                                                        </div>
                                                        <div className="card-info">
                                                        <p>El valor de los activos inmobiliarios a nivel global aumentó un 5% en 2020 
                                                            hasta alcanzar los 326,5 billones de dólares (unos 280 billones de euros), 
                                                            lo que convierte al inmobiliario en la fuente de riqueza mundial más relevante, 
                                                            con más valor que todas las acciones y los títulos de deuda combinados.</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                                <img src="/assets/images/realestate.jpeg" alt="" />
                                                        </div>
                                                        <div className="card-info">
                                                        <p style={{ fontSize: '12px' }}>El mercado inmobiliario, históricamente vinculado a la economía, ha 
                                                            experimentado transformaciones significativas. Aunque los activos 
                                                            inmobiliarios globales valen US$ 326,5 billones, el acceso a este mercado 
                                                            ha sido limitado por el alto costo de inversión. Sin embargo, nuevas 
                                                            tecnologías, como la tokenización, han surgido para cambiar esta dinámica. 
                                                            Al fraccionar el valor de la propiedad, la tokenización permite la 
                                                            participación de inversores principiantes con menos capital, democratizando 
                                                            el acceso al sector y creando nuevas oportunidades de inversión.</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 counter">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter__body-1">
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={200} data-inviewport="yes"><CounterUp count={200} time={1} /></span>B+
                                            </div>
                                            <h6 className="title">Velor Antes de la crisis financiera 2008</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={300} data-inviewport="yes"><CounterUp count={300} time={1} /></span>B+
                                            </div>
                                            <h6 className="title">Después de 2009 el valor del mercado inmobiliario</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={200} data-to={2000} data-inviewport="yes"><CounterUp count={2} time={1} /></span>010
                                            </div>
                                            <h6 className="title">Adopción de tecnologías; AI, AR, Blockchain</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={87} data-inviewport="yes"><CounterUp count={87} time={1} /></span>%
                                            </div>
                                            <h6 className="title">De todos los tokens de valor provienen del sector inmobiliario</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Element>
{/* End Problema */}

{/* Experiencia part1 */}
            <Element name="experiencia">
                <div className="themesflat-container w-full white-section">
                <div style={{ padding: '50px' }}></div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="">
                                <h1 data-wow-delay="0s" className="wow fadeInUp" style={{ color: 'black' }} >Desatamos el conocimiento acumulado, 
                                datos exclusivos y tecnología avanzada. En cada paso, fusionamos innovación y experiencia para abrir nuevas fronteras en el éxito financiero.</h1>
                                <div style={{ margin: '10px' }}></div>
                                <p style={{ fontSize: '26px' }} data-wow-delay="0.1s" className="wow fadeInUp">Vamos más allá de las inversiones convencionales y 
                                reconociendo que, con el tiempo, la inflación puede afectar el valor de propiedad.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: '50px' }}></div>
                    <div className="icon-background">
                                        <img className="absolute item2" src="/assets/images/eagle1.png" style={{ left: '0px', position: 'absolute' }} />
                                    </div>
                    <div style={{ padding: '100px' }}></div>
                </div>
{/* end Experiencia part1 */}

{/* Experiencia part2 */}
<div className="div-black" style={{ backgroundColor: 'white', padding: '100px'}}>
            <h1 style={{ color: 'black', fontSize: '52px', textAlign: 'right' }} data-wow-delay="0.1s" className="wow fadeInUp white-txt">Nuestra experiencia,</h1>
            <h1 style={{ color: 'black', fontSize: '52px', textAlign: 'right' }} data-wow-delay="0.1s" className="wow fadeInUp white-txt">disponible como</h1>
            <h1 style={{ color: 'black', fontSize: '52px', textAlign: 'right' }} data-wow-delay="0.1s" className="wow fadeInUp white-txt">servicio.</h1>
            <div style={{ margin: '10px' }}></div>
                <div className="div-text-slider">
                            
                              {/*  <p style={{ fontSize: '26px', color: 'white'}} data-wow-delay="0s" className="wow fadeInUp" >El modelo de inversión inmobiliario que utilizamos como servicio 
                                permite a inversores de todos los tamaños aprovechar la tecnología y servicios bajo demanda para adquirir, 
                                gestionar y vender propiedades a gran escala con mayor precisión, rapidez y eficiencia que 
                                los métodos tradicionales</p>
                                <div style={{ margin: '10px' }}></div> */}
{/* Table View */}
<TabView>
<TabPanel header="Integral" headerTemplate={tab1HeaderTemplate}>
        <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
        Nuestro modelo abarca cada aspecto, desde construcción hasta diseño y fondeo. Creemos en experiencias inigualables, 
        brindando soporte completo para cada proyecto. Ya sea construir desde cero o transformar espacios, nuestro 
        enfoque integral asegura un viaje sin complicaciones hacia el futuro del bienes raíces. ¡Estamos aquí para 
        materializar tus sueños! 🏗️✨
        </p>
        <div style={{ padding: '10px' }}></div>
        <button className="tabview-title" style={{ fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'}}  onClick={abrirWhatsapp}>Personaliza tu experiencia</button>
    </TabPanel>
    <TabPanel header="Revolución" headerTemplate={tab1HeaderTemplate}>
        <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
        Con Aztecaz,el acceso es más amplio y la gestión de inversiones inmobiliarias es más fácil. Estamos redefiniendo 
        completamente cómo ganas en el mundo de las rentas inmobiliarias. ¡Prepárate para la revolución con Aztecaz! 🚀
        </p>
    </TabPanel>
    <TabPanel header="Versatilidad" headerTemplate={tab1HeaderTemplate}>
        <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
        El modelo de inversión inmobiliario que utilizamos como servicio permite a inversores de todos los tamaños aprovechar la tecnología y servicios bajo demanda para adquirir, 
        gestionar y vender propiedades a gran escala con mayor precisión, rapidez y eficiencia que los métodos tradicionales
        </p>
    </TabPanel>
    <TabPanel header="Oportunidad" headerTemplate={tab1HeaderTemplate}>
        <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
        En nuestro modelo único, estamos aquí para facilitar el camino de agencias y agentes inmobiliarios. Simplificamos procesos y 
        desbloqueamos oportunidades, convirtiendo la búsqueda del lugar perfecto para comprar o vender en una 
        experiencia cósmica. Con tecnología avanzada, estamos transformando el mundo inmobiliario. ¡Bienvenido al 
        futuro de los bienes raíces! 🌌🏡
        </p>
    </TabPanel>
    <TabPanel header="Para todos" headerTemplate={tab1HeaderTemplate}>
        <p style={{ fontSize: '22px', color: 'white'}} data-wow-delay="0s" className="m-2 wow fadeInUp mobile-txt-18">
        En el mundo de las inversiones, nuestro modelo es para todos: desde los pequeños aventureros hasta los medianos astutos 
        y los grandes titanes. Aztecaz tiene oportunidades emocionantes y diversificadas para cada inversor, ya sea 
        principiante o experto. ¡Bienvenido a un nuevo horizonte de posibilidades financieras! 🚀💼
        </p>
    </TabPanel>
</TabView>
{/* Table View */}
                        <div className="logo-rotate logo-rotador">
                                    <div className="logoimg">
                                        <img src="/assets/images/logo/icon.png" alt="" />
                                    </div>
                                    <img className="logotext" src="/assets/images/item-background/item6-text.png" alt="" />
                                </div>
                    </div>
                </div>
                </Element>
{/* end Experiencia part2 */}

{/* Steps Soluciones */}
<Element name="solución">
<div className="mobile-none" style={{ padding: '100px' }}></div>
<div className="tf-section create-sell">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section justify-content-center">
                                <h2 className="tf-title pb-30">Desata el potencial de tu inversión con la tecnología, siguiendo los pasos de los titanes financieros.</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-01.png" alt="" />
                                    <p>Paso 1</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Descubrimiento</Link></h4>
                                <p className="content">Identifica las oportunidades más destacadas para la adquisición</p>
                                <div className="arrow">
                                    <svg width={114} height={114} viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_625_20131)">
                                            <path d="M13.0682 58.6163C14.3723 57.8473 15.7186 57.1206 17.0509 56.436L16.1333 54.65C14.7448 55.3625 13.3845 56.1032 12.0524 56.9002L13.0683 58.6444L13.0682 58.6163ZM21.1465 54.4527C22.5352 53.8244 23.9381 53.2383 25.3551 52.6944L24.6057 50.8245C23.1607 51.3965 21.7298 51.9825 20.313 52.6107L21.1324 54.4386L21.1465 54.4527ZM29.6344 51.1469C31.0797 50.6592 32.5251 50.2277 33.9986 49.8244L33.4458 47.8989C31.9582 48.3162 30.4707 48.7616 28.9974 49.2493L29.6344 51.1469ZM38.4195 48.6986C39.9073 48.3656 41.3952 48.0606 42.8972 47.7977L42.5408 45.8166C41.0107 46.0793 39.4948 46.3842 37.9649 46.7312L38.4195 48.6986ZM47.4036 47.1216C48.9199 46.929 50.4222 46.7786 51.9527 46.6563L51.7788 44.6615C50.2202 44.7838 48.6898 44.9342 47.1455 45.1267L47.4036 47.1216ZM56.5024 46.4156C58.019 46.3635 59.5498 46.3536 61.0666 46.3857L61.0753 44.3774C59.5164 44.3592 57.9715 44.3551 56.4128 44.4211L56.4884 46.4297L56.5024 46.4156ZM65.6314 46.5524C67.1485 46.6407 68.6656 46.7852 70.1829 46.9578L70.4022 44.9641C68.8569 44.7915 67.2977 44.6609 65.7526 44.5725L65.6315 46.5805L65.6314 46.5524ZM74.7067 47.5598C76.2101 47.8025 77.7135 48.0734 79.203 48.3863L79.591 46.4212C78.0734 46.1082 76.5278 45.8232 74.9963 45.5803L74.6927 47.5738L74.7067 47.5598ZM83.6578 49.4235C85.1335 49.8066 86.5952 50.2319 88.057 50.6852L88.6418 48.7767C87.1659 48.3093 85.648 47.8839 84.1582 47.4867L83.6578 49.4235ZM92.3866 52.1574C93.8064 52.6808 95.2405 53.2464 96.6465 53.84L97.428 51.9883C95.9938 51.3665 94.5458 50.8149 93.0978 50.2633L92.4147 52.1574L92.3866 52.1574ZM100.795 55.7471C102.159 56.4108 103.509 57.1166 104.845 57.8645L105.809 56.1116C104.445 55.3636 103.067 54.6296 101.661 53.9517L100.795 55.7471Z" fill="#919191" />
                                            <path d="M95.5845 61.1824L95.0597 59.2569L104.589 56.6842L101.292 47.336L103.186 46.681L107.205 58.0676L95.5845 61.1824Z" fill="#919191" />
                                            <circle cx="8.69433" cy="59.7296" r="3.91825" transform="rotate(-135 8.69433 59.7296)" stroke="#919191" strokeWidth={2} />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_625_20131">
                                                <rect width="76.2328" height="83.6102" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.026 54.5132)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center type-1">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-02.png" alt="" />
                                    <p>Paso 2</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Tokenización Mastra</Link></h4>
                                <p className="content">Convertimos el vehículo en tokens, permitiendo la participación de cualquier inversor.</p>
                                <div className="arrow">
                                    <svg width={114} height={114} viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_625_20131)">
                                            <path d="M13.0682 58.6163C14.3723 57.8473 15.7186 57.1206 17.0509 56.436L16.1333 54.65C14.7448 55.3625 13.3845 56.1032 12.0524 56.9002L13.0683 58.6444L13.0682 58.6163ZM21.1465 54.4527C22.5352 53.8244 23.9381 53.2383 25.3551 52.6944L24.6057 50.8245C23.1607 51.3965 21.7298 51.9825 20.313 52.6107L21.1324 54.4386L21.1465 54.4527ZM29.6344 51.1469C31.0797 50.6592 32.5251 50.2277 33.9986 49.8244L33.4458 47.8989C31.9582 48.3162 30.4707 48.7616 28.9974 49.2493L29.6344 51.1469ZM38.4195 48.6986C39.9073 48.3656 41.3952 48.0606 42.8972 47.7977L42.5408 45.8166C41.0107 46.0793 39.4948 46.3842 37.9649 46.7312L38.4195 48.6986ZM47.4036 47.1216C48.9199 46.929 50.4222 46.7786 51.9527 46.6563L51.7788 44.6615C50.2202 44.7838 48.6898 44.9342 47.1455 45.1267L47.4036 47.1216ZM56.5024 46.4156C58.019 46.3635 59.5498 46.3536 61.0666 46.3857L61.0753 44.3774C59.5164 44.3592 57.9715 44.3551 56.4128 44.4211L56.4884 46.4297L56.5024 46.4156ZM65.6314 46.5524C67.1485 46.6407 68.6656 46.7852 70.1829 46.9578L70.4022 44.9641C68.8569 44.7915 67.2977 44.6609 65.7526 44.5725L65.6315 46.5805L65.6314 46.5524ZM74.7067 47.5598C76.2101 47.8025 77.7135 48.0734 79.203 48.3863L79.591 46.4212C78.0734 46.1082 76.5278 45.8232 74.9963 45.5803L74.6927 47.5738L74.7067 47.5598ZM83.6578 49.4235C85.1335 49.8066 86.5952 50.2319 88.057 50.6852L88.6418 48.7767C87.1659 48.3093 85.648 47.8839 84.1582 47.4867L83.6578 49.4235ZM92.3866 52.1574C93.8064 52.6808 95.2405 53.2464 96.6465 53.84L97.428 51.9883C95.9938 51.3665 94.5458 50.8149 93.0978 50.2633L92.4147 52.1574L92.3866 52.1574ZM100.795 55.7471C102.159 56.4108 103.509 57.1166 104.845 57.8645L105.809 56.1116C104.445 55.3636 103.067 54.6296 101.661 53.9517L100.795 55.7471Z" fill="#919191" />
                                            <path d="M95.5845 61.1824L95.0597 59.2569L104.589 56.6842L101.292 47.336L103.186 46.681L107.205 58.0676L95.5845 61.1824Z" fill="#919191" />
                                            <circle cx="8.69433" cy="59.7296" r="3.91825" transform="rotate(-135 8.69433 59.7296)" stroke="#919191" strokeWidth={2} />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_625_20131">
                                                <rect width="76.2328" height="83.6102" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.026 54.5132)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-03.png" alt="" />
                                    <p>Paso 3</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Frutos Financieros</Link></h4>
                                <p className="content">Recolección de los beneficios generados por tus ingresos pasivos y/o ventas directas.</p>
                                <div className="arrow">
                                    <svg width={114} height={114} viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_625_20131)">
                                            <path d="M13.0682 58.6163C14.3723 57.8473 15.7186 57.1206 17.0509 56.436L16.1333 54.65C14.7448 55.3625 13.3845 56.1032 12.0524 56.9002L13.0683 58.6444L13.0682 58.6163ZM21.1465 54.4527C22.5352 53.8244 23.9381 53.2383 25.3551 52.6944L24.6057 50.8245C23.1607 51.3965 21.7298 51.9825 20.313 52.6107L21.1324 54.4386L21.1465 54.4527ZM29.6344 51.1469C31.0797 50.6592 32.5251 50.2277 33.9986 49.8244L33.4458 47.8989C31.9582 48.3162 30.4707 48.7616 28.9974 49.2493L29.6344 51.1469ZM38.4195 48.6986C39.9073 48.3656 41.3952 48.0606 42.8972 47.7977L42.5408 45.8166C41.0107 46.0793 39.4948 46.3842 37.9649 46.7312L38.4195 48.6986ZM47.4036 47.1216C48.9199 46.929 50.4222 46.7786 51.9527 46.6563L51.7788 44.6615C50.2202 44.7838 48.6898 44.9342 47.1455 45.1267L47.4036 47.1216ZM56.5024 46.4156C58.019 46.3635 59.5498 46.3536 61.0666 46.3857L61.0753 44.3774C59.5164 44.3592 57.9715 44.3551 56.4128 44.4211L56.4884 46.4297L56.5024 46.4156ZM65.6314 46.5524C67.1485 46.6407 68.6656 46.7852 70.1829 46.9578L70.4022 44.9641C68.8569 44.7915 67.2977 44.6609 65.7526 44.5725L65.6315 46.5805L65.6314 46.5524ZM74.7067 47.5598C76.2101 47.8025 77.7135 48.0734 79.203 48.3863L79.591 46.4212C78.0734 46.1082 76.5278 45.8232 74.9963 45.5803L74.6927 47.5738L74.7067 47.5598ZM83.6578 49.4235C85.1335 49.8066 86.5952 50.2319 88.057 50.6852L88.6418 48.7767C87.1659 48.3093 85.648 47.8839 84.1582 47.4867L83.6578 49.4235ZM92.3866 52.1574C93.8064 52.6808 95.2405 53.2464 96.6465 53.84L97.428 51.9883C95.9938 51.3665 94.5458 50.8149 93.0978 50.2633L92.4147 52.1574L92.3866 52.1574ZM100.795 55.7471C102.159 56.4108 103.509 57.1166 104.845 57.8645L105.809 56.1116C104.445 55.3636 103.067 54.6296 101.661 53.9517L100.795 55.7471Z" fill="#919191" />
                                            <path d="M95.5845 61.1824L95.0597 59.2569L104.589 56.6842L101.292 47.336L103.186 46.681L107.205 58.0676L95.5845 61.1824Z" fill="#919191" />
                                            <circle cx="8.69433" cy="59.7296" r="3.91825" transform="rotate(-135 8.69433 59.7296)" stroke="#919191" strokeWidth={2} />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_625_20131">
                                                <rect width="76.2328" height="83.6102" fill="white" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 113.026 54.5132)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-04.png" alt="" />
                                    <p>Paso 4</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us">Ciclo de Crecimiento</Link></h4>
                                <p className="content"> Reinvierte tus ganancias y haz florecer tu inversión inicial.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                                <div className="col-12">
                                    <Link href="/coming-soon" className="tf-button style-1 h50 w190 m-auto">Empieza ya!<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
            <div style={{ padding: '50px' }}></div>
            </Element>
{/* end Steps Soluciones */}

<div style={{ padding: '50px' }}></div>
                    <Element name="aztecaz">
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">¿Por qué ahora?</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/Graph1.webp" alt="" />
                                        <div className="title"><Link href="#">Crecimiento ≥ Inlfación</Link></div>
                                        <p style={{ fontSize: '16px' }}>Históricamente, el crecimiento de los precios de las viviendas 
                                        y los alquileres ha superado la tasa de inflación.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/Graph2.webp" alt="" />
                                        <div className="title"><Link href="#">ROI en Aumento</Link></div>
                                        <p style={{ fontSize: '16px' }}>Desde 2016, los rendimientos de las viviendas 
                                         en alquiler han superado a la mayoría de los sectores inmobiliarios.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/Graph3.webp" alt="" />
                                        <div className="title"><Link href="#">Desbalance de Inventario</Link></div>
                                        <p style={{ fontSize: '16px' }}>La oferta de viviendas unifamiliares ha estado insuficientemente abastecida durante 
                                            más de una década</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Element>
{/* end aztecaz */}

{/* team */}
                    <Element name="team">
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
                                        <img src="/assets/images/avatar/team-01.png" alt="" />
                                        <div className="name"><Link href="#">Sue Del Toro</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-02.png" alt="" />
                                        <div className="name"><Link href="#">Celina Del Toro</Link></div>
                                        <div className="info">Rental Manager</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-03.png" alt="" />
                                        <div className="name"><Link href="#">Erwin Mayoral</Link></div>
                                        <div className="info">Real Estate Expert</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-04.png" alt="" />
                                        <div className="name"><Link href="#">Bruce Wayne</Link></div>
                                        <div className="info">Cave Owner</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>       
                        </div>
                    </div>
                    </Element>
{/* end team */}

{/* faq */}
                    <Element name="faq">
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
                                                <p>Para mantener seguros tus NFTs, utiliza billeteras digitales seguras y resguarda tus claves privadas. Evita compartir información sensible y verifica la autenticidad de los contratos inteligentes antes de realizar transacciones. La seguridad en el almacenamiento de claves y la precaución son fundamentales.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. ¿Qué es blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>Blockchain es una tecnología de registro distribuido que garantiza la transparencia y seguridad de las transacciones. Consiste en bloques encadenados, cada uno conteniendo datos y un hash del bloque anterior. Esta estructura inmutable y descentralizada es la base de la confianza en diversas aplicaciones, como las criptomonedas y la tokenización.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. ¿Qué es un NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Un NFT, o Token No Fungible, es una representación única y verificable de un activo, respaldada por blockchain. Cada NFT tiene información exclusiva que lo distingue de otros, lo que lo convierte en una herramienta invaluable para autenticar y comercializar activos digitales.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. ¿Cómo configuro mi cuenta?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>Configurar tu cuenta es sencillo. Ve a "login" en la barra de navegción, sigue los pasos de registro y completa la información necesaria. Asegúrate de proteger tus credenciales y seguir las indicaciones para acceder fácilmente a tu cuenta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. ¿Qué es la tokenización?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>La tokenización es el proceso de convertir activos físicos o digitales en tokens en una cadena de bloques. Estos tokens son representaciones digitales únicas que pueden ser transferibles, negociables y verificables de manera eficiente, ofreciendo nuevas oportunidades de inversión y comercio.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. ¿Qué puedo tokenizar?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Puedes tokenizar una variedad de activos, incluyendo bienes raíces, obras de arte, coleccionables y más. La tokenización permite fraccionar la propiedad, facilitando la participación de inversores en activos que anteriormente podrían haber estado fuera de su alcance.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. ¿Por qué debería tokenizar mis activos?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>La tokenización proporciona liquidez, accesibilidad y transparencia. Al tokenizar, amplías el acceso a inversionistas, facilitas la negociación de fracciones de activos y mejoras la eficiencia en la gestión de activos.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. ¿Por qué Aztecaz para mis activos tokenizados?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Aztecaz ofrece una plataforma segura y eficiente para la comercialización de activos tokenizados. Nuestra experiencia en blockchain y en el mercado inmobiliario garantiza una transición fluida hacia la tokenización, brindando confianza y respaldo a tus inversiones.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. ¿Ventajas de combinar real estate vs real estate blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>Combinar bienes raíces convencionales con la tokenización proporciona liquidez instantánea, fracciona la propiedad para atraer a más inversores y agiliza los procesos. Esto democratiza el acceso a inversiones inmobiliarias y crea oportunidades innovadoras en el mercado.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="content">
                                        <div className="text">¿Aún te quedan dudas?</div>
                                        <p>Si no encuentras lo que buscas, entonces</p> <p className="tf-color" style={{ cursor: 'pointer'}} onClick={abrirWhatsapp}>chatea con alguien del equipo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Element>
{/* end faq */}

                        </div>        
                        <Action8 />
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />

{/* contact */}
            <Element name="contacto">
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-20">Sientete como en casa</h2>
                                        <p className="pb-40">Conéctate con el futuro. Contáctanos ahora y descubre cómo la 
                                        innovación tecnológica redefine tu experiencia inmobiliaria. ¡Bienvenido al mañana hoy!</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/address.png" alt="" />
                                        <h4>Headquarters</h4>
                                        <p>Bahía de Banderas, Nayarit.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4" style={{ cursor: 'pointer'}} href={mailtoLink}>
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/email.png" alt="" />
                                        <h4>Send Email</h4>
                                        <p>ayuda@aztecaz.xyz</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4" style={{ cursor: 'pointer'}} onClick={abrirWhatsapp}>
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/phone.png" alt="" />
                                        <h4>WhatsApp</h4>
                                        <p>Conéctate con nosotros</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-20">No seas un extraño</h2>
                                        <p className="pb-40">¿Tienes alguna pregunta? ¿Necesitas ayuda? No dudes en escribirnos. Estamos aquí para asistirte.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <form id="commentform" className="comment-form">
                                        <div className="flex gap30">
                                            <fieldset className="name">
                                                <input className="style-1" type="text" id="name" placeholder="Tu nombre*" name="name" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="email">
                                                <input className="style-1" type="email" id="email" placeholder="Email*" name="email" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="subject">
                                                <input className="style-1" type="text" id="subject" placeholder="Tema" name="subject" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                        </div>
                                        <fieldset className="message">
                                            <textarea className="style-1" id="message" name="message" rows={4} placeholder="Tu mensaje*" tabIndex={4} aria-required="true" required />
                                        </fieldset>
                                        <div className="btn-submit">
                                            <button className="tf-button style-1" type="submit">Enviar mensaje <i className="icon-arrow-up-right2" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
{/* end contact*/}

            </Layout>
        </>
    )
}
