import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class index extends Component {
    state = {
        users:[],//保存用户搜索结果
        isFirst:true,//判断是否是第一次加载数据
        isLoading:false,//判断是否正在加载数据
        err:''//保存错误信息
    }
    componentDidMount() { 
        this.token=PubSub.subscribe('getList',(msg,stateObj)=>{
            console.log('data---->',stateObj)
            this.setState(
                stateObj
            )
        })
    }
    componentWillUnmount() { 
        PubSub.unsubscribe(this.token)
    }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (

      <div className="row">
        {
            isFirst?<h2>欢迎使用，输入关键字，随后点击搜索</h2>:
            isLoading?<h2>正在加载中...</h2>:
            err?<h2>{err}</h2>:

            users.map((user) => {
                return (
                     <div key={user.id} className="card">
                        <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">{user.login}</p>
                    </div>

                )

            }
                
            )
        }

          
          
        </div>
    )
  }
}
