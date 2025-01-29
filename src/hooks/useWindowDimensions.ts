import { useEffect, useState } from 'react'

interface WindowDimension {
  width: number
  height: number
}

export const useWindowDimensions = (): WindowDimension => {
  const [dimension, setDimension] = useState<WindowDimension>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimension
}
