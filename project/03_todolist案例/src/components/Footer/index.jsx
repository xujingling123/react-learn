import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  handleCheckAll=(e)=> {
    this.props.checkAllTodo(e.target.checked)
    
  }
  handleDeleteAll=()=> {
    this.props.deleteAllTodo()
  }

  render() {
    const { todos }= this.props
    //已完成个数
    // const count= todos.filter(item => item.done).length
    const count= todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    //总个数
    const total= todos.length

    return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked={count===total && total!==0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                <span>已完成{count}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleDeleteAll}>清除已完成任务</button>
            </div>
    )
  }
}
