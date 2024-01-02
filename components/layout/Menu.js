
import { Link, } from 'react-scroll';
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul id="menu-primary-menu" className="menu">
                <li>
                    <Link href="/" rel="home" style={{ color: 'black'}} > Inicio </Link>
                </li>
                <li>
                    <Link to="problema" smooth={true} duration={500} offset={-0} style={{ color: 'black'}}> El Problema </Link>
                </li>
                <li>
                    <Link to="experiencia" smooth={true} duration={500} offset={-0} style={{ color: 'black'}}> ¿Por qué Aztecaz? </Link>
                </li>
                <li>
                    <Link to="solución" smooth={true} duration={500} offset={-0} style={{ color: 'black'}}> ¿Cómo? </Link>
                </li>
                <li>
                   <Link to="team" smooth={true} duration={500} offset={-0} style={{ color: 'black'}}> Team </Link>                   
                </li>
                <li>
                    <Link to="faq" smooth={true} duration={500} offset={-0} style={{ color: 'black'}}> FAQ </Link>
                </li>
                <li>
                    <Link to="contacto" smooth={true} duration={500} offset={-0} style={{ color: 'black'}}> Contacto </Link>
                </li>
                <li>
                    <Link href="/" style={{ color: 'black'}}> Blog </Link>
                    
                </li>
            </ul>
        </>
    )
}
