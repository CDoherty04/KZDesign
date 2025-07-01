import GalleryPage from '../components/GalleryPage'

const MoodBoards = () => {
  const moodBoards = [
    { id: 1, image: '/mood/Mood1.jpg', alt: 'Mood Board 1' },
    { id: 2, image: '/mood/Mood2.jpg', alt: 'Mood Board 2' },
    { id: 3, image: '/mood/Mood3.jpg', alt: 'Mood Board 3' },
    { id: 4, image: '/mood/Mood4.jpg', alt: 'Mood Board 4' },
    { id: 5, image: '/mood/Mood5.jpg', alt: 'Mood Board 5' },
    { id: 6, image: '/mood/Mood6.jpg', alt: 'Mood Board 6' },
  ]

  return <GalleryPage title="Mood Boards" items={moodBoards} />
}

export default MoodBoards 