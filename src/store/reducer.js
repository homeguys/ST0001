import { combineReducers } from 'redux'
import { logining } from './login.redux'
import { search } from './search.redux'
import { basemap } from './basemap.redux'

export default combineReducers({
  logining,
  search,
  basemap
})
