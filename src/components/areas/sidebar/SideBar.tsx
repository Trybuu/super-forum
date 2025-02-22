import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import SideBarMenus from './SideBarMenu'

const Sidebar = () => {
  const { width } = useWindowDimensions()

  if (width <= 768) {
    return null
  }

  return (
    <div className="sidebar">
      <SideBarMenus />
    </div>
  )
}

export default Sidebar
