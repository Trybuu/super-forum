import { useNavigate } from 'react-router-dom'
import Thread from '../../../models/Thread'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import { FaEye, FaHeart, FaReplyAll } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './ThreadCard.css'
import ThreadPointsBar from '../../ThreadPointsBar'

interface ThreadCardProps {
  thread: Thread
}

const ThreadCard: React.FC<ThreadCardProps> = ({ thread }) => {
  const navigate = useNavigate()
  const { width } = useWindowDimensions()

  const onClickShowThread = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/thread/${thread.id}`)
  }

  const getPoints = (thread: Thread) => {
    if (width <= 768) {
      return (
        <label style={{ marginRight: '.75em', marginTop: '.25em' }}>
          {thread.points || 0}
          <FaHeart style={{ marginLeft: '.2em' }} />
        </label>
      )
    } else {
      return null
    }
  }

  const getResponses = (thread: Thread) => {
    if (width <= 768) {
      return (
        <label style={{ marginRight: '.5em' }}>
          {thread && thread.threadItems && thread.threadItems.length}
          <FaReplyAll style={{ marginLeft: '.25em' }} />
        </label>
      )
    } else {
      return null
    }
  }

  return (
    <section className="panel threadcard-container">
      <div className="threadcard-txt-container">
        <div className="content-header">
          <Link
            to={`/categorythreads/${thread.category.id}`}
            className="link-txt"
          >
            <strong>{thread.category.name}</strong>
          </Link>

          <span className="username-header" style={{ marginLeft: '.5em' }}>
            {thread.userName}
          </span>
        </div>

        <div className="question">
          <div onClick={onClickShowThread} data-thread-id={thread.id}>
            <strong>{thread.title}</strong>
          </div>
          <div
            onClick={onClickShowThread}
            className="threadcard-body"
            data-thread-id={thread.id}
          >
            <div>{thread.body}</div>
          </div>

          <div className="threadcard-footer">
            <span>
              <label>
                {thread.views}
                <FaEye />
              </label>
            </span>
            <span>
              {getPoints(thread)}
              {getResponses(thread)}
            </span>
          </div>
        </div>
      </div>
      <ThreadPointsBar points={thread.points} />
    </section>
  )
}

export default ThreadCard
