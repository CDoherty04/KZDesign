import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const Bathrooms = () => {
  const bathrooms = [
    { id: 1, image: '/KZDesign/kitchenBath/kb1.jpg', alt: 'Kitchen & Bathroom 1' },
    { id: 2, image: '/KZDesign/kitchenBath/kb2.jpg', alt: 'Kitchen & Bathroom 2' },
    { id: 3, image: '/KZDesign/kitchenBath/kb3.jpg', alt: 'Kitchen & Bathroom 3' },
    { id: 4, image: '/KZDesign/kitchenBath/kb4.jpg', alt: 'Kitchen & Bathroom 4' },
    { id: 5, image: '/KZDesign/kitchenBath/kb5.jpg', alt: 'Kitchen & Bathroom 5' },
    { id: 6, image: '/KZDesign/kitchenBath/kb6.jpg', alt: 'Kitchen & Bathroom 6' },
    { id: 7, image: '/KZDesign/kitchenBath/kb7.jpg', alt: 'Kitchen & Bathroom 7' },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          Bathrooms
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {bathrooms.map((bathroom) => (
            <Box
              key={bathroom.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={bathroom.image}
                alt={bathroom.alt}
                width="100%"
                height="300px"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Bathrooms 