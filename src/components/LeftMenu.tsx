import { useEffect, useState } from 'react'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import Category from '../models/Category'
import './LeftMenu.css'
import { getCategories } from '../services/DataService'

const LeftMenu = () => {
  const [categories, setCategories] = useState<JSX.Element>(<p>Menu z lewej</p>)
  const { width } = useWindowDimensions()

  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => <li key={cat.id}>{cat.name}</li>)

        setCategories(<ul className="category">{cats}</ul>)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  if (width <= 768) {
    return null
  }

  return <div className="leftmenu">{categories}</div>
}

export default LeftMenu
