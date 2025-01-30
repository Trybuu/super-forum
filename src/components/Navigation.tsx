import { FaBars } from 'react-icons/fa'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const Navigation = () => {
  const { width } = useWindowDimensions()

  const getMobileMenu = () => {
    if (width <= 768) {
      return <FaBars />
    } else {
      return null
    }
  }

  return (
    <nav className="navigation">
      {getMobileMenu()}
      <strong>SuperForum</strong>
    </nav>
  )
}

export default Navigation
