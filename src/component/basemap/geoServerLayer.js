/* eslint-disable */
import { ImageryLayer, WebMapServiceImageryProvider } from 'cesium'

// rgb转16进制
function to16(color) {
  const r = parseInt(color[0], 10)
  const g = parseInt(color[1], 10)
  const b = parseInt(color[2], 10)
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  return hex
}

function getStyle(colorValue, layerName) {
  const colors = []
  const { reMaps } = colorValue
  for (let i = 0; i < reMaps.length; i++) {
    if (!reMaps[i].color) continue
    colors.push({
      color: to16(reMaps[i].color),
      value: parseFloat(reMaps[i].value),
      opacity: reMaps[i].color[3]
    })
  }

  const styleLayerName = `<Name>${'yn2:' + layerName}</Name>`
  let colorsString = ''
  colors.forEach(item => {
    colorsString += `<ColorMapEntry color="${item.color}" quantity="${item.value}"/>`
  })

  const result = `<?xml version="1.0" encoding="UTF-8"?>
    <StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
    <NamedLayer>
    ${styleLayerName}
    <UserStyle>
    <Name>style</Name>
    <Title>NDVI distribution</Title>
    <FeatureTypeStyle>
    <Rule>
    <RasterSymbolizer>
    <Opacity>1.0</Opacity>
    <ColorMap>
    ${colorsString}
    </ColorMap>
    </RasterSymbolizer>
    </Rule>
    </FeatureTypeStyle>
    </UserStyle>
    </NamedLayer>
    </StyledLayerDescriptor>`
  return result
}

/*
 * 加载服务
 * info.：服务的信息
 * layers：发布服务的名
 * */
export default class GeoServerLayer extends ImageryLayer {
  constructor(info, style, time) {
    const wmsProvider = new WebMapServiceImageryProvider({
      url: info ? info.url : '',
      layers: info ? info.layerName : '',
      parameters: {
        service: 'WMS',
        format: 'image/png',
        transparent: true,
        time,
        sld_body: getStyle(style, info ? info.prodName : '')
      }
    })

    super(wmsProvider)
  }
}
