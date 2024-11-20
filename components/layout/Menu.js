import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li>
                    <NextLink href="/" rel="home" style={{ color: 'black'}} > Inicio </NextLink>
                </li>
                <li>
                    <Link 
                        to="aztecaz" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        style={{ color: 'black', cursor: 'pointer'}}
                    > 
                        ¿Por qué Aztecaz? 
                    </Link>
                </li>
                <li>
                    <Link 
                        to="como" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        style={{ color: 'black', cursor: 'pointer'}}
                    > 
                        ¿Cómo? 
                    </Link>
                </li>
                <li>
                    <Link 
                        to="team" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        style={{ color: 'black', cursor: 'pointer'}}
                    > 
                        Team 
                    </Link>                   
                </li>
                <li>
                    <Link 
                        to="faq" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        style={{ color: 'black', cursor: 'pointer'}}
                    > 
                        FAQ 
                    </Link>
                </li>
                <li>
                    <Link 
                        to="contacto" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        style={{ color: 'black', cursor: 'pointer'}}
                    > 
                        Contacto 
                    </Link>
                </li>
            </ul>
        </>
    )
}
