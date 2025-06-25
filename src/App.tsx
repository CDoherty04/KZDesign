import { ChakraProvider, Box } from '@chakra-ui/react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Rooms from './pages/Rooms'
import BeforeAfter from './pages/BeforeAfter'
import MoodBoards from './pages/MoodBoards'
import Bathrooms from './pages/Bathrooms'
import LightFixtures from './pages/LightFixtures'
import Seasonal from './pages/Seasonal'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Box minH="100vh" bg="brand.50" w="100vw" overflowX="hidden">
          <Navbar />
          <Box as="main" w="full" minH="calc(100vh - 4rem)" pt="4rem">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/before-after" element={<BeforeAfter />} />
              <Route path="/mood-boards" element={<MoodBoards />} />
              <Route path="/bathrooms" element={<Bathrooms />} />
              <Route path="/light-fixtures" element={<LightFixtures />} />
              <Route path="/seasonal" element={<Seasonal />} />
            </Routes>
          </Box>
        </Box>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
