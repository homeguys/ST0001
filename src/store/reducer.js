import { combineReducers } from 'redux'
import { logining } from './login.redux'
import { supervision } from './main/supervision.redux'

export default combineReducers({
  logining,
  supervision
})
