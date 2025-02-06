import ReactModal from 'react-modal'
import { ModalProps } from '../types/ModalProps'

const Logout: React.FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const onClickLogout = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    onClickToggle(e)
  }

  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onClickToggle(e)
  }

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="logout-inputs">
          Czy jesteś pewny, że chcesz się wylogować?
        </div>
        <div className="form-buttons form-buttons-sm">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: '.5em' }}
              className="action-btn"
              onClick={onClickLogout}
            >
              Wyloguj
            </button>
            <button
              style={{ marginLeft: '.5em' }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Zamknij
            </button>
          </div>
        </div>
      </form>
    </ReactModal>
  )
}

export default Logout
