const INIT_MAP = 'INIT_MAP' // 初始化地图

const initState = {
  viewer: null,
  layersCfg: {}
}

export function basemap(state = initState, action) {
  switch (action.type) {
    case INIT_MAP:
      return { ...state, viewer: action.data }
    default:
      return state
  }
}

// 初始化地图
export function initMap(data) {
  return { type: INIT_MAP, data }
}
