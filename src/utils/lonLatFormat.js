/* eslint-disable radix */
/**
 * 一位的话前面补零
 * @param{*}num
 */
export function addZero(num) {
  return num < 10 ? `0${num}` : num
}

/**
 * 经纬度转换成度分秒
 */
export default function lonLatFormat(lonLat) {
  let lon = lonLat.longitude
  let lat = lonLat.latitude
  let lonText = ''
  let latText = ''
  if (lon > 0) {
    let etail = (lon - parseInt(lon, 10)) * 60
    lon = addZero(parseInt(lon))
    const eseconds = addZero(parseInt((etail - parseInt(etail)) * 60))
    etail = addZero(parseInt(etail))
    lonText = `${lon}°${etail}′${eseconds}″E`
  } else {
    lon = Math.abs(lon)
    let wtail = (lon - parseInt(lon)) * 60
    lon = addZero(parseInt(lon))
    const wseconds = addZero(parseInt((wtail - parseInt(wtail)) * 60))
    wtail = addZero(parseInt(wtail))
    lonText = `${lon}°${wtail}′${wseconds}″W`
  }
  if (lat > 0) {
    let ntail = (lat - parseInt(lat)) * 60
    lat = addZero(parseInt(lat))
    const nseconds = addZero(parseInt((ntail - parseInt(ntail)) * 60))
    ntail = addZero(parseInt(ntail))
    latText = `${lat}°${ntail}′${nseconds}″N`
  } else {
    lat = Math.abs(lat)
    let stail = (lat - parseInt(lat)) * 60
    lat = addZero(parseInt(lat))
    const sseconds = addZero(parseInt((stail - parseInt(stail)) * 60))
    stail = addZero(parseInt(stail))
    latText = `${lat}°${stail}′${sseconds}″S`
  }
  return { lon: lonText, lat: latText }
}
