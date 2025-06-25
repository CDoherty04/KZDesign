import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Image,
  useColorModeValue,
  Button,
  HStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import ImagePreview from './ImagePreview'

interface GalleryItem {
  id: number
  image: string
  alt: string
}

interface GalleryPageProps {
  title: string
  items: GalleryItem[]
}

const GalleryPage = ({ title, items }: GalleryPageProps) => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt })
    onOpen()
  }

  const handleGoBack = () => {
    navigate('/portfolio')
  }

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <HStack w="full" justify="flex-start">
          <Button
            leftIcon={<ChevronLeftIcon />}
            variant="ghost"
            color="brand.900"
            _hover={{ bg: 'brand.100' }}
            onClick={handleGoBack}
          >
            Go Back to Portfolio
          </Button>
        </HStack>

        <Heading as="h1" size="2xl" textAlign="center" color="brand.950">
          {title}
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {items.map((item) => (
            <Box
              key={item.id}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
              cursor="pointer"
              onClick={() => handleImageClick(item.image, item.alt)}
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

      {selectedImage && (
        <ImagePreview
          isOpen={isOpen}
          onClose={onClose}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </Container>
  )
}

export default GalleryPage 