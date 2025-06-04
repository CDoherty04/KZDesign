import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      // Warm wood tones
      50: '#F5F1E8',  // Light cream
      100: '#E8DFD1', // Soft beige
      200: '#D4C4B0', // Light oak
      300: '#BFA68F', // Medium oak
      400: '#A88B6F', // Dark oak
      500: '#8B6B4F', // Rich walnut
      600: '#6F5339', // Dark walnut
      700: '#533D28', // Mahogany
      800: '#372818', // Dark mahogany
      900: '#1A1308', // Almost black
    },
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Lato", sans-serif',
  },
})

export default theme 