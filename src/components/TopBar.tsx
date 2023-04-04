import Image from "next/image";
import Link from "next/link";
import {FaPhone, FaLocationArrow, FaClock, FaFacebook, FaInstagram, FaGoogle} from 'react-icons/fa'

export function TopBar(){
    return(
        <div>
            <ul>
                <li>
                    <Link href='#'><FaPhone/>+58 9 11 12345678</Link>
                </li>
                <li>
                    <Link href='#'><FaLocationArrow/> Argentina, casa de Cesar</Link>
                </li>
                <li>
                    <Link href='#'><FaClock/> Lunes a Sabado 8:00 - 20:00</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href='#'><FaFacebook/></Link>
                </li>
                <li>
                    <Link href='#'><FaInstagram/></Link>
                </li>
                <li>
                    <Link href='#'><FaGoogle/></Link>
                </li>
            </ul>
        </div>
                )
}

