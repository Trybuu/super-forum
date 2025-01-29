import { useWindowDimensions } from '../hooks/useWindowDimensions'

const RightMenu = () => {
  const { width } = useWindowDimensions()

  if (width <= 768) {
    return null
  }

  return <div className="rightmenu">Menu z prawej</div>
}

export default RightMenu
