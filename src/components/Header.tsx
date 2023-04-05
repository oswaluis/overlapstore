import Image from "next/image";
import Link from "next/link";
import {FaShoppingCart, FaSistrix, FaUserAlt} from 'react-icons/fa'
import { Box, Flex, Spacer } from '@chakra-ui/react'

export function Header(){
    return(
        <Flex as='header' width='100%' color='#121212' justifyContent='space-around' alignItems='center' borderBottom='solid 2px #46BBC0'> 
            <Box margin='1rem 0' padding='0'>
                <Image src='/logo.svg' alt='' width={80} height={40}></Image>
            </Box>
            <Flex as='nav' gap='2rem' fontWeight='bold' color='#46BBc0'>
                    <Link href='#'>Quienes Somos</Link>
                    <Link href='#'>Auto</Link>
                    <Link href='#'>Moto</Link>
                    <Link href='#'>Accesorios</Link>
                    <Link href='#'>Contactanos</Link>
            </Flex>
            <Flex className="commerceMenu" gap='0.5rem'>
                <Link href='#'><FaSistrix color="#46BBC0"/></Link>
                <Link href='#'><FaUserAlt color="#46BBC0"/></Link>
                <Link href='#'><FaShoppingCart color="#46BBC0"/></Link>
            </Flex>
        </Flex>
                )
}

