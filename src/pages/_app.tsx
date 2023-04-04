
import type { AppProps } from 'next/app'
import { ChakraProvider, background } from '@chakra-ui/react'


import { extendTheme } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'

import { defineStyleConfig } from '@chakra-ui/react'

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
    Button : buttonTheme
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  
}

