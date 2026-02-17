import Link from 'next/link';

export default function Contact() {
    const numeroTelefono = '523221023028';

    const handleEmailClick = () => {
        const email = 'ayuda@aztecaz.xyz';
        const subject = 'Tengo interés en Aztecaz';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
            <div className="tf-section-2 widget-box-icon">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section-1">
                                <h2 className="tf-title pb-20">Siéntete como en casa</h2>
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
                        <div
                            data-wow-delay="0.1s"
                            className="wow fadeInUp col-md-4"
                            style={{ cursor: 'pointer'}}
                            onClick={handleEmailClick}>
                            <div className="box-icon-item">
                                <img src="/assets/images/box-icon/email.png" alt="" />
                                <h4>Send Email</h4>
                                <p>ayuda@aztecaz.xyz</p>
                            </div>
                        </div>
                        <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4" style={{ cursor: 'pointer'}}>
                            <Link href={`https://wa.me/${numeroTelefono}`} target="_blank" rel="noopener noreferrer">
                                <div className="box-icon-item">
                                    <img src="/assets/images/box-icon/phone.png" alt="" />
                                    <h4>WhatsApp</h4>
                                    <p>Conéctate con nosotros</p>
                                </div>
                            </Link>
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
        </>
    );
}
