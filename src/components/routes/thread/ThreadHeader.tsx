import { getTimePastIfLessThanDay } from '../../../common/dates'
import UserNameAndTime from './UserNameAndTime'

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
      <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
    </div>
  )
}

export default ThreadHeader
