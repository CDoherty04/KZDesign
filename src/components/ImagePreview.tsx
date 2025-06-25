import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  useDisclosure,
} from '@chakra-ui/react'

interface ImagePreviewProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

const ImagePreview = ({ isOpen, onClose, imageSrc, imageAlt }: ImagePreviewProps) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="full" 
      isCentered
      closeOnOverlayClick={true}
    >
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        maxW="95vw"
        maxH="95vh"
        m="auto"
        pointerEvents="none"
      >
        <ModalCloseButton
          color="white"
          bg="blackAlpha.600"
          _hover={{ bg: 'blackAlpha.800' }}
          borderRadius="full"
          size="lg"
          zIndex={10}
          pointerEvents="auto"
        />
        <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            maxW="100%"
            maxH="95vh"
            objectFit="contain"
            borderRadius="md"
            pointerEvents="auto"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImagePreview 