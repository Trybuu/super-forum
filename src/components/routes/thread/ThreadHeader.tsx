import { getTimePastIfLessThanDay } from '../../../common/dates'

interface ThreadHeaderProps {
  userName?: string
  lastModifiedOn: Date
  title?: string
}

const ThreadHeader: React.FC<ThreadHeaderProps> = ({
  userName,
  lastModifiedOn,
  title,
}) => {
  return (
    <div className="thread-header-container">
      <h3>{title}</h3>
      <span>
        <strong>{userName}</strong>
        <label style={{ marginLeft: '1em' }}>
          {lastModifiedOn ? getTimePastIfLessThanDay(lastModifiedOn) : ''}
        </label>
      </span>
    </div>
  )
}

export default ThreadHeader
