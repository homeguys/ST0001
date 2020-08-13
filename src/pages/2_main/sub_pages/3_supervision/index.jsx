import React from 'react'
<<<<<<< HEAD
import './style.scss'

class Supervision extends React.Component {
  constructor(props) {
    super(props)
    this.name = 'wanglei'
  }

  render() {
    return <div id="supervision">Supervision</div>
  }
}

export default Supervision
=======
import { connect } from 'react-redux'
import { Space } from 'antd'
import SearchBox from './search_box'
import ResultTable from '../../../../component/result_table'
import ModalEdit from './modal_edit'
import { changeSupervisionSin } from '../../../../store/main/supervision.redux'
import './style.scss'

const data = [
  {
    key: 1,
    name: '1',
    company: 'XX市人民政府街道办事处',
    tel: '张三 1881699670',
    waters: '双槽斗河道',
    grade: '一般水域',
    col6: '水域补偿',
    col7: '永久性占用',
    col8: '2019-7',
    col9: '1533',
    col10: '2000',
    col11: '未开工',
    col12: '2019-7',
    col13: '正常'
  },
  {
    key: 2,
    name: '2',
    company: 'XX市人民政府街道办事处',
    tel: '张三 1881699670',
    waters: '双槽斗河道',
    grade: '一般水域',
    col6: '水域补偿',
    col7: '永久性占用',
    col8: '2019-7',
    col9: '1533',
    col10: '2000',
    col11: '未开工',
    col12: '2019-7',
    col13: '正常'
  },
  {
    key: 3,
    name: '3',
    company: 'XX市人民政府街道办事处',
    tel: '张三 1881699670',
    waters: '双槽斗河道',
    grade: '一般水域',
    col6: '水域补偿',
    col7: '永久性占用',
    col8: '2019-7',
    col9: '1533',
    col10: '2000',
    col11: '未开工',
    col12: '2019-7',
    col13: '正常'
  },
  {
    key: 4,
    name: '4',
    company: 'XX市人民政府街道办事处',
    tel: '张三 1881699670',
    waters: '双槽斗河道',
    grade: '一般水域',
    col6: '水域补偿',
    col7: '永久性占用',
    col8: '2019-7',
    col9: '1533',
    col10: '2000',
    col11: '未开工',
    col12: '2019-7',
    col13: '正常'
  },
  {
    key: 5,
    name: '5',
    company: 'XX市人民政府街道办事处',
    tel: '张三 1881699670',
    waters: '双槽斗河道',
    grade: '一般水域',
    col6: '水域补偿',
    col7: '永久性占用',
    col8: '2019-7',
    col9: '1533',
    col10: '2000',
    col11: '未开工',
    col12: '2019-7',
    col13: '正常'
  }
]

function Supervision(props) {
  const { supervision, changeSupervisionSin } = props
  const { editModalVisible } = supervision

  // 编辑
  function handleEdit() {
    changeSupervisionSin(['editModalVisible', true])
  }

  // 删除
  function handleDelete() {
    console.warn('delete')
  }

  //
  function handleOk() {
    changeSupervisionSin(['editModalVisible', false])
  }

  // 编辑弹出框关闭
  function handleCancel() {
    changeSupervisionSin(['editModalVisible', false])
  }

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '占用单位或个人',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: '联系人及电话',
      dataIndex: 'tel',
      key: 'tel'
    },
    {
      title: '所占水域',
      key: 'waters',
      dataIndex: 'waters'
    },
    {
      title: '水域保护等级',
      key: 'grade',
      dataIndex: 'grade'
    },
    {
      title: '补偿措施',
      key: 'col6',
      dataIndex: 'col6'
    },
    {
      title: '占用时间',
      key: 'col7',
      dataIndex: 'col7'
    },
    {
      title: '审批时间',
      key: 'col8',
      dataIndex: 'col8'
    },
    {
      title: '审批占用水域(㎡)',
      key: 'col9',
      dataIndex: 'col9'
    },
    {
      title: '审批补偿水域(㎡)',
      key: 'col10',
      dataIndex: 'col10'
    },
    {
      title: '项目进度',
      key: 'col11',
      dataIndex: 'col11'
    },
    {
      title: '最近一次监测时间',
      key: 'col12',
      dataIndex: 'col12'
    },
    {
      title: '监测结果',
      key: 'col13',
      dataIndex: 'col13'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="small">
          <button type="button" className="iconfont" onClick={handleEdit}>
            &#xe612;
          </button>
          <button type="button" className="iconfont" onClick={handleDelete}>
            &#xe61e;
          </button>
        </Space>
      )
    }
  ]

  return (
    <div id="supervision">
      <SearchBox />
      <ResultTable columns={columns} dataSource={data} rowClassName="aa" />
      <ModalEdit visible={editModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
    </div>
  )
}

export default connect((state) => ({ supervision: state.supervision }), { changeSupervisionSin })(
  Supervision
)
>>>>>>> babc643dbabd0d8d6033f5413a8eb624590d549e
