import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from './AppState'
import { UserProfileReducer } from './user/Reducer'

const configureStore = () => {
  return createStore(rootReducer, {
    user: UserProfileReducer,
  })
}

export default configureStore
