import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      // Pale blue to navy blue gradient
      50: '#F0F7FF',  // Very pale blue
      100: '#E1EFFE', // Pale blue
      200: '#C3DFFD', // Light blue
      300: '#A5CFFC', // Soft blue
      400: '#87BFFB', // Medium blue
      500: '#69AFFA', // Bright blue
      600: '#4B9FF9', // Strong blue
      700: '#2D8FF8', // Deep blue
      800: '#0F7FF7', // Rich blue
      900: '#0047B3', // Dark navy blue
      950: '#003380', // Very dark navy blue
      1000: '#1c1745', // Logo navy blue
    },
    accent: {
      // Pink accents
      50: '#FFF0F5',  // Very pale pink
      100: '#FFE1EB', // Pale pink
      200: '#FFC3D7', // Light pink
      300: '#FFA5C3', // Soft pink
      400: '#FF87AF', // Medium pink
      500: '#FF699B', // Bright pink
      600: '#FF4B87', // Strong pink
      700: '#FF2D73', // Deep pink
      800: '#FF0F5F', // Rich pink
      900: '#E6004C', // Dark pink
    },
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Lato", sans-serif',
  },
})

export default theme 