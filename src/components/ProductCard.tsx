import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'
import Image from "next/image";
import { Product } from "@/pages";


export function ProductCard({image, title, price, rating} : Product) {
    return(
        <Box width='100%' position='relative'>
            <AspectRatio position='relative' ratio={1} maxWidth='100%'>
            <Image src={image} alt='' fill={true} style={{objectFit:'contain'}}></Image>
            </AspectRatio>
            <Text textAlign='center' margin='1rem' color={'gray.600'} noOfLines={2}>{title}</Text>
            <Flex alignItems='center' justifyContent={'space-between'} margin={'0 0.5rem'}>
                <Text fontWeight={'bold'} >$ {price}</Text>
            <Flex>
                <StarIcon color={'yellow.400'}/>
                <StarIcon color={'yellow.400'}/>
                <StarIcon color={'yellow.400'}/>
                <StarIcon color={'yellow.400'}/>
                <StarIcon color={'yellow.400'}/>
            </Flex>
            </Flex>
        </Box>
    )
}
