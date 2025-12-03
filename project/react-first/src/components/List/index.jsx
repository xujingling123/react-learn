import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class index extends Component {
    // 属性验证
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }
    
  render() {
    const { todos,updateTodo,deleteTodo }= this.props
    return (
            <ul className="todo-main">
                {todos.map(item => (
                    <Item key={item.id} item={item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                ))}
                
            </ul>
    )
  }
}
