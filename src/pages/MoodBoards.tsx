import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const MoodBoards = () => {
  const moodBoards = [
    { id: 1, image: '/KZDesign/mood/Mood1.jpg', alt: 'Mood Board 1' },
    { id: 2, image: '/KZDesign/mood/Mood2.jpg', alt: 'Mood Board 2' },
    { id: 3, image: '/KZDesign/mood/Mood3.jpg', alt: 'Mood Board 3' },
    { id: 4, image: '/KZDesign/mood/Mood4.jpg', alt: 'Mood Board 4' },
    { id: 5, image: '/KZDesign/mood/Mood5.jpg', alt: 'Mood Board 5' },
    { id: 6, image: '/KZDesign/mood/Mood6.jpg', alt: 'Mood Board 6' },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          Mood Boards
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {moodBoards.map((board) => (
            <Box
              key={board.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={board.image}
                alt={board.alt}
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

export default MoodBoards 