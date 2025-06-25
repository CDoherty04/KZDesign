import {
  Box,
  Container,
  SimpleGrid,
  Image,
  VStack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Rooms',
      image: '/KZDesign/rooms/room1.jpg',
    },
    {
      id: 2,
      title: 'Kitchens',
      image: '/KZDesign/rooms/room2.jpg',
    },
    {
      id: 3,
      title: 'Minimalist Bedroom',
      image: '/KZDesign/rooms/room3.jpg',
    },
    {
      id: 4,
      title: 'Contemporary Bathroom',
      image: '/KZDesign/rooms/room4.jpg',
    },
    {
      id: 5,
      title: 'Open Concept Office',
      image: '/KZDesign/rooms/room5.png',
    },
    {
      id: 6,
      title: 'Cozy Dining Room',
      image: '/KZDesign/rooms/room6.png',
    },
  ]

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          My Portfolio
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project) => (
            <Box
              key={project.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
              color="brand.950"
            >
              <Image
                src={project.image}
                alt={project.title}
                height="300px"
                width="100%"
                objectFit="cover"
              />
              <VStack p={6} align="center" spacing={3}>
                <Heading as="h2" size="lg">
                  {project.title}
                </Heading>
                <Text color="brand.900">
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Portfolio 