import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const LightFixtures = () => {
  const lightFixtures = [
    { id: 1, image: '/KZDesign/lights/Light1.jpg', alt: 'Light Fixture 1' },
    { id: 2, image: '/KZDesign/lights/Light2.jpg', alt: 'Light Fixture 2' },
    { id: 3, image: '/KZDesign/lights/Light3.jpg', alt: 'Light Fixture 3' },
    { id: 4, image: '/KZDesign/lights/Light4.jpg', alt: 'Light Fixture 4' },
    { id: 5, image: '/KZDesign/lights/Light5.jpg', alt: 'Light Fixture 5' },
    { id: 6, image: '/KZDesign/lights/Light6.jpg', alt: 'Light Fixture 6' },
    { id: 7, image: '/KZDesign/lights/Light7.jpg', alt: 'Light Fixture 7' },
    { id: 8, image: '/KZDesign/lights/Light8.jpg', alt: 'Light Fixture 8' },
    { id: 9, image: '/KZDesign/lights/Light9.jpg', alt: 'Light Fixture 9' },
    { id: 10, image: '/KZDesign/lights/Light10.jpg', alt: 'Light Fixture 10' },
    { id: 11, image: '/KZDesign/lights/Light11.jpg', alt: 'Light Fixture 11' },
    { id: 12, image: '/KZDesign/lights/Light12.jpg', alt: 'Light Fixture 12' },
    { id: 13, image: '/KZDesign/lights/Light13.jpg', alt: 'Light Fixture 13' },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          Light Fixtures
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {lightFixtures.map((fixture) => (
            <Box
              key={fixture.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={fixture.image}
                alt={fixture.alt}
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

export default LightFixtures 