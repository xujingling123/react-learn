import React, { Component } from 'react'


export default class Count extends Component {

   
    increment=()=>{ 
        const {value} = this.selectNumber;
        this.props.add(parseInt(value))
    }
    decrement=()=>{ 
        const {value} = this.selectNumber;
        this.props.minus(parseInt(value))         
    }
    incrementIfOdd=()=>{ 
        const {value} = this.selectNumber;
        this.props.addIfOdd(parseInt(value))  
    }
    incrementAsync=()=>{ 
        const {value} = this.selectNumber;
        this.props.addAsync(parseInt(value))     
    }
  render() {
    const {count} = this.props;
    return (
      <div>
        <h2>当前求和为：{count}</h2>
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
