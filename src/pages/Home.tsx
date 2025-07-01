import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  AspectRatio,
  useDisclosure,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
import ImagePreview from '../components/ImagePreview'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Modern Bedroom Suite',
      description: 'A teenager\'s dream bedroom with a crisp modern feel',
      image: '/frontpage/front1.jpg',
    },
    {
      id: 2,
      title: 'Coastal Bedroom',
      description: 'Light-filled space with natural materials and ocean-inspired accents',
      image: '/frontpage/front2.jpg',
    },
    {
      id: 3,
      title: 'Luxury Reading Nook',
      description: 'Serene lounge space with luxury seating, perfect for relaxation',
      image: '/frontpage/front3.jpg',
    },
  ]

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt })
    onOpen()
  }

  return (
    <Box w="full">
      {/* Hero Section */}
      <Box
        minH="calc(100vh - 4rem)"
        position="relative"
        display="flex"
        alignItems="center"
        bg="brand.50"
        w="full"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/rooms/room5.png')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.1}
        />
        <Container maxW="container.xl" position="relative" py={{ base: 20, md: 32 }} px={{ base: 4, md: 6, lg: 8 }}>
          <VStack spacing={6} textAlign="center" maxW="4xl" mx="auto">
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="brand.950"
              fontFamily="heading"
              lineHeight="1.2"
            >
              Creating Timeless Interiors
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="brand.900"
              maxW="3xl"
              fontFamily="body"
              px={4}
            >
              I'm Kristen Doherty, an interior designer passionate about creating spaces that
              blend natural elements with modern sophistication. Let's transform your vision
              into a reality that feels both timeless and uniquely yours.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              size={{ base: "md", md: "lg" }}
              bg="accent.500"
              color="white"
              _hover={{ bg: "accent.600" }}
              mt={4}
            >
              Start Your Project
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Featured Projects */}
      <Box bg="brand.50" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
          <VStack spacing={{ base: 8, md: 12 }} w="full">
            <Heading
              as="h2"
              size={{ base: "lg", md: "xl", lg: "2xl" }}
              textAlign="center"
              color="brand.950"
              fontFamily="heading"
            >
              Featured Projects
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 6, md: 8, lg: 10 }}
              w="full"
            >
              {projects.map((project) => (
                <Box
                  key={project.id}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.02)" }}
                  border="1px"
                  borderColor="brand.100"
                >
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      objectFit="cover"
                      cursor="pointer"
                      onClick={() => handleImageClick(project.image, project.title)}
                    />
                  </AspectRatio>
                  <VStack p={6} align="start" spacing={3}>
                    <Heading
                      as="h3"
                      size={{ base: "sm", md: "md", lg: "lg" }}
                      color="brand.950"
                      fontFamily="heading"
                    >
                      {project.title}
                    </Heading>
                    <Text
                      color="brand.900"
                      fontFamily="body"
                      fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    >
                      {project.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/portfolio"
              variant="outline"
              color="accent.500"
              borderColor="accent.500"
              _hover={{ bg: "accent.50" }}
              size={{ base: "md", md: "lg" }}
            >
              View All Projects
            </Button>
          </VStack>
        </Container>
      </Box>

      {selectedImage && (
        <ImagePreview
          isOpen={isOpen}
          onClose={onClose}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </Box>
  )
}

export default Home 