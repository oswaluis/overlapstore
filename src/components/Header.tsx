import Image from "next/image";
import Link from "next/link";
import {FaShoppingCart, FaSistrix, FaUserAlt} from 'react-icons/fa'
import { Box, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
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
            <Container as = {Flex} size='lg' justifyContent='space-between' alignItems='center'>
                <Flex  margin='1rem 1rem' alignItems='center' gap='1rem'>
                    <Box as="nav" display={{md :'none'}}>
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
                    <Image src='/logo.svg' alt='' width={80} height={40}></Image>
                </Flex>
                

                <Flex as='nav' display={{base:'none' , sm:'flex'}} gap='2rem' fontWeight='bold' color='#46BBc0' listStyleType='none' alignItems='center'>
                    {
                    menu.map((item, index)=>{
                        return <li key={index}><Link  href={item.href}>{item.title}</Link></li> 
                            
                    })
                    }
                </Flex>
                <Flex className="commerceMenu" gap='0.5rem'>
                    <Link href='#'><FaSistrix color="#46BBC0"/></Link>
                    <Link href='#'><FaUserAlt color="#46BBC0"/></Link>
                    <Link href='#'><FaShoppingCart color="#46BBC0"/></Link>
                </Flex>
            </Container>
        </Box>
        
                )
}

