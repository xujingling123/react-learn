import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class index extends Component {
    
    search = async() => {
      //获取用户的输入（连续解构赋值+重命名）
      const {keyWordElement:{value:keyWord}} = this
      console.log(keyWord)
      //发送请求前通知List更新状态
      PubSub.publish('getList',{isFirst:false,isLoading:true})
      
      //发送网络请求
    //   axios.get(`/search/users?q=${keyWord}`).then(
    //   response=>{
    //     console.log(response.data.items)
    //     PubSub.publish('getList',{isLoading:false,users:response.data.items})
        
    //   },
    //   error=>{
    //     console.log(error)
    //     PubSub.publish('getList',{isLoading:false,err:error.message})
        
    //   }
    //   )

    // //使用fetch发送请求
    // fetch(`/search/users?q=${keyWord}`).then(
    //   response=>response.json()
    // ).then(
    //   data=>{
    //     console.log(data.items)
    //     PubSub.publish('getList',{isLoading:false,users:data.items})
    //   }
    // ).catch(
    //   error=>{
    //     console.log(error)
    //     PubSub.publish('getList',{isLoading:false,err:error.message})
    //   }
    // )

    //使用fetch发送请求(优化)
    try{
      const res=await fetch(`/search/users?q=${keyWord}`)
      const data=await res.json()
      PubSub.publish('getList',{isLoading:false,users:data.items})
    }catch(error){
      console.log(error)
      PubSub.publish('getList',{isLoading:false,err:error.message})
    }
    }
  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          <div>
            <input ref={c => this.keyWordElement=c} type="text" placeholder="输入关键词搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
      </section>
    )
  }
}
