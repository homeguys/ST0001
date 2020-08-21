import { combineReducers } from 'redux'
import { logining } from './login.redux'
import { monitor } from './monitor.redux'
import { supervision } from './main/supervision.redux'
import { archives } from './main/digital_archives.redux'

export default combineReducers({
  logining,
  monitor,
  supervision,
  archives
})
