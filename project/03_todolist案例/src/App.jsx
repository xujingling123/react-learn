//创建“外壳”组件App
import React,{Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'
class App extends Component {
  // 初始化数据
  state = { 
    todos:[
      {id:1,name:'吃饭',done:false},
      {id:2,name:'睡觉',done:true},
      {id:3,name:'打代码',done:false},
      {id:4,name:'逛街',done:true},
      {id:5,name:'看电影',done:false}
    ]
   }
   addTodo=(todoObj)=>{
    // 1.获取原数据
     const {todos}=this.state
     //追加一个todoObj
     const newTodos=[todoObj,...todos]
     //更新状态
     this.setState({
       todos:newTodos
     })
  }
  updateTodo=(id,done)=>{
    //获取状态中的todos
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id){
        return {...todoObj,done}
      }else{
        return todoObj
      }
    })
    this.setState({
      todos:newTodos
    })

  }
  deleteTodo=(id)=>{
    //获取状态中的todos
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({
      todos:newTodos
    })
  }
  checkAllTodo=(done)=>{
    //获取状态中的todos
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({
      todos:newTodos
    })
  }
  deleteAllTodo=()=>{
    //获取状态中的todos
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({
      todos:newTodos
    })
  }
  render() {
    const {todos}=this.state
    return (
        <div className="todo-container">
            <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllTodo={this.deleteAllTodo}/>
            </div>
        </div>
    );
  }
}
//暴露app组件
export default App;