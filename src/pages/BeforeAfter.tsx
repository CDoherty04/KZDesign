import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const BeforeAfter = () => {
  const beforeAfter = [
    { id: 1, image: '/KZDesign/ba/ba1.png', alt: 'Before & After 1' },
    { id: 2, image: '/KZDesign/ba/ba2.png', alt: 'Before & After 2' },
    { id: 3, image: '/KZDesign/ba/ba3.png', alt: 'Before & After 3' },
    { id: 4, image: '/KZDesign/ba/ba4.png', alt: 'Before & After 4' },
    { id: 5, image: '/KZDesign/ba/ba5.png', alt: 'Before & After 5' },
    { id: 6, image: '/KZDesign/ba/ba6.png', alt: 'Before & After 6' },
    { id: 7, image: '/KZDesign/ba/ba7.png', alt: 'Before & After 7' },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          Before & After
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {beforeAfter.map((item) => (
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

export default BeforeAfter 