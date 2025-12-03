import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    state={mouse:false}
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({
                mouse:flag
            })
        }
    }
    handleCheck=(id)=>{
        return(event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
       
    }
    handleDelete=(id)=>{
        if(window.confirm('确定要删除吗？')){
            this.props.deleteTodo(id)
        }
        
    }


  render() {
    const {item}=this.props
    const {mouse}=this.state
    return (
            <li style={{backgroundColor:mouse?"#eee":"white"}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={item.done} onChange={this.handleCheck(item.id)}/>
                    <span>{item.name}</span>
                </label>
                <button onClick={()=>(this.handleDelete(item.id))} className="btn btn-danger" style={{ display:mouse?'block':'none' }}>删除</button>
            </li>
    )
  }
}
