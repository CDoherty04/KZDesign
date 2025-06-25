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
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate()
  
  const projects = [
    {
      id: 1,
      title: 'Rooms',
      image: '/KZDesign/galleryCovers/rooms1.png',
      path: '/rooms',
    },
    {
      id: 2,
      title: 'Before & After',
      image: '/KZDesign/galleryCovers/ba2.jpg',
      path: '/before-after',
    },
    {
      id: 3,
      title: 'Mood Boards',
      image: '/KZDesign/galleryCovers/mood3.png',
      path: '/mood-boards',
    },
    {
      id: 4,
      title: 'Kitchen & Bathroom',
      image: '/KZDesign/galleryCovers/kitchenBath4.jpg',
      path: '/bathrooms',
    },
    {
      id: 5,
      title: 'Light Fixtures',
      image: '/KZDesign/galleryCovers/lights5.jpg',
      path: '/light-fixtures',
    },
    {
      id: 6,
      title: 'Seasonal',
      image: '/KZDesign/galleryCovers/seasonal6.jpg',
      path: '/seasonal',
    },
  ]

  const handleCardClick = (path: string) => {
    navigate(path)
  }

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
              cursor="pointer"
              onClick={() => handleCardClick(project.path)}
            >
              <Image
                src={project.image}
                alt={project.title}
                height="300px"
                width="100%"
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