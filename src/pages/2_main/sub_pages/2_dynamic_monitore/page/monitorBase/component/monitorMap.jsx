/* eslint-disable */
import React, { useEffect, memo } from 'react'
import axios from 'axios'
import echarts from 'echarts'

/* 监测地图 */
const deqing = './mock/asset/huzhou.json'

const MonitorMap = memo(function MonitorMap (props) {
  const { dataSource } = props
  let chart = null
  useEffect(() => {
    initMap()
    if (chart) {
      // 如果地图存在则销毁
      chart.dispose()
    }
    axios.get(deqing)
      .then(res => {
        echarts.registerMap('德清', res.data)
        var myChart = echarts.extendsMap('mapBox', {
          bgColor: 'rgba(0, 0, 0, 0)', // 画布背景色
          mapName: '德清',    // 地图名
          goDown: true,       // 是否下钻
          // 下钻回调
          callback: function (name, option, instance) {
            console.log(name, option, instance)
          },
          data: []
        })
      })
  }, [dataSource])

  const initMap = () => {

    echarts.extendsMap = function (id, opt) {
      chart = this.init(document.getElementById(id))
      var curGeoJson = {}
      var cityMap = {
        "德清县": "deqing"
      }

      var defaultOpt = {
        mapName: 'china',     // 地图展示
        goDown: false,        // 是否下钻
        bgColor: 'rgba(0, 0, 0, 1)',   // 画布背景色
        activeArea: [],       // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function (name, option, instance) { }
      }

      if (opt) opt = this.util.extend(defaultOpt, opt)

      // 层级索引
      var name = [opt.mapName]
      var idx = 0
      var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
      };

      var line = [[0, 0], [8, 11], [0, 22]]

      var style = {
        font: '16px "Microsoft YaHei", sans-serif',
        textColor: '#000',
        lineColor: 'rgba(147, 235, 248, 1)'
      }

      var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
        **/
        resetOption: function (i, o, n) {
          o.series[0].data = dataSource
          // var breadcrumb = this.createBreadcrumb(n)

          // var j = name.indexOf(n)
          // var l = o.graphic.length
          // if (j < 0) {
          //   o.graphic.push(breadcrumb)
          //   o.graphic[0].children[0].shape.x2 = 145
          //   o.graphic[0].children[1].shape.x2 = 145
          //   if (o.graphic.length > 2) {
          //     for (var x = 0; x < opt.data.length; x++) {
          //       if (n === opt.data[x].name + '县') {
          //         o.series[0].data = handleEvents.initSeriesData([opt.data[x]])
          //         break
          //       } else o.series[0].data = []
          //     }
          //   };
          //   name.push(n)
          //   idx++
          // } else {
          //   o.graphic.splice(j + 2, l)
          //   if (o.graphic.length <= 2) {
          //     o.graphic[0].children[0].shape.x2 = 60
          //     o.graphic[0].children[1].shape.x2 = 60
          //     o.series[0].data = handleEvents.initSeriesData(opt.data)
          //   }
          //   name.splice(j + 1, l)
          //   idx = j
          //   pos.leftCur -= pos.leftPlus * (l - j - 1)
          // }

          o.geo.map = n
          o.geo.zoom = 0.4
          i.clear()
          i.setOption(o)
          this.zoomAnimation()
          opt.callback(n, o, i)
        },

        /**
         * name 地图名
        **/
        createBreadcrumb: function (name) {
          var cityToPinyin = {
            "德清县": "deqing"
          };
          var breadcrumb = {
            type: 'group',
            id: name,
            left: pos.leftCur + pos.leftPlus,
            top: pos.top + 3,
            children: [{
              type: 'polyline',
              left: -90,
              top: -5,
              shape: {
                points: line
              },
              style: {
                stroke: '#fff',
                key: name
                // lineWidth: 2,
              },
              onclick: function () {
                var name = this.style.key
                handleEvents.resetOption(chart, option, name)
              }
            }, {
              type: 'text',
              left: -68,
              top: 'middle',
              style: {
                text: name,
                textAlign: 'center',
                fill: style.textColor,
                font: style.font
              },
              onclick: function () {
                var name = this.style.text
                handleEvents.resetOption(chart, option, name)
              }
            }, {
              type: 'text',
              left: -68,
              top: 10,
              style: {
                name: name,
                text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                textAlign: 'center',
                fill: style.textColor,
                font: '12px "Microsoft YaHei", sans-serif'
              },
              onclick: function () {
                var name = this.style.name
                handleEvents.resetOption(chart, option, name)
              }
            }]
          }

          pos.leftCur += pos.leftPlus

          return breadcrumb
        },

        // 设置effectscatter
        initSeriesData: function (data) {
          var temp = []
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name]
            if (geoCoord) {
              temp.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value, data[i].level)
              })
            }
          }
          return temp
        },

        zoomAnimation: function () {
          var count = null
          var zoom = function (per) {
            if (!count) count = per
            count = count + per
            chart.setOption({
              geo: {
                zoom: count
              }
            })
            if (count < 1) window.requestAnimationFrame(function () {
              zoom(0.2)
            })
          };
          window.requestAnimationFrame(function () {
            zoom(0.2)
          })
        }
      }

      var option = {
        backgroundColor: opt.bgColor,
        graphic: [{
          type: 'group',
          left: pos.left,
          top: pos.top - 4,
          children: [{
            type: 'line',
            left: 0,
            top: -20,
            shape: {
              x1: 0,
              y1: 0,
              x2: 60,
              y2: 0
            },
            style: {
              stroke: style.lineColor,
            }
          }, {
            type: 'line',
            left: 0,
            top: 20,
            shape: {
              x1: 0,
              y1: 0,
              x2: 60,
              y2: 0
            },
            style: {
              stroke: style.lineColor,
            }
          }]
        }, {
          id: name[idx],
          type: 'group',
          left: pos.left + 2,
          top: pos.top,
          show: false,
          children: [{
            type: 'polyline',
            left: 90,
            top: -12,
            shape: {
              points: line
            },
            style: {
              stroke: 'transparent',
              key: name[0]
            },
            onclick: function () {
              var name = this.style.key;
              handleEvents.resetOption(chart, option, name);
            }
          }, {
            type: 'text',
            left: 0,
            top: 'middle',
            style: {
              text: name[0] === '德清' ? '德清县' : name[0],
              textAlign: 'center',
              fill: style.textColor,
              font: style.font
            },
            onclick: function () {
              handleEvents.resetOption(chart, option, '德清');
            }
          }, {
            type: 'text',
            left: 0,
            top: 10,
            style: {
              text: 'DEQING',
              textAlign: 'center',
              fill: style.textColor,
              font: '12px "Microsoft YaHei", sans-serif',
            },
            onclick: function () {
              handleEvents.resetOption(chart, option, '德清');
            }
          }]
        }],
        visualMap: {
          min: 0,
          max: 1600,
          left: 26,
          bottom: 40,
          showLabel: !0,
          pieces: [{
            gt: 1200,
            label: "> 1200",
            color: "#F04040"
          }, {
            gte: 800,
            lte: 1200,
            label: "800 - 1200",
            color: "#F29696"
          }, {
            gte: 600,
            lt: 800,
            label: "600 - 800",
            color: "#F3BFBF"
          }, {
            gt: 400,
            lt: 600,
            label: "400 - 600",
            color: "#F3D1D1"
          }, {
            lt: 400,
            label: "<400",
            color: "#F3D1D1"
          }],
          show: !0
        },
        geo: {
          map: opt.mapName,
          // roam: true,
          zoom: 1,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(214, 204, 204, 0.6)',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(244, 183, 183, 0.6)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(236, 77, 77, .8)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              // shadowColor: 'rgba(128, 217, 248, 1)',
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: '#D24747',
              borderWidth: 0
            }
          },
          regions: opt.activeArea.map(function (item) {
            if (typeof item !== 'string') {
              return {
                name: item.name,
                itemStyle: {
                  normal: {
                    areaColor: item.areaColor || '#389BB7'
                  }
                },
                label: {
                  normal: {
                    show: item.showLabel,
                    textStyle: {
                      color: '#fff'
                    }
                  }
                }
              }
            } else {
              return {
                name: item,
                itemStyle: {
                  normal: {
                    borderColor: '#91e6ff',
                    areaColor: '#389BB7'
                  }
                }
              }
            }
          })
        },
        series: [{
          name: "地表变化",
          type: "map",
          geoIndex: 0,
          data: dataSource
        }]
      }
      chart.setOption(option)

      chart.off('click')
      chart.on('click', params => {
        var _self = this
        if (opt.goDown && params.name !== name[idx]) {
          if (cityMap[params.name]) {
            var url = './mock/asset/' + cityMap[params.name] + '.json'
            axios.get(url)
              .then(res => {
                curGeoJson = res.data
                echarts.registerMap(params.name, res.data)
                handleEvents.resetOption(chart, option, params.name)
              })
          }
        }
      })

      chart.setMap = function (mapName) {
        var _self = this
        if (mapName.indexOf('市') < 0) mapName = mapName + '市'
        var citySource = cityMap[mapName]
        if (citySource) {
          var url = './map/' + citySource + '.json'
          axios.get(url)
            .then(res => {
              curGeoJson = res.data
              echarts.registerMap(mapName, res.data)
              handleEvents.resetOption(_self, option, mapName)
            })
        }
      }
      return chart
    }
  }
  return (
    <div className="char-content">
      <article>地表变化分布图</article>
      <div className="char-box" id="mapBox">
      </div>
    </div>
  )
})

export default MonitorMap
