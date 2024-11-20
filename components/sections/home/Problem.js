import { Element as ScrollElement } from 'react-scroll';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Problem() {
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

    return (
        <ScrollElement name="problema">
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
                                        <p>Muchas Barreras</p>
                                    </div>
                                    <p style={{ color: 'white'}} className="content">Enfrentamos una industria inmobiliaria ilíquida, 
                                    llena de intermediarios y barreras que excluyen a muchos. Queremos cambiar eso y 
                                    abrir las puertas para todos.</p>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp tf-box-icon style-1 relative mb-0">
                                    <div className="image">
                                        <p>Atascado en el Pasado</p>
                                    </div>
                                    <p style={{ color: 'white'}} className="content">Nos apoyamos en nuestra experiencia de 30 años y destacamos 
                                    cómo la tecnología blockchain es clave. Dreamhub es el socio tecnológico que hace 
                                    posible la revolución.</p>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp tf-box-icon style-1 relative mb-0">
                                    <div className="image">
                                        <p>Una nueva Normalidad</p>
                                    </div>
                                    <p style={{ color: 'white'}} className="content">Blockchain hace que la tokenización sea inclusiva, 
                                    brindando acceso global a cualquier inversor, sin importar el tamaño del capital 
                                    inicial. Nuestra experiencia y conocimientos respaldan esta transformación.</p>
                                </div>
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

            {/* Tarjetas de Información */}
            <div className="page-title about-us relative">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12 pages-title">
                            <div className="relative">
                                <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
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
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estadísticas Section */}
            <div className="tf-section-2 counter">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div style={{ padding: '30px' }}></div>
                            <h2 className="tf-title pb-30" style={{ textAlign: 'center'}}>Estadísticas</h2>
                            <div className="counter__body-1">
                                <div className="counter-1">
                                    <div className="number-counter">
                                        <span className="number">
                                            <CountUp end={200} duration={2} enableScrollSpy scrollSpyOnce suffix="B+" />
                                        </span>
                                    </div>
                                    <h6 className="title">Valor Antes de la crisis financiera 2008</h6>
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
                                        <span className="number">
                                            <CountUp end={300} duration={2} enableScrollSpy scrollSpyOnce suffix="B+" />
                                        </span>
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
                                        <span className="number">
                                            <CountUp end={2010} duration={2} enableScrollSpy scrollSpyOnce />
                                        </span>
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
                                        <span className="number">
                                            <CountUp end={87} duration={2} enableScrollSpy scrollSpyOnce suffix="%" />
                                        </span>
                                    </div>
                                    <h6 className="title">De todos los tokens de valor provienen del sector inmobiliario</h6>
                                </div>
                            </div>
                            <div style={{ padding: '30px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollElement>
    );
}
