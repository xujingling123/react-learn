//引入count的UI组件
import CountUI from '../../components/Count'
//引入count的actionCreator
import { createIncrementAction, createDecrementAction,  createIncrementAsyncAction } from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//映射状态
const mapStateToProps = (state) => {
  return {
    count: state
  }
}
//映射操作状态的方法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (data)=> {
//       dispatch(createIncrementAction(data))
//     },
//     minus: (data)=> {
//       dispatch(createDecrementAction(data))
//     },
//     addIfOdd: (data)=> {
//       if(data % 2!==0){
//         dispatch(createIncrementAction(data))
//       }
//     },
//     addAsync: (data)=> {
//       dispatch(createIncrementAsyncAction(data, 500))
//     }
//   }
// }
//简写
const mapDispatchToProps = {
  add: createIncrementAction,
  minus: createDecrementAction,
  addIfOdd: createIncrementAction,
  addAsync: createIncrementAsyncAction
}

//创建connect 的映射关系暴露组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
