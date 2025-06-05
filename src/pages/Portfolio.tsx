import {
  Box,
  Container,
  SimpleGrid,
  Image,
  VStack,
  Heading,
  Text,
  Select,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'living',
      description: 'Contemporary design with natural elements',
      image: '/KZDesign/me.jpg',
    },
    {
      id: 2,
      title: 'Luxury Kitchen',
      category: 'kitchen',
      description: 'Elegant and functional kitchen design',
      image: '/KZDesign/me.jpg',
    },
    {
      id: 3,
      title: 'Minimalist Bedroom',
      category: 'bedroom',
      description: 'Calm and peaceful retreat',
      image: '/KZDesign/me.jpg',
    },
    {
      id: 4,
      title: 'Contemporary Bathroom',
      category: 'bathroom',
      description: 'Spa-like atmosphere with modern fixtures',
      image: '/KZDesign/me.jpg',
    },
    {
      id: 5,
      title: 'Open Concept Office',
      category: 'office',
      description: 'Productive and inspiring workspace',
      image: '/KZDesign/me.jpg',
    },
    {
      id: 6,
      title: 'Cozy Dining Room',
      category: 'dining',
      description: 'Warm and inviting dining space',
      image: '/KZDesign/me.jpg',
    },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center">
          My Portfolio
        </Heading>
        
        <HStack w="full" justify="center">
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            maxW="200px"
            bg={useColorModeValue('white', 'gray.800')}
          >
            <option value="all">All Projects</option>
            <option value="living">Living Rooms</option>
            <option value="kitchen">Kitchens</option>
            <option value="bedroom">Bedrooms</option>
            <option value="bathroom">Bathrooms</option>
            <option value="office">Offices</option>
            <option value="dining">Dining Rooms</option>
          </Select>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredProjects.map((project) => (
            <Box
              key={project.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                height="300px"
                width="100%"
                objectFit="cover"
              />
              <VStack p={6} align="start" spacing={3}>
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>
                  {project.description}
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