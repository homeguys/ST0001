export default {
  mapParams: {
    baseMap: [
      {
        key: 'google_img',
        name: '影像图'
      },
      {
        key: 'google_vec',
        name: '交通图'
      }
    ],
    arcgisTileLayers: {
      MAP_IMG:
        'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
      MAP_VEC: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer',
      MAP_TER: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer'
    },
    offLineTdtLayers: {
      MAP_IMG:
        'http://192.168.1.238:16080/geoserver/gwc/service/wmts?&layer=hthtmap:tdt_img_11&style=&Service=WMTS&Request=GetTile&version=1.1.0&format=image/png&tileMatrixSet=EPSG:4326&TileMatrix={TileMatrix}&tileRow={TileRow}&tileCoL={TileCol}',
      MAP_VEC:
        'http://192.168.1.238:16080/geoserver/gwc/service/wmts?&layer=hthtmap:tdt_map_11&style=&Service=WMTS&Request=GetTile&version=1.1.0&format=image/png&tileMatrixSet=EPSG:4326&TileMatrix={TileMatrix}&tileRow={TileRow}&tileCoL={TileCol}',
      MAP_TER:
        'http://192.168.1.238:16080/geoserver/gwc/service/wmts?&layer=hthtmap:tdt_terrain_11&style=&Service=WMTS&Request=GetTile&version=1.1.0&format=image/png&tileMatrixSet=EPSG:4326&TileMatrix={TileMatrix}&tileRow={TileRow}&tileCoL={TileCol}'
    }
  }
}
