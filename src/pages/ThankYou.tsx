import {
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const ThankYou = () => {
  return (
    <Container maxW="container.md" py={{ base: 16, md: 24 }} px={{ base: 4, md: 6 }}>
      <VStack spacing={8} textAlign="center">
        <Icon as={FaCheckCircle} color="green.500" boxSize={16} />
        
        <VStack spacing={6}>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="brand.950" fontFamily="heading">
            Thank You!
          </Heading>
          
          <Text fontSize={{ base: "lg", md: "xl" }} color="brand.900" fontFamily="body">
            Your message has been sent successfully. We'll get back to you within 24-48 hours.
          </Text>
          
          <Text fontSize="md" color="brand.700" fontFamily="body">
            In the meantime, feel free to explore our portfolio or give us a call at (913) 677-4800.
          </Text>
        </VStack>
        
        <VStack spacing={4} pt={4}>
          <Button
            as={RouterLink}
            to="/"
            bg="accent.500"
            color="white"
            _hover={{ bg: "accent.600" }}
            size="lg"
          >
            Back to Home
          </Button>
          
          <Button
            as={RouterLink}
            to="/portfolio"
            variant="outline"
            color="accent.500"
            borderColor="accent.500"
            _hover={{ bg: "accent.50" }}
            size="md"
          >
            View Our Portfolio
          </Button>
        </VStack>
      </VStack>
    </Container>
  )
}

export default ThankYou 