import { FaHeart } from 'react-icons/fa'
import { ThreadPointsBarProps } from './ThreadPointsBar'

const ThreadPointsInline: React.FC<ThreadPointsBarProps> = ({
  points,
  responseCount,
}) => {
  return (
    <>
      <label
        style={{
          marginRight: '.75em',
          marginTop: '.25em',
        }}
      >
        {points || 0}
        <FaHeart />
      </label>
    </>
  )
}

export default ThreadPointsInline
