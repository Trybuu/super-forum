import { useReducer, useState } from 'react'
import ReactModal from 'react-modal'

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'userName':
      return {
        ...state,
        userName: action.payload,
      }
    case 'password':
      return {
        ...state,
        password: action.payload,
      }
    case 'passwordConfirm':
      return {
        ...state,
        passwordConfirm: action.payload,
      }
    case 'email':
      return {
        ...state,
        email: action.payload,
      }
    case 'resultMsg':
      return {
        ...state,
        resultMsg: action.payload,
      }
    default:
      return {
        ...state,
        resultMsg: 'Wystąpił problem',
      }
  }
}

export interface ModalProps {
  isOpen: boolean
  onClickToggle: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void
}

const Registration: React.FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer(userReducer, {
    userName: 'davec',
    password: '',
    email: 'admin@dzhaven.com',
    passwordConfirm: '',
    resultMsg: '',
    isSubmitDisabled: true,
  })

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: 'userName' })
    if (!e.target.value) allowSubmit(dispatch, 'Username cannot be empty', true)
    else allowSubmit(dispatch, '', false)
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: 'email' })
    if (!e.target.value) allowSubmit(dispatch, 'Email cannot be empty', true)
    else allowSubmit(dispatch, '', false)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.target.value })
    const passwordCheck: PasswordTestResult
  }

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
              placeholder="Podaj hasło"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="form-buttons">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: '.5em' }}
              className="action-btn"
              disabled={isSubmitDisabled}
              onClick={onClickRegister}
            >
              Register
            </button>
            <button
              style={{ marginLeft: '.5em' }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>
          <span className="form-btn-right">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  )
}

export default Registration
