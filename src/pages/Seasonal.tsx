import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const Seasonal = () => {
  const seasonal = [
    { id: 1, image: '/KZDesign/seasonal/Seasonal.gif', alt: 'Seasonal 1' },
    { id: 2, image: '/KZDesign/seasonal/Seasonal1.jpg', alt: 'Seasonal 2' },
    { id: 3, image: '/KZDesign/seasonal/Seasonal2.jpg', alt: 'Seasonal 3' },
    { id: 4, image: '/KZDesign/seasonal/Seasonal3.jpg', alt: 'Seasonal 4' },
    { id: 5, image: '/KZDesign/seasonal/Seasonal4.jpg', alt: 'Seasonal 5' },
    { id: 6, image: '/KZDesign/seasonal/Seasonal5.jpg', alt: 'Seasonal 6' },
    { id: 7, image: '/KZDesign/seasonal/Seasonal6.jpg', alt: 'Seasonal 7' },
    { id: 8, image: '/KZDesign/seasonal/Seasonal7.jpg', alt: 'Seasonal 8' },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          Seasonal
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {seasonal.map((item) => (
            <Box
              key={item.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={item.image}
                alt={item.alt}
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

export default Seasonal 