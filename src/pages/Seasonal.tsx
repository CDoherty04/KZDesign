import GalleryPage from '../components/GalleryPage'

const Seasonal = () => {
  const seasonal = [
    { id: 1, image: '/seasonal/Seasonal.gif', alt: 'Seasonal 1' },
    { id: 2, image: '/seasonal/Seasonal1.jpg', alt: 'Seasonal 2' },
    { id: 3, image: '/seasonal/Seasonal2.jpg', alt: 'Seasonal 3' },
    { id: 4, image: '/seasonal/Seasonal3.jpg', alt: 'Seasonal 4' },
    { id: 5, image: '/seasonal/Seasonal4.jpg', alt: 'Seasonal 5' },
    { id: 6, image: '/seasonal/Seasonal5.jpg', alt: 'Seasonal 6' },
    { id: 7, image: '/seasonal/Seasonal6.jpg', alt: 'Seasonal 7' },
    { id: 8, image: '/seasonal/Seasonal7.jpg', alt: 'Seasonal 8' },
  ]

  return <GalleryPage title="Seasonal" items={seasonal} />
}

export default Seasonal 