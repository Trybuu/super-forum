import RichEditor from '../../editor/RichEditor'

interface ThreadBodyProps {
  body?: string
}

const ThreadBody: React.FC<ThreadBodyProps> = ({ body }) => {
  return (
    <div className="thread-body-container">
      <strong>Treść</strong>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} />
      </div>
    </div>
  )
}

export default ThreadBody
