import GalleryPage from '../components/GalleryPage'

const Rooms = () => {
  const rooms = [
    { id: 1, image: '/KZDesign/rooms/room1.jpg', alt: 'Room 1' },
    { id: 2, image: '/KZDesign/rooms/room2.jpg', alt: 'Room 2' },
    { id: 3, image: '/KZDesign/rooms/room3.jpg', alt: 'Room 3' },
    { id: 4, image: '/KZDesign/rooms/room4.jpg', alt: 'Room 4' },
    { id: 5, image: '/KZDesign/rooms/room5.png', alt: 'Room 5' },
    { id: 6, image: '/KZDesign/rooms/room6.png', alt: 'Room 6' },
    { id: 7, image: '/KZDesign/rooms/room7.png', alt: 'Room 7' },
    { id: 8, image: '/KZDesign/rooms/room8.jpg', alt: 'Room 8' },
    { id: 9, image: '/KZDesign/rooms/room9.jpg', alt: 'Room 9' },
  ]

  return <GalleryPage title="Rooms" items={rooms} />
}

export default Rooms 