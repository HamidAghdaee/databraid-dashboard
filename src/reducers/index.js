import { combineReducers } from 'redux'
import { rootReducer as inboxReducer }  from '@databraid/react-inbox-libs/lib'

export default combineReducers({
  inbox: inboxReducer,
})
