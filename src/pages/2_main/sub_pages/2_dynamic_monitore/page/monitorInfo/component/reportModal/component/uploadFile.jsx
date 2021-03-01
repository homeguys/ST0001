/* eslint-disable */
import React from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import TableDisplay from '../../../../../../../../../component/tableDisplay'

/* 文件上传列表 */
function FileList(props) {
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '文档名称',
      dataIndex: 'fileName',
      key: 'fileName',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '最新上传时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: () => {
        return (
          <div className="operate">
            <span>修改</span>
            <span>删除</span>
          </div>
        )
      }
    }
  ]

  const dataSource = [
    {
      id: 1,
      fileName: 'xxxxxxxxxxx图片',
      type: 'png',
      size: '301.73kb',
      time: '2019.03.30 15:28:23'
    },
    {
      id: 2,
      fileName: 'xxxxxxxxxxx文档',
      type: 'pdf',
      size: '508.73kb',
      time: '2019.03.50 15:28:23'
    },
    {
      id: 3,
      fileName: 'xxxxxxxxxxx表格',
      type: 'excel',
      size: '108.83kb',
      time: '2019.03.50 15:28:23'
    }
  ]
  return (
    <TableDisplay
      recordId="id"
      classContent="table-info"
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  )
}

/* 资料上传 */
export default function UploadFile() {
  // 资料上传数据
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.warn(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
  return (
    <div className="upload-file">
      <p className="title-name">
        <span>资料上传</span>
        <Upload {...props} showUploadList={false}>
          <Button>
            <UploadOutlined />
            上传文件
          </Button>
        </Upload>
      </p>
      <FileList />
    </div>
  )
}
