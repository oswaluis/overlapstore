import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

interface CategoryLabelProps{
  children: React.ReactNode
}

export const CenteredLabel: React.FunctionComponent<CategoryLabelProps> = ({children}) =>{
  return (
    <Flex display='flex' alignItems='center' justifyContent='center' height='100%'>
      <Box bg='white' zIndex='10' position='relative' padding='1rem 1.5rem'
          width='fit-content' textTransform='uppercase' 
          fontWeight='bold' borderRadius='0.25rem'>{children}</Box>
    </Flex>
  )
}