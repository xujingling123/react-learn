import React, { Component } from 'react'
const DetailData=[
        {id:1,content:"这是消息1"},
        {id:2,content:"这是消息2"},
        {id:3,content:"这是消息3"},
    ]

export default class index extends Component {
    

  render() {
    const {id,title}=this.props.match.params
    const detail=DetailData.find((detailObj)=>{
        return detailObj.id===Number(id)
    })
    return (
      <div>
        <ul>
            <li>详情</li>
            <li>{id}</li>
            <li>{title}</li>
            <li>{detail.content}</li>
        </ul>
      </div>
    )
  }
}
