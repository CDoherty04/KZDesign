import { ChakraProvider, Box } from '@chakra-ui/react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Rooms from './pages/Rooms'
import BeforeAfter from './pages/BeforeAfter'
import MoodBoards from './pages/MoodBoards'
import Bathrooms from './pages/Bathrooms'
import LightsAccessories from './pages/LightsAccessories'
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
              <Route path="/portfolio/rooms" element={<Rooms />} />
              <Route path="/portfolio/before-after" element={<BeforeAfter />} />
              <Route path="/portfolio/mood-boards" element={<MoodBoards />} />
              <Route path="/portfolio/bathrooms" element={<Bathrooms />} />
              <Route path="/portfolio/lights-accessories" element={<LightsAccessories />} />
              <Route path="/portfolio/seasonal" element={<Seasonal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </Box>
        </Box>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
