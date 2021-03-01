/*
 * @Author: your name
 * @Date: 2020-08-06 17:34:43
 * @LastEditTime: 2020-11-19 17:12:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ST0001\src\store\reducer.js
 */
import { combineReducers } from 'redux'
import { logining } from './login.redux'
import { monitor } from './monitor.redux'
import { supervision } from './main/supervision.redux'
import { archives } from './main/digital_archives.redux'
import { riverPic } from './riverPic.redux'
import { waterInfo } from './waterInfo.redux'
import { account } from './account.redux'
import { screen } from './screen.redux'

export default combineReducers({
  logining,
  monitor,
  supervision,
  archives,
  riverPic,
  waterInfo,
  account,
  screen
})
