/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/display-name */
import React from 'react'
import { Modal, Carousel } from 'antd'
import qs from 'qs'
import SearchTable from '../search_table'
import { serverIp } from '../../config/varibles'
import Statistic from '../statistic'
import './style.scss'

class SearchList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStatistic: true
    }
    this.columns = [
      {
        title: '文件名',
        align: 'center',
        dataIndex: 'issue',
        key: 'issue',
        width: 100
      },
      {
        title: '统计',
        align: 'center',
        dataIndex: 'statis',
        key: 'statis',
        render: (text, record) => (
          <span className="iconfont" onClick={() => this.handleStatistics('statis', record)}>
            &#xe608;
          </span>
        )
      },
      {
        title: '下载',
        dataIndex: 'download',
        align: 'center',
        key: 'download',
        render: (text, record) => {
          const { productFileInfoList } = record
          const id = productFileInfoList.length > 0 ? productFileInfoList[0].id : null
          return (
            <a
              className="iconfont"
              href={`${serverIp}/htht-ShanXi/product/downLoadProductIssueFile?cycle=${record.cycle}&productInfoId=${id}&issue=${record.issue}&regionId=${record.regionId}`}
            >
              &#xe618;
            </a>
          )
        }
      }
    ]
  }

  // 统计弹出框
  handleStatistics = (type, record) => {
    const { showModal, getRegionsStatistic, search } = this.props
    const { defaultProdcut } = search
    const { regionIds } = defaultProdcut
    const regionsBar = regionIds ? regionIds.map((item) => item.value) : []
    if (type === 'statis') {
      const data = {
        issue: record.issue,
        parentRegionId: regionsBar[regionsBar.length - 1],
        cycle: record.cycle,
        mark: record.mark
      }
      getRegionsStatistic(data)
      this.setState({
        isStatistic: true
      })
    } else {
      this.setState({
        isStatistic: false
      })
    }
    showModal({ name: 'showStatisticModal', value: true })
  }

  // 关闭统计弹出框
  handleCancel = () => {
    const { showModal } = this.props
    showModal({ name: 'showStatisticModal', value: false })
  }

  // 下载全部
  handleDownloadAll = () => {
    const { search, downloadAll } = this.props
    const { defaultProdcut } = search
    const params = {
      beginTime: defaultProdcut.beginTime.format('YYYY-MM-DD HH:mm:ss'),
      endTime: defaultProdcut.endTime.format('YYYY-MM-DD HH:mm:ss'),
      cycle: defaultProdcut.cycle,
      productId: defaultProdcut.id,
      satname: defaultProdcut.sateAndSensor.split('_')[0],
      sensorname: defaultProdcut.sateAndSensor.split('_')[1],
      regionIds: defaultProdcut.regionIds.map((item) => item.value).join(',')
    }
    downloadAll(params)
    // console.warn(search)
  }

  // 点击表格行地图贴产品和设置高亮
  clickRow = (e, record, activeIndex) => {
    const { mosaicFile } = record
    const { search, setDefaultDataList } = this.props
    const { dataSource } = search
    const { productInfoList } = dataSource
    const [defaultDataList] = productInfoList.filter((item) => item.mosaicFile === mosaicFile)
    const data = {
      defaultDataList,
      activeIndex
    }
    setDefaultDataList(data)
  }

  // table行类型（高亮用）
  rowClassName = (record, index) => {
    const { search } = this.props
    const { activeIndex } = search
    return index === activeIndex ? 'table-row-active' : ''
  }

  onPageChangePage = (page) => {
    const { changeFieldsSin, search } = this.props
    const { defaultProdcut } = search
    changeFieldsSin({ key: 'pageNum', value: page }, defaultProdcut)
  }

  render() {
    const { isStatistic } = this.state
    const { search, getRegionsStatistic } = this.props
    const { dataSource, defaultProdcut, showStatisticModal } = search
    const { pageSize, pageNum } = defaultProdcut
    const { productInfoList = [], totalCount = 0 } = dataSource

    let imgs = []
    imgs =
      productInfoList &&
      productInfoList
        .map((item) => {
          return item.productFileInfoList
            .map((ele) => /jpe?g|png/.test(ele.fileType) && ele)
            .filter(Boolean)
        })
        .flat()
    const total = totalCount
    const params = qs.stringify({
      beginTime: defaultProdcut.beginTime.format('YYYY-MM-DD HH:mm:ss'),
      endTime: defaultProdcut.endTime.format('YYYY-MM-DD HH:mm:ss'),
      cycle: defaultProdcut.cycle,
      productId: defaultProdcut.id,
      satname: defaultProdcut.sateAndSensor ? defaultProdcut.sateAndSensor.split('_')[0] : '',
      sensorname: defaultProdcut.sateAndSensor ? defaultProdcut.sateAndSensor.split('_')[1] : '',
      regionIds: defaultProdcut.regionIds
        ? defaultProdcut.regionIds.map((item) => item.value).join(',')
        : ''
    })

    return (
      <div className="search-list">
        <div className="table-title">
          产品列表
          <div className="operator">
            {productInfoList.length ? (
              <a
                className="iconfont download-all"
                title="批量下载"
                href={`${serverIp}/htht-ShanXi/product/downLoadAllFileByCondition?${params}`}
              >
                &#xe638;
              </a>
            ) : null}
            <span
              className="iconfont autoplay"
              title="播放"
              onClick={() => this.handleStatistics('autoPlay')}
            >
              &#xe61e;
            </span>
          </div>
        </div>
        <Modal
          wrapClassName={isStatistic ? 'common-modal statistics-modal' : 'common-modal'}
          visible={showStatisticModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered
          footer={null}
          destroyOnClose
          maskClosable={false}
        >
          {isStatistic ? (
            <Statistic search={search} getRegionsStatistic={getRegionsStatistic} />
          ) : (
            <Carousel autoplay>
              {imgs.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={`${serverIp}/FileServer/${item.relativePath}`} alt="" />
                  </div>
                )
              })}
            </Carousel>
          )}
        </Modal>
        <SearchTable
          dataSource={productInfoList}
          columns={this.columns}
          total={total}
          clickRow={this.clickRow}
          rowClassName={this.rowClassName}
          pageSize={pageSize}
          pageNum={pageNum}
          onPageChangePage={this.onPageChangePage}
        />
      </div>
    )
  }
}

export default SearchList
