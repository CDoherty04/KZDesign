import GalleryPage from '../components/GalleryPage'

const Bathrooms = () => {
  const bathrooms = [
    { id: 1, image: '/KZDesign/kitchenBath/kb1.jpg', alt: 'Kitchen & Bathroom 1' },
    { id: 2, image: '/KZDesign/kitchenBath/kb2.jpg', alt: 'Kitchen & Bathroom 2' },
    { id: 3, image: '/KZDesign/kitchenBath/kb3.jpg', alt: 'Kitchen & Bathroom 3' },
    { id: 4, image: '/KZDesign/kitchenBath/kb4.jpg', alt: 'Kitchen & Bathroom 4' },
    { id: 5, image: '/KZDesign/kitchenBath/kb5.jpg', alt: 'Kitchen & Bathroom 5' },
    { id: 6, image: '/KZDesign/kitchenBath/kb6.jpg', alt: 'Kitchen & Bathroom 6' },
    { id: 7, image: '/KZDesign/kitchenBath/kb7.jpg', alt: 'Kitchen & Bathroom 7' },
  ]

  return <GalleryPage title="Kitchen & Bathroom" items={bathrooms} />
}

export default Bathrooms 