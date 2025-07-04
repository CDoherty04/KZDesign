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
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
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
            <VStack spacing={6} as="form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="cd19f577-3c16-4bbc-ad44-2d47141fc426" />
              
              {/* Honeypot field for spam protection */}
              <input type="hidden" name="botcheck" style={{ display: 'none' }} />
              
              {/* Redirect URL after successful submission */}
              <input type="hidden" name="redirect" value="https://clinquant-bublanina-9989ed.netlify.app/#/thank-you" />
              
              {/* Subject line for the email */}
              <input type="hidden" name="subject" value="KZD Website Form Submission!" />

              <FormControl isRequired>
                <FormLabel color="brand.950">Name</FormLabel>
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Your name" 
                  borderColor="brand.200" 
                  _hover={{ borderColor: 'brand.300' }}
                />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel color="brand.950">Email</FormLabel>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  borderColor="brand.200" 
                  _hover={{ borderColor: 'brand.300' }}
                />
              </FormControl>
              
              <FormControl>
                <FormLabel color="brand.950">Phone</FormLabel>
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Your phone number" 
                  borderColor="brand.200" 
                  _hover={{ borderColor: 'brand.300' }}
                />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel color="brand.950">Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={6}
                  borderColor="brand.200"
                  _hover={{ borderColor: 'brand.300' }}
                />
              </FormControl>
              
              <Button
                type="submit"
                bg="accent.500"
                color="white"
                _hover={{ bg: "accent.600" }}
                size="lg"
                w="full"
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