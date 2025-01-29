import { useWindowDimensions } from '../hooks/useWindowDimensions'

const LeftMenu = () => {
  const { width } = useWindowDimensions()

  if (width <= 768) {
    return null
  }

  return <div className="leftmenu">Menu z lewej</div>
}

export default LeftMenu
