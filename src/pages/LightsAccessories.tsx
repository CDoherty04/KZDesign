import GalleryPage from '../components/GalleryPage'

const LightsAccessories = () => {
  const lightsAccessories = [
    { id: 1, image: '/lightsAccessories/Light1.jpg', alt: 'Light Fixture 1' },
    { id: 2, image: '/lightsAccessories/Light2.jpg', alt: 'Light Fixture 2' },
    { id: 3, image: '/lightsAccessories/Light3.jpg', alt: 'Light Fixture 3' },
    { id: 4, image: '/lightsAccessories/Light4.jpg', alt: 'Light Fixture 4' },
    { id: 5, image: '/lightsAccessories/Light5.jpg', alt: 'Light Fixture 5' },
    { id: 6, image: '/lightsAccessories/Light6.jpg', alt: 'Light Fixture 6' },
    { id: 7, image: '/lightsAccessories/Accessory1.jpg', alt: 'Accessory 1' },
    { id: 8, image: '/lightsAccessories/Accessory2.jpg', alt: 'Accessory 2' },
    { id: 9, image: '/lightsAccessories/Accessory3.jpg', alt: 'Accessory 3' },
    { id: 10, image: '/lightsAccessories/Accessory4.jpg', alt: 'Accessory 4' },
    { id: 11, image: '/lightsAccessories/Accessory5.jpg', alt: 'Accessory 5' },
    { id: 12, image: '/lightsAccessories/Accessory6.jpg', alt: 'Accessory 6' },
    { id: 13, image: '/lightsAccessories/Accessory7.jpg', alt: 'Accessory 7' },
  ]

  return <GalleryPage title="Light Fixtures & Accessories" items={lightsAccessories} />
}

export default LightsAccessories 