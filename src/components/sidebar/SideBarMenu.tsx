import { useSelector } from 'react-redux'
import { AppState } from '../../store/AppState'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { UserProfileSetType } from '../../store/user/Reducer'
import { FaUser } from 'react-icons/fa'

const SideBarMenus = () => {
  const user = useSelector((state: AppState) => state.user)
  const dispatch = useDispatch()

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
        <FaUser />
        <span className="menu-name">{user?.userName}</span>
      </ul>
    </React.Fragment>
  )
}

export default SideBarMenus
