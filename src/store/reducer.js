import { combineReducers } from 'redux'
import { logining } from './login.redux'
import { monitor } from './monitor.redux'
import { supervision } from './main/supervision.redux'
import { archives } from './main/digital_archives.redux'
import { riverPic } from './riverPic.redux'
import { waterInfo } from './waterInfo.redux'
import { account } from './account.redux'

export default combineReducers({
  logining,
  monitor,
  supervision,
  archives,
  riverPic,
  waterInfo,
  account
})
