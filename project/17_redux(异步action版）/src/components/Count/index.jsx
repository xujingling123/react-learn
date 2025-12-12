import React, { Component } from 'react'
import store from '../../redux/store'
import{createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
    componentDidMount(){
        //监测redux状态改变
        store.subscribe(()=>this.setState({}))
    }
    increment=()=>{ 
        const {value} = this.selectNumber;
        // store.dispatch({type:'increment',data:parseInt(value)})
        store.dispatch(createIncrementAction(parseInt(value)))
        
    }
    decrement=()=>{ 
        const {value} = this.selectNumber;
        // store.dispatch({type:'decrement',data:parseInt(value)})
        store.dispatch(createDecrementAction(parseInt(value)))
        
    }
    incrementIfOdd=()=>{ 
        const {value} = this.selectNumber;
        const count=store.getState()
        if(count%2!==0){
            // store.dispatch({type:'increment',data:parseInt(value)})
            store.dispatch(createIncrementAction(parseInt(value)))
        }
        
    }
    incrementAsync=()=>{ 
        const {value} = this.selectNumber;
        setTimeout(()=>{
            // store.dispatch({type:'increment',data:parseInt(value)})
            store.dispatch(createIncrementAsyncAction(parseInt(value),500))
        },1000)
        
    }
  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
