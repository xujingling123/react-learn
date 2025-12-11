import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class index extends Component {
    state={
        messageArr:[
            {id:'1',title:'message1'},
            {id:'2',title:'message2'},
            {id:'3',title:'message3'},
        ]
    }
    pushShow(id,title){
        this.props.history.push({pathname:'/home/message/detail',state:{id,title}})
    }
    replaceShow(id,title){
        this.props.history.replace({pathname:'/home/message/detail',state:{id,title}})
    }
    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    go=()=>{
        this.props.history.go(-1)
    }
  render() {
    return (
      <div>
                <ul>
                    {
                        this.state.messageArr.map(item=>{
                            return (
                                <li key={item.id}>
                                    <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                                    <button onClick={()=>{this.pushShow(item.id,item.title)}}>push查看</button>
                                    <button onClick={()=>{this.replaceShow(item.id,item.title)}}>replace查看</button>
                                </li>
                            )
                        })
                    }
                  </ul>
                  <hr/>
                  <Route path="/home/message/detail" component={Detail} />

                  <button onClick={this.back}>回退</button>
                  <button onClick={this.forward}>前进</button>
                  <button onClick={this.go}>go</button>
      </div>
    )
  }
}
