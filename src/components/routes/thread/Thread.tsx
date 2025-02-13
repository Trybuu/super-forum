import { useEffect, useState } from 'react'
import ThreadModel from '../../../models/Thread'
import { useParams } from 'react-router-dom'
import { getThreadById } from '../../../services/DataService'
import Navigation from '../../areas/Navigation'
import ThreadHeader from './ThreadHeader'
import ThreadCategory from './ThreadCategory'
import ThreadTitle from './ThreadTitle'
import ThreadBody from './ThreadBody'
import ThreadResponsesBuilder from './ThreadResponsesBuilder'
import ThreadPointsBar from '../../ThreadPointsBar'

import './Thread.css'

const Thread: React.FC = () => {
  const [thread, setThread] = useState<ThreadModel | undefined>()
  const { id }: any = useParams()

  useEffect(() => {
    console.log('Id wątku: ', id)
    console.log(thread)
    console.log(thread?.body)
    if (id && id > 0) {
      getThreadById(id).then((th) => {
        console.log(th)
        setThread(th)
      })
    }
  }, [id])

  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Navigation />
      </div>
      <div className="thread-content-container">
        <div className="thread-content-post-container">
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          <ThreadCategory categoryName={thread?.category?.name} />
          <ThreadTitle title={thread?.title} />
          <ThreadBody body={thread?.body} />
        </div>
        <div className="thread-content-points-container">
          <ThreadPointsBar
            points={thread?.points || 0}
            responseCount={
              thread && thread.threadItems && thread.threadItems.length
            }
          />
        </div>
      </div>
      <div className="thread-content-response-container">
        <hr className="thread-section-divider" />
        <ThreadResponsesBuilder threadItems={thread?.threadItems} />
      </div>
    </div>
  )
}

export default Thread
