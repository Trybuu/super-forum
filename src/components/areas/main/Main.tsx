import { useParams } from 'react-router-dom'
import MainHeader from './MainHeader'
import { useEffect, useState } from 'react'
import Category from '../../../models/Category'
import { getThreadsByCategory } from '../../../services/DataService'
import ThreadCard from './ThreadCard'

const Main = () => {
  const { categoryId } = useParams()
  const [category, setCategory] = useState<Category | undefined>()
  const [threadCards, setThreadCards] = useState<Array<JSX.Element> | null>(
    null,
  )

  useEffect(() => {
    console.log('Komponent Main - categoryId', categoryId)

    if (categoryId && categoryId.length > 0) {
      getThreadsByCategory(categoryId).then((threads) => {
        const cards = threads.map((th) => {
          return <ThreadCard key={`thread-${th.id}`} thread={th} />
        })
        if (!category) {
          setCategory(threads[0].category)
        }

        setThreadCards(cards)
      })
    }
  }, [categoryId])

  return (
    <main className="content">
      <h1>MAIN</h1>
      <MainHeader category={category} />
      <div>{threadCards}</div>
    </main>
  )
}

export default Main
