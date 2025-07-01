import GalleryPage from '../components/GalleryPage'

const LightFixtures = () => {
  const lightFixtures = [
    { id: 1, image: '/lights/Light1.jpg', alt: 'Light Fixture 1' },
    { id: 2, image: '/lights/Light2.jpg', alt: 'Light Fixture 2' },
    { id: 3, image: '/lights/Light3.jpg', alt: 'Light Fixture 3' },
    { id: 4, image: '/lights/Light4.jpg', alt: 'Light Fixture 4' },
    { id: 5, image: '/lights/Light5.jpg', alt: 'Light Fixture 5' },
    { id: 6, image: '/lights/Light6.jpg', alt: 'Light Fixture 6' },
    { id: 7, image: '/lights/Light7.jpg', alt: 'Light Fixture 7' },
    { id: 8, image: '/lights/Light8.jpg', alt: 'Light Fixture 8' },
    { id: 9, image: '/lights/Light9.jpg', alt: 'Light Fixture 9' },
    { id: 10, image: '/lights/Light10.jpg', alt: 'Light Fixture 10' },
    { id: 11, image: '/lights/Light11.jpg', alt: 'Light Fixture 11' },
    { id: 12, image: '/lights/Light12.jpg', alt: 'Light Fixture 12' },
    { id: 13, image: '/lights/Light13.jpg', alt: 'Light Fixture 13' },
  ]

  return <GalleryPage title="Light Fixtures" items={lightFixtures} />
}

export default LightFixtures 