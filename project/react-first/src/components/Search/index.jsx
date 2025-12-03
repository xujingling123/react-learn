import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
    
    search = () => {
      //获取用户的输入（连续解构赋值+重命名）
      const {keyWordElement:{value:keyWord}} = this
      console.log(keyWord)
      //发送请求前通知App更新状态
      this.props.updateAppState({
        isFirst:false,
        isLoading:true
      })
      //发送网络请求
      axios.get(`/search/users?q=${keyWord}`).then(
      response=>{
        console.log(response.data.items)
        this.props.updateAppState({
            users:response.data.items,
            isLoading:false
        })
      },
      error=>{
        console.log(error)
        this.props.updateAppState({
            isLoading:false,
            err:error
        })
      }
      )
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
