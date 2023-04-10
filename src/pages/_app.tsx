
import type { AppProps } from 'next/app'
import { ChakraProvider, background } from '@chakra-ui/react'


import { extendTheme } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'

import { defineStyleConfig } from '@chakra-ui/react'

import { defineStyle } from '@chakra-ui/react'

// define custom sizes
const sizes = {
  sm: defineStyle({
    maxW: '45ch',
    p: '4',
  }),
  md: defineStyle({
    maxW: 'container.sm',
    p: '6',
    fontSize: 'lg',
  }),
  lg: defineStyle({
    maxW: '1110px',
    p: '0'
  }),
}

// export the component theme
export const containerTheme = defineStyleConfig({ sizes })



export const buttonTheme = defineStyleConfig({
  baseStyle:{
    textTransform:'uppercase'
  },
  defaultProps: {
    colorScheme: 'brand',
  },
})
const theme = extendTheme({
  colors:{
    brand:{
    100: '#f1f1f1',
    200: '#d4d4d4',
    300: '#b8b8b8',
    400: '#d4d4d4',
    500: '#808080',
    600: '#636363',
    700: '#474747',
    800: '#2a2a2a',
    900: '#0e0e0e',
    }
  },
  fonts: {
    heading: `"Spartan", sans-serif`,
    body: `"Spartan", sans-serif`,
  },
  components:{
    Button : buttonTheme,
    Container : containerTheme
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  
}

