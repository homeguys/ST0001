/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/display-name */
import React from 'react'
import { Modal } from 'antd'
import SearchTable from '../search_table'
import { serverIp } from '../../config/varibles'
import './style.scss'

class SearchListInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
    this.columns = [
      {
        title: '文件名',
        align: 'center',
        dataIndex: 'fileName',
        key: 'fileName',
        width: 100,
        render: (record) => <span title={record}>{record}</span>
      },
      {
        title: '格式',
        align: 'center',
        dataIndex: 'fileType',
        key: 'fileType'
      },
      {
        title: '预览',
        align: 'center',
        dataIndex: 'preview',
        key: 'preview',
        render: (text, record) => {
          const reg = /png|jpe?g/
          if (reg.test(record.fileType)) {
            return (
              <span className="iconfont" onClick={() => this.handlePreview(record)}>
                &#xe669;
              </span>
            )
          }
          return null
        }
      },
      {
        title: '下载',
        dataIndex: 'download',
        align: 'center',
        key: 'download',
        render: (text, record) => (
          <a
            className="iconfont"
            href={`${serverIp}/htht-ShanXi/product/downLoadProductFile?fileName=${record.fileName}&filePath=${record.filePath}`}
          >
            &#xe618;
          </a>
        )
      }
    ]
  }

  // 点击预览按钮
  handlePreview = (record) => {
    this.setState({
      img: record.relativePath
    })
    const { showModal } = this.props
    showModal({ name: 'showInfoPreviewModal', value: true })
  }

  // 关闭详情图片预览弹出框
  handleCancel = () => {
    const { showModal } = this.props
    showModal({ name: 'showInfoPreviewModal', value: false })
  }

  // 点击下载按钮
  handleDownload = (record) => {
    const { fileName, filePath } = record
    window.open(
      `${serverIp}/htht-ShanXi/product/downLoadProductFile?fileName=${fileName}&filePath=${filePath}`
    )
  }

  // 分页点击
  onPageChangePage = () => {}

  // 点击表格行
  clickRow = () => {}

  render() {
    const { img } = this.state
    const { search } = this.props
    const { defaultDataList, showInfoPreviewModal } = search
    const len = Object.keys(defaultDataList).length
    const productFileInfoList = len !== 0 ? defaultDataList.productFileInfoList : []

    const total = productFileInfoList.length
    return (
      <div className="search-list-info">
        <div className="table-title">产品清单</div>
        <SearchTable
          dataSource={productFileInfoList}
          columns={this.columns}
          total={total}
          type="info"
        />
        <Modal
          wrapClassName="search-info-modal"
          visible={showInfoPreviewModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered
          footer={null}
          destroyOnClose
          maskClosable={false}
        >
          <img src={`${serverIp}/FileServer/${img}`} alt="" />
        </Modal>
      </div>
    )
  }
}

export default SearchListInfo
