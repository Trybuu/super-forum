import { useSelector } from 'react-redux'
import { AppState } from '../../../store/AppState'
import React, { useState } from 'react'
import { FaRegistered, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import Registration from '../../auth/Registration'
import Login from '../../auth/Login'
import Logout from '../../auth/Logout'
import { Link } from 'react-router-dom'

const SideBarMenus = () => {
  const user = useSelector((state: AppState) => state.user)

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

  return (
    <React.Fragment>
      <ul>
        <li>
          <FaUser />
          <span className="menu-name">
            <Link to={`/userprofile/${user?.id}`}>
              Profil - {user?.userName}
            </Link>
          </span>
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
