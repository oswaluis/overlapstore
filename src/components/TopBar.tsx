import Image from "next/image";
import Link from "next/link";
import {FaPhone, FaLocationArrow, FaClock, FaFacebook, FaInstagram, FaGoogle} from 'react-icons/fa'
import { Box, Container } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'


export function TopBar(){
    return(
        <Box bg='#46BBC0' w='100%' p={2}>
            <Container as={Flex}  color='#121212' justifyContent={'space-between'} fontSize='xs' size='lg'>
                <Flex gap='1.5rem'>
                    <Flex as={Link} href='#' alignItems='center' gap='0.5rem'><FaPhone/>+58 9 11 12345678</Flex>
                    <Flex as={Link} href='#' alignItems='center' gap='0.5rem'><FaLocationArrow/> Argentina, casa de Cesar</Flex>
                    <Flex as={Link} href='#' alignItems='center' gap='0.5rem'><FaClock/> Lunes a Sabado 8:00 - 20:00</Flex>
                </Flex>
                <Flex gap='0.5rem'>
                    <Link href='#'><FaFacebook/></Link>
                    <Link href='#'><FaInstagram/></Link>
                    <Link href='#'><FaGoogle/></Link>
                </Flex>
            </Container>            
        </Box>

                )
}

