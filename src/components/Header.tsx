import Image from "next/image";
import Link from "next/link";
import {FaShoppingCart, FaSistrix, FaUserAlt} from 'react-icons/fa'
import { Box, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

const menu= [
        {
        title:'Quienes Somos',
        href: '#'
        },
        {
        title:'Auto',
        href: '#'
        },
        {
        title:'Moto',
        href: '#'
        },
        {
        title:'Accesorios',
        href: '#'
        },
        {
        title:'Contactanos',
        href: '#'
        }
    ]
export function Header(){
    return(
        <Box as='header' width='100%' color='#121212' borderBottom='solid 2px #46BBC0'>
            <Container as = {Flex}  maxW={{
                base: '100%',
                md: '1110px'
            }} justifyContent='space-between' alignItems='center' padding={1}>
                <Flex  alignItems='center' gap='1rem'>
                    <Show below="lg">
                        <Box as="nav">
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon/>}
                                    variant='outline'
                                />
                                <MenuList>
                                    {
                                        menu.map((item, index)=>{
                                            return<MenuItem key={index}>
                                                    <Link href={item.href}>{item.title}</Link>
                                                </MenuItem>
                                        })
                                    }
                                    
                                </MenuList>
                            </Menu>  
                        </Box>
                    </Show>
                    <Image src='/logo.svg' alt='' width={80} height={40}></Image>
                </Flex>
                <Show above="lg">
                    <Flex as='nav' gap='2rem' fontWeight='bold' color='#46BBc0' listStyleType='none' alignItems='center'>
                        {
                        menu.map((item, index)=>{
                            return <li key={index}><Link  href={item.href}>{item.title}</Link></li> 
                                
                        })
                        }
                    </Flex>
                </Show>
                
                <Flex className="commerceMenu" gap='0.5rem'>
                    <Link href='#'><FaSistrix color="#46BBC0"/></Link>
                    <Link href='#'><FaUserAlt color="#46BBC0"/></Link>
                    <Link href='#'><FaShoppingCart color="#46BBC0"/></Link>
                </Flex>
            </Container>
        </Box>
        
                )
}

