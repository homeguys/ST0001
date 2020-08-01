import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import reducer from './store/reducer'
import { Routers } from './router/index_router'
import { title } from './config/varibles'
// eslint-disable-next-line import/no-unresolved
import 'cesium/Source/Widgets/widgets.css'
import './style/style.scss'
import './style/reset.scss'

document.title = title

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Routers />
      </ConfigProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
