import GalleryPage from '../components/GalleryPage'

const Seasonal = () => {
  const seasonal = [
    { id: 1, image: '/KZDesign/seasonal/Seasonal.gif', alt: 'Seasonal 1' },
    { id: 2, image: '/KZDesign/seasonal/Seasonal1.jpg', alt: 'Seasonal 2' },
    { id: 3, image: '/KZDesign/seasonal/Seasonal2.jpg', alt: 'Seasonal 3' },
    { id: 4, image: '/KZDesign/seasonal/Seasonal3.jpg', alt: 'Seasonal 4' },
    { id: 5, image: '/KZDesign/seasonal/Seasonal4.jpg', alt: 'Seasonal 5' },
    { id: 6, image: '/KZDesign/seasonal/Seasonal5.jpg', alt: 'Seasonal 6' },
    { id: 7, image: '/KZDesign/seasonal/Seasonal6.jpg', alt: 'Seasonal 7' },
    { id: 8, image: '/KZDesign/seasonal/Seasonal7.jpg', alt: 'Seasonal 8' },
  ]

  return <GalleryPage title="Seasonal" items={seasonal} />
}

export default Seasonal 