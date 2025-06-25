import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const Rooms = () => {
  const rooms = [
    { id: 1, image: '/KZDesign/rooms/room1.jpg', alt: 'Room 1' },
    { id: 2, image: '/KZDesign/rooms/room2.jpg', alt: 'Room 2' },
    { id: 3, image: '/KZDesign/rooms/room3.jpg', alt: 'Room 3' },
    { id: 4, image: '/KZDesign/rooms/room4.jpg', alt: 'Room 4' },
    { id: 5, image: '/KZDesign/rooms/room5.png', alt: 'Room 5' },
    { id: 6, image: '/KZDesign/rooms/room6.png', alt: 'Room 6' },
    { id: 7, image: '/KZDesign/rooms/room7.png', alt: 'Room 7' },
    { id: 8, image: '/KZDesign/rooms/room8.jpg', alt: 'Room 8' },
    { id: 9, image: '/KZDesign/rooms/room9.jpg', alt: 'Room 9' },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          Rooms
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {rooms.map((room) => (
            <Box
              key={room.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={room.image}
                alt={room.alt}
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

export default Rooms 