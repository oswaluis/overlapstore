import Image from "next/image";
import Link from "next/link";
import {FaShoppingCart, FaSistrix, FaUserAlt} from 'react-icons/fa'

export function Header(){
    return(
        <header>
            <Image src='/logo.svg' alt='' width={100} height={50}></Image> 
            <nav>
            <ul>
                <li><Link href='#'>Quienes Somos</Link></li>
                <li><Link href='#'>Auto</Link></li>
                <li><Link href='#'>Moto</Link></li>
                <li><Link href='#'>Accesorios</Link></li>
                <li><Link href='#'>Contactanos</Link></li>
            </ul>
            </nav>
            <div className="commerceMenu">
            <ul>
                <li>
                <Link href='#'><FaSistrix/></Link>
                </li>
                <li>
                <Link href='#'><FaUserAlt/></Link>
                </li>
                <li>
                <Link href='#'><FaShoppingCart/></Link>
                </li>
            </ul>
            </div>
        </header>
                )
}

