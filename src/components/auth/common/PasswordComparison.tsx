import {
  isPasswordValid,
  PasswordTestResult,
} from '../../../common/validators/PasswordValidator'
import { allowSubmit } from './Helpers'

interface PasswordComparisonProps {
  dispatch: React.Dispatch<any>
  password: string
  passwordConfirm: string
}

const PasswordComparison: React.FC<PasswordComparisonProps> = ({
  dispatch,
  password,
  passwordConfirm,
}) => {
  const passwordSame = (passwordVal: string, passwordConfirm: string) => {
    if (passwordVal !== passwordConfirm) {
      allowSubmit(dispatch, 'Hasła nie są takie same', true)
      return false
    } else {
      allowSubmit(dispatch, '', false)
      return true
    }
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.target.value })
    const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value)

    if (!passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true)
      return
    }

    passwordSame(passwordConfirm, e.target.value)
  }

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'passwordConfirm', payload: e.target.value })
    passwordSame(password, e.target.value)
  }

  return (
    <>
      <div>
        <label htmlFor="">Hasło</label>
        <input
          type="password"
          placeholder="Podaj hasło"
          value={password}
          onChange={onChangePassword}
        />
      </div>

      <div>
        <label htmlFor="">Powtórz hasło</label>
        <input
          type="password"
          placeholder="Powtórz hasło"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
      </div>
    </>
  )
}

export default PasswordComparison
