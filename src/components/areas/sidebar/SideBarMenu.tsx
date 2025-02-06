import { useSelector } from 'react-redux'
import { AppState } from '../../../store/AppState'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { UserProfileSetType } from '../../../store/user/Reducer'
import { FaRegistered, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import Registration from '../../auth/Registration'
import Login from '../../auth/Login'
import Logout from '../../auth/Logout'

const SideBarMenus = () => {
  const user = useSelector((state: AppState) => state.user)
  const dispatch = useDispatch()

  const [showRegister, setShowRegister] = useState<boolean>(false)
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showLogout, setShowLogout] = useState<boolean>(false)

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister)
  }

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin)
  }

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout)
  }

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: 'Użytkownik Testowy',
      },
    })
  }, [dispatch])

  return (
    <React.Fragment>
      <ul>
        <li>
          <FaUser />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FaRegistered />
          <span onClick={onClickToggleRegister} className="menu-name">
            Rejestracja
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FaSignInAlt />
          <span onClick={onClickToggleLogin} className="menu-name">
            Logowanie
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
        <li>
          <FaSignOutAlt />
          <span onClick={onClickToggleLogout} className="menu-name">
            Wylogowanie
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul>
    </React.Fragment>
  )
}

export default SideBarMenus
