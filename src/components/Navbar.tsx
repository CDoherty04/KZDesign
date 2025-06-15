import { Box, Flex, Link, Button, IconButton, useDisclosure, VStack, Container, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      position="fixed"
      w="full"
      zIndex={1000}
      bg={isScrolled ? "white" : "transparent"}
      transition="all 0.3s"
      boxShadow={isScrolled ? "sm" : "none"}
    >
      <Container maxW="container.xl">
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          w="full"
        >
          <Flex alignItems="center" gap={4}>
            <Image
              src="/KZDesign/logo.png"
              alt="Kristen Doherty Design Logo"
              h="40px"
              w="auto"
            />
            <Link
              as={RouterLink}
              to="/"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="brand.1000"
              fontFamily="heading"
              _hover={{ textDecoration: "none" }}
            >
              KZD Design Group
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={{ md: 6, lg: 8 }}
          >
            <Link
              as={RouterLink}
              to="/"
              color="brand.950"
              _hover={{ color: "accent.500" }}
              fontSize="lg"
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/portfolio"
              color="brand.950"
              _hover={{ color: "accent.500" }}
              fontSize="lg"
            >
              Portfolio
            </Link>
            <Button
              as={RouterLink}
              to="/contact"
              bg="accent.500"
              color="white"
              _hover={{ bg: "accent.600" }}
              size="md"
            >
              Contact
            </Button>
          </Flex>

          {/* Mobile Navigation Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
            color="brand.950"
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          bg="white"
          px={4}
          py={2}
          boxShadow="md"
        >
          <Container maxW="container.xl">
            <VStack spacing={4} align="stretch">
              <Link
                as={RouterLink}
                to="/"
                color="brand.950"
                _hover={{ color: "accent.500" }}
                fontSize="lg"
                onClick={onToggle}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/portfolio"
                color="brand.950"
                _hover={{ color: "accent.500" }}
                fontSize="lg"
                onClick={onToggle}
              >
                Portfolio
              </Link>
              <Button
                as={RouterLink}
                to="/contact"
                bg="accent.500"
                color="white"
                _hover={{ bg: "accent.600" }}
                size="md"
                onClick={onToggle}
              >
                Contact
              </Button>
            </VStack>
          </Container>
        </Box>
      )}
    </Box>
  )
}

export default Navbar 