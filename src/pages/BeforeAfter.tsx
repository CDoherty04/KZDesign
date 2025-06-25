import GalleryPage from '../components/GalleryPage'

const BeforeAfter = () => {
  const beforeAfter = [
    { id: 1, image: '/KZDesign/ba/ba1.png', alt: 'Before & After 1' },
    { id: 2, image: '/KZDesign/ba/ba2.png', alt: 'Before & After 2' },
    { id: 3, image: '/KZDesign/ba/ba3.png', alt: 'Before & After 3' },
    { id: 4, image: '/KZDesign/ba/ba4.png', alt: 'Before & After 4' },
    { id: 5, image: '/KZDesign/ba/ba5.png', alt: 'Before & After 5' },
    { id: 6, image: '/KZDesign/ba/ba6.png', alt: 'Before & After 6' },
    { id: 7, image: '/KZDesign/ba/ba7.png', alt: 'Before & After 7' },
  ]

  return <GalleryPage title="Before & After" items={beforeAfter} />
}

export default BeforeAfter 