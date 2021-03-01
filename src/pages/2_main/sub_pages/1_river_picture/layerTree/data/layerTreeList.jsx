/*
 * @Author: 郑杰14
 * @Date: 2020-08-17 15:59:21
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-31 10:12:51
 * @Description:
 */
import React from 'react'
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled
} from '@ant-design/icons'

const layerTreeList = [
  {
    title: '水域现状图层',
    key: 'currentWaters',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <SmileOutlined />,
    children: [
      {
        title: '河道',
        key: 'riverCourse',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '水库',
        key: 'reservoir',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '山塘',
        key: 'shantang',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '湖泊',
        key: 'lake',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '其他水域',
        key: 'otherWater',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '重要水域图层',
    key: 'importantWater',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownOutlined />,
    children: [
      {
        title: '重要河道',
        key: 'importantRiverCourse',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '重要水库',
        key: 'importantReservoir',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '重要山塘',
        key: 'importantShantang',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '重要湖泊',
        key: 'importantLake',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '水系规划图层',
    key: 'waterPlan',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownOutlined />,
    children: [
      {
        title: '2018年水系保护规划',
        key: 'waterPlan_2018',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '工业园区水系规划图层',
    key: 'industrialParkWaterPlan',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <SmileOutlined />,
    children: [
      {
        title: '德清通航智造小镇水系调整',
        key: 'thzzxzsitz',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清科技新城水系规划(地信产业园)',
        key: 'kjxcsxgh',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清华夏产业新城水系调整',
        key: 'hxcyxcsxtz',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清莫干山高新区区域水域动态平衡图',
        key: 'mgsgxqqysydtpht',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清高新区拓展地块水域调整',
        key: 'gxqtzdksytz',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清站场新区水系调整规划',
        key: 'zcxqsxtzgh',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清钟管南舍单元水系调整',
        key: 'zgnsdysxtz',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清洛舍工业区水域调整',
        key: 'lsgyqsytz',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '德清太平桥工业区水域调整图',
        key: 'tpqgyqsytzt',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '工业园区水域动态调整平衡图',
        key: 'gyyqsydttzpht',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '河湖划界图层',
    key: 'riverLakeBorder',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <MehOutlined />,
    children: [
      {
        title: '管理范围',
        key: 'manageScope',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '保护范围',
        key: 'protectScope',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '水域变化图层',
    key: 'waterChange',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />,
    children: [
      {
        title: '2020年3季度第1期(3.19-8.12)',
        key: 'waterChange_2020_3',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2020年2季度第1期(2.18-4.13)',
        key: 'waterChange_2020_2',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2019年变化图斑',
        key: 'waterChange_2019',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2018年变化图斑',
        key: 'waterChange_2018',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2017年变化图斑',
        key: 'waterChange_2017',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2016年变化图斑',
        key: 'waterChange_2016',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '涉河涉堤及水域调整项目',
    key: 'shsdsytz',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />,
    children: [
      {
        title: '2020年度项目',
        key: 'shsdsytz_2020',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2019年度项目',
        key: 'shsdsytz_2019',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2018年度项目',
        key: 'shsdsytz_2018',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2017年度项目',
        key: 'shsdsytz_2017',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '2016年度项目',
        key: 'shsdsytz_2016',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '取水户图层',
    key: 'mizuhoLayer',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />,
    children: [
      {
        title: '取水户',
        key: 'mizuho',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '水利工程信息',
    key: 'waterConservancy',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />,
    children: [
      {
        title: '闸站',
        key: 'zhazhan',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '堰坝',
        key: 'barrage',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '水闸',
        key: 'sluice',
        layerUrl: '',
        layerType: ''
      },
      {
        title: '排涝泵站',
        key: 'drainagePumpingStation',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '饮用水水域保护图层',
    key: 'drinkingWaterLayer',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />,
    children: [
      {
        title: '饮用水水域保护地',
        key: 'drinkingWater',
        layerUrl: '',
        layerType: ''
      }
    ]
  },
  {
    title: '视频监控',
    key: 'videoMonitor',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />
  },
  {
    title: '巡查轨迹',
    key: 'patrolTrack',
    layerUrl: '',
    layerType: '',
    disabled: true,
    icon: <FrownFilled />
  }
]
export default layerTreeList
