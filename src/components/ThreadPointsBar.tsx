import { FaHeart, FaReplyAll } from 'react-icons/fa'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

export interface ThreadPointsBarProps {
  points: number
  responseCount?: number
}

const ThreadPointsBar: React.FC<ThreadPointsBarProps> = ({
  points,
  responseCount,
}) => {
  const { width } = useWindowDimensions()
  if (width > 768) {
    return (
      <div className="threadcard-points">
        <div className="threadcard-points-item">
          {points}
          <br />
          <FaHeart />
        </div>
        <div className="threadcard-points-item">
          {responseCount}
          <br />
          <FaReplyAll />
        </div>
      </div>
    )
  }
  return null
}

export default ThreadPointsBar
