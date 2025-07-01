import GalleryPage from '../components/GalleryPage'

const Bathrooms = () => {
  const bathrooms = [
    { id: 1, image: '/kitchenBath/kb1.jpg', alt: 'Kitchen & Bathroom 1' },
    { id: 2, image: '/kitchenBath/kb2.jpg', alt: 'Kitchen & Bathroom 2' },
    { id: 3, image: '/kitchenBath/kb3.jpg', alt: 'Kitchen & Bathroom 3' },
    { id: 4, image: '/kitchenBath/kb4.jpg', alt: 'Kitchen & Bathroom 4' },
    { id: 5, image: '/kitchenBath/kb5.jpg', alt: 'Kitchen & Bathroom 5' },
    { id: 6, image: '/kitchenBath/kb6.jpg', alt: 'Kitchen & Bathroom 6' },
    { id: 7, image: '/kitchenBath/kb7.jpg', alt: 'Kitchen & Bathroom 7' },
  ]

  return <GalleryPage title="Kitchen & Bathroom" items={bathrooms} />
}

export default Bathrooms 