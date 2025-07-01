import GalleryPage from '../components/GalleryPage'

const Rooms = () => {
  const rooms = [
    { id: 1, image: '/rooms/room1.jpg', alt: 'Room 1' },
    { id: 2, image: '/rooms/room2.jpg', alt: 'Room 2' },
    { id: 3, image: '/rooms/room3.jpg', alt: 'Room 3' },
    { id: 4, image: '/rooms/room4.jpg', alt: 'Room 4' },
    { id: 5, image: '/rooms/room5.png', alt: 'Room 5' },
    { id: 6, image: '/rooms/room6.png', alt: 'Room 6' },
    { id: 7, image: '/rooms/room7.png', alt: 'Room 7' },
    { id: 8, image: '/rooms/room8.jpg', alt: 'Room 8' },
    { id: 9, image: '/rooms/room9.jpg', alt: 'Room 9' },
  ]

  return <GalleryPage title="Rooms" items={rooms} />
}

export default Rooms 