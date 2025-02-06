import { useReducer } from 'react'
import { isPasswordValid } from '../../common/validators/PasswordValidator'
import ReactModal from 'react-modal'
import { ModalProps } from '../types/ModalProps'
import userReducer from './common/UserReducer'
import { allowSubmit } from './common/Helpers'

const Registration: React.FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, email, passwordConfirm, isSubmitDisabled, resultMsg },
    dispatch,
  ] = useReducer(userReducer, {
    userName: 'davec',
    password: '',
    email: 'admin@dzhaven.com',
    passwordConfirm: '',
    isSubmitDisabled: true,
    resultMsg: '',
  })

  const onClickRegister = (
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

  const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
    if (passwordVal !== passwordConfirmVal) {
      allowSubmit(dispatch, 'Hasła nie są takie same', true)
      return false
    } else {
      allowSubmit(dispatch, '', false)
      return true
    }
  }

  /**
   * PROCEDURY OBSŁUGI ZDARZEŃ ONCHANGE
   */

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'userName', payload: e.target.value })
    if (!e.target.value) {
      allowSubmit(dispatch, 'Nazwa użytkownika nie może być pusta', true)
    } else {
      allowSubmit(dispatch, '', false)
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'email', payload: e.target.value })
    if (!e.target.value) {
      allowSubmit(dispatch, 'E-mail nie może być pusty', true)
    } else {
      allowSubmit(dispatch, '', false)
    }
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.target.value })
    const passwordCheck = isPasswordValid(e.target.value)

    if (!passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true)
      return
    }

    passwordsSame(passwordConfirm, e.target.value)
  }

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'passwordConfirm', payload: e.target.value })
    passwordsSame(password, e.target.value)
  }

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>Nazwa użytkownika</label>
            <input type="text" value={userName} onChange={onChangeUserName} />
          </div>

          <div>
            <label>E-mail</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>

          <div>
            <label>Hasło</label>
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div>
            <label>Powtórz hasło</label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </div>

          <div className="form-buttons">
            <div className="form-btn-left">
              <button
                style={{ marginLeft: '.5em' }}
                className="action-btn"
                disabled={isSubmitDisabled}
                onClick={onClickRegister}
              >
                Rejestruj
              </button>

              <button
                style={{ marginLeft: '.5em' }}
                className="cancel-btn"
                onClick={onClickCancel}
              >
                Zamknij
              </button>
            </div>
            <span className="form-btn-right">
              <strong>{resultMsg}</strong>
            </span>
          </div>
        </div>
      </form>
    </ReactModal>
  )
}

export default Registration
