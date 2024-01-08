import Link from 'next/link'
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

export default function Settings() {
    return (
        <>
            <div className="walletwrap-top">
                <div className="inner-content">
                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Configuración</h2>
                    </div>
                    <div className="widget-edit mb-30 avatar">
                        <div className="title">
                            <h4>Personaliza tu Avatar</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form action="#">
                            <div className="uploadfile flex">
                                <img src="assets/images/avatar/avatar-07.png" alt="" />
                                <div>
                                    <h6>Subir nuevo avatar”</h6>
                                    <label>
                                        <input type="file" name="file" />
                                        <span className="text filename">No se detectaron archivos</span>
                                    </label>
                                    <p className="text">JPEG 100x100</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 profile">
                        <div className="title">
                            <h4>Edita tu Perfil</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="flex gap30">
                                <fieldset className="name">
                                    <label>Tu nombre*</label>
                                    <input type="text" id="name" placeholder="Enter your name" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="email">
                                    <label>Email*</label>
                                    <input type="email" id="email" placeholder="Your email" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="tel">
                                    <label>Teléfono</label>
                                    <input type="tel" id="tel" placeholder="Your phone" name="tel" tabIndex={2} aria-required="true" required />
                                </fieldset>
                            </div>
                            <fieldset className="message">
                                <label>Acerca de ti</label>
                                <textarea id="message" name="message" rows={4} placeholder="Say something about yourself" tabIndex={4} aria-required="true" required />
                            </fieldset>
                            <div className="flex gap30">
                                <fieldset className="name">
                                    <label>Nombre de Negocio o Empresa</label>
                                    <input type="text" id="name" placeholder="Enter your name" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="curency">
                                    <label>Divisa</label>
                                    <select className="select" name="curency" id="curency">
                                        <option>Us Dollar ($)</option>
                                        <option value="100$">100$</option>
                                        <option value="1000$">1000$</option>
                                        <option value="10000$">10000$</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="flex gap30">
                                <fieldset className="location">
                                    <label>Ubicación</label>
                                    <select className="select" name="location" id="location">
                                        <option>México</option>
                                        <option value="English">Español</option>
                                        <option value="Japan">English</option>
                                        <option value="China">China</option>
                                    </select>
                                </fieldset>
                                <fieldset className="address">
                                    <label>Dirección</label>
                                    <input type="text" id="address" placeholder="Your address" name="address" tabIndex={2} aria-required="true" required />
                                </fieldset>
                            </div>
                            <fieldset className="address">
                                <label>Dirección</label>
                                <input type="text" id="address" placeholder="Your address" name="address" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <div className="btn-submit">
                                <button className="w242 active mr-30">Cancel</button>
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 password">
                        <div className="title">
                            <h4>Cambiar Contraseña</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="flex gap30">
                                <fieldset className="tel">
                                    <label>Teléfono</label>
                                    <input type="tel" id="tel" placeholder="Your phone" name="tel" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="email">
                                    <label>Email</label>
                                    <input type="email" id="email" placeholder="Your email" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>
                            </div>
                            <fieldset className="password">
                                <label>Contraseña anterior</label>
                                <input type="text" id="password" placeholder="Enter your Old password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                                <label>Nueva Contraseña</label>
                                <input type="text" id="password" placeholder="Enter your New password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                                <label>Confirmar Contraseña</label>
                                <input type="text" id="password" placeholder="Confirm password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <div className="btn-submit">
                                <button className="w242 active mr-30">Cancel</button>
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 setting">
                        <div className="title">
                            <h4>Configura las Notificaciones</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Confirmación de Orden</h6>
                                    <p>notificación cuando obtengas una oferta</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Nuevos Activos</h6>
                                    <p>notificación de nuevos activos disponibles</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Pago</h6>
                                    <p>notificacón de pago aceptado</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Activo Aprovado</h6>
                                    <p>notificación de tu activo aprobado para tokenizar</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Notificaciones de Email</h6>
                                    <p>Activa las notificaciones en tu email</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="btn-submit">
                                <button className="w242 active mr-30">Cancel</button>
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
