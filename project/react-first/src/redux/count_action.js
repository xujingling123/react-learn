import { INCREMENT,DECREMENT } from "./constant"
import store from "./store"
// function createIncrementAction(data) {
//   return {
//     type: 'increment',
//     data
//   }
// }
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

export const createIncrementAsyncAction=(data,time)=> {
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
            
        },time)
    }
  
}