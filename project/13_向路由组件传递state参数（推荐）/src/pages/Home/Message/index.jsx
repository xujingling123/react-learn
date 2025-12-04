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
  render() {
    return (
      <div>
                <ul>
                    {
                        this.state.messageArr.map(item=>{
                            return (
                                <li key={item.id}>
                                    <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                  </ul>
                  <hr/>
                  <Route path="/home/message/detail" component={Detail} />
      </div>
    )
  }
}
