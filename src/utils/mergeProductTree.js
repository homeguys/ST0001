// /* eslint-disable no-extra-semi */
// import axios from 'axios'
// import qs from 'qs'
// import { interfaceDir } from '../config/varibles'

// const flatTree = [] // 扁平化后台请求树结构产品列表

// // 将接口请求的tree结构拉平
// function handleFlatTree(tree) {
//   tree.forEach((item) => {
//     flatTree.push(item)
//     if (item.subTree) {
//       handleFlatTree(item.subTree)
//     }
//   })
// }

// // 请求本地productConfig.json
// function getProductConfig() {
//   return axios.get('./data/productConfig.json')
// }

// // 请求接口返回product tree
// function getProductTree() {
//   const userId = window.sessionStorage.getItem('userId')
//   const params = qs.stringify({ userId })
//   return axios.post(`${interfaceDir}/product/productTree`, params)
//   // return axios.get('./interface/productTree.json') // 本地
// }

// export default function mergeProductTree() {
//   return axios
//     .all([getProductConfig(), getProductTree()])
//     .then(
//       axios.spread((config, tree) => {
//         /**
//          * 考虑自定义配置和接口返回为空的情况
//          */
//         const productConfig = config.data // 自定义配置产品
//         const productTree = tree.data.data // 接口返回树结构
//         let defaultProduct = null // 默认选中项
//         const firstMark = productConfig[0].mark // 第一个产品标示

//         // 扁平化后台请求树结构产品
//         handleFlatTree(productTree)
//         const { length } = flatTree
//         // 合并本地配置和接口tree
//         for (let i = 0; i < productConfig.length; i++) {
//           for (let j = 0; j < length; j++) {
//             if (productConfig[i].mark === flatTree[j].mark) {
//               flatTree[j] = Object.assign(flatTree[j], productConfig[i])
//               if (productConfig[i].default) {
//                 defaultProduct = flatTree[j]
//               }
//               break
//             }
//           }
//         }

//         // 如果没有定义default配置
//         if (!defaultProduct) {
//           for (let i = 0; i < length; i++) {
//             if (firstMark === flatTree[i].mark) {
//               defaultProduct = flatTree[i]
//               break
//             }
//           }
//         }

//         defaultProduct.productId = defaultProduct.id
//         // 如果没有配置cycle
//         if (!defaultProduct.cycle) {
//           ;[defaultProduct.cycle] = defaultProduct.cycles
//         }

//         // 如果没有配置sateAndSensor
//         if (!defaultProduct.sateAndSensor) {
//           ;[defaultProduct.sateAndSensor] = defaultProduct.sateAndSensors
//         }

//         return {
//           productTree,
//           defaultProduct
//         }
//       })
//     )
//     .catch((ex) => {
//       console.warn(ex)
//     })
// }
