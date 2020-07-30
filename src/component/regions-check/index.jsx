// import React from 'react'
// import { Cascader } from 'antd'

// import './style.scss'

// class Statistic extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       options: []
//     }
//   }

//   componentDidMount() {
//     axios.get('./data/AreaCfg.xml').then((res) => {
//       const parser = new DOMParser()
//       const xmldoc = parser.parseFromString(res.data, 'text/xml')
//       const province = xmldoc.getElementsByTagName('province')
//       const options = parseAreaXml(province)
//       this.setState({
//         options
//       })
//     })
//   }

//   // 地区选择
//   onChange = (regionIds, selectedOptions) => {}

//   render() {
//     return (
//       <div className="regions-check">
//         <Cascader
//           allowClear={false}
//           options={options}
//           onChange={onChange}
//           placeholder="请选择"
//           value={regionIds}
//           changeOnSelect
//         />
//       </div>
//     )
//   }
// }

// export default Statistic
