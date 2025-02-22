import { useReducer, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Thread from '../../../models/Thread'
import ThreadItem from '../../../models/ThreadItem'
import { getUserThreads } from '../../../services/DataService'
import { AppState } from '../../../store/AppState'
import PasswordComparison from '../../auth/common/PasswordComparison'
import userReducer from '../../auth/common/UserReducer'
import Navigation from '../../areas/Navigation'

const UserProfile = () => {
  const [
    { userName, password, passwordConfirm, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer(userReducer, {
    userName: '',
    password: '*********',
    passwordConfirm: '*********',
    resultMsg: '',
    isSubmitDisabled: true,
  })
  const user = useSelector((state: AppState) => state.user)
  const [threads, setThreads] = useState<JSX.Element | undefined>()
  const [threadItems, setThreadItems] = useState<JSX.Element | undefined>()

  useEffect(() => {
    console.log('user', user)
    if (user) {
      dispatch({
        type: 'userName',
        payload: user.userName,
      })

      getUserThreads(user.id).then((items) => {
        const threadItemsInThreadList: Array<ThreadItem> = []
        const threadList = items.map((th: Thread) => {
          for (let i = 0; i < th.threadItems.length; i++) {
            threadItemsInThreadList.push(th.threadItems[i])
          }

          return (
            <li key={`user-th-${th.id}`}>
              <Link to={`/thread/${th.id}`} className="userprofile-link">
                {th.title}
              </Link>
            </li>
          )
        })
        setThreads(<ul>{threadList}</ul>)

        const threadItemList = threadItemsInThreadList.map((ti: ThreadItem) => (
          <li key={`user-th-${ti.threadId}`}>
            <Link to={`/thread/${ti.threadId}`} className="userprofile-link">
              {ti.body}
            </Link>
          </li>
        ))
        setThreadItems(<ul>{threadItemList}</ul>)
      })
    }
  }, [user])

  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Navigation />
      </div>
      <form className="userprofile-content-container">
        <div>
          <strong>Profil użytkownika</strong>
          <label style={{ marginLeft: '.75em' }}>{userName}</label>
        </div>
        <div className="userprofile-password">
          <div>
            <PasswordComparison
              dispatch={dispatch}
              password={password}
              passwordConfirm={passwordConfirm}
            />
            <button className="action-btn" disabled={isSubmitDisabled}>
              Zmień hasło
            </button>
          </div>
          <div style={{ marginTop: '.5em' }}>
            <label>{resultMsg}</label>
          </div>
        </div>
        <div className="userprofile-postings">
          <hr className="thread-section-divider" />
          <div className="userprofile-threads">
            <strong>Opublikowane wątki</strong>
            {threads}
          </div>
          <div className="userprofile-threadIems">
            <strong>Opublikowane odpowiedzi</strong>
            {threadItems}
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserProfile
