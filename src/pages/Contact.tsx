import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Stack,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Netlify Forms will automatically handle this submission
      // The form data will be sent to Netlify's servers
      const form = e.target as HTMLFormElement
      
      // Create FormData object
      const formDataObj = new FormData(form)
      
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString(),
      })

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: 'We\'ll get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }

    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container maxW="container.lg" py={{ base: 8, md: 16 }} px={{ base: 4, md: 6 }}>
      <VStack spacing={{ base: 8, md: 16 }}>
        <VStack spacing={{ base: 4, md: 6 }} textAlign="center" maxW="3xl">
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="brand.950" fontFamily="heading">
            Get in Touch
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="brand.900" fontFamily="body">
            Ready to transform your space? Contact us to schedule a consultation or learn
            more about our services.
          </Text>
        </VStack>

        <Stack
          spacing={{ base: 8, lg: 12 }}
          direction={{ base: 'column', lg: 'row' }}
          w="full"
          align="stretch"
        >
          {/* Contact Form */}
          <Box
            flex={1}
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="lg"
            boxShadow="md"
            border="1px"
            borderColor="brand.100"
          >
            <VStack spacing={6} as="form" onSubmit={handleSubmit} name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
              {/* Netlify Forms hidden input */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <input name="bot-field" />
              </div>

              <FormControl isRequired isInvalid={!!errors.name}>
                <FormLabel color="brand.950">Name</FormLabel>
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Your name" 
                  borderColor="brand.200" 
                  _hover={{ borderColor: 'brand.300' }}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.email}>
                <FormLabel color="brand.950">Email</FormLabel>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  borderColor="brand.200" 
                  _hover={{ borderColor: 'brand.300' }}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormLabel color="brand.950">Phone</FormLabel>
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Your phone number" 
                  borderColor="brand.200" 
                  _hover={{ borderColor: 'brand.300' }}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.message}>
                <FormLabel color="brand.950">Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={6}
                  borderColor="brand.200"
                  _hover={{ borderColor: 'brand.300' }}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>
              
              <Button
                type="submit"
                bg="accent.500"
                color="white"
                _hover={{ bg: "accent.600" }}
                size="lg"
                w="full"
                isLoading={isSubmitting}
                loadingText="Sending..."
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          {/* Contact Information */}
          <Box
            flex={1}
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="lg"
            boxShadow="md"
            border="1px"
            borderColor="brand.100"
          >
            <VStack spacing={{ base: 6, md: 8 }} align="start" w="full">
              <Heading as="h2" size={{ base: "md", md: "lg" }} color="brand.950" fontFamily="heading">
                Contact Information
              </Heading>
              
              <VStack spacing={6} align="start" w="full">
                <HStack spacing={4}>
                  <Icon as={FaPhone} color="accent.500" boxSize={5} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium" color="brand.950">Phone</Text>
                    <Text color="brand.900">
                      (913) 677-4800
                    </Text>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <Icon as={FaEnvelope} color="accent.500" boxSize={5} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium" color="brand.950">Email</Text>
                    <Text color="brand.900">
                      kzddesigngroup@gmail.com
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              <VStack spacing={4} align="start" w="full">
                <Heading as="h3" size={{ base: "sm", md: "md" }} color="brand.950" fontFamily="heading">
                  Business Hours
                </Heading>
                <Text color="brand.900">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: Closed
                  <br />
                  Call to schedule an appointment
                </Text>
              </VStack>
            </VStack>
          </Box>
        </Stack>
      </VStack>
    </Container>
  )
}

export default Contact 