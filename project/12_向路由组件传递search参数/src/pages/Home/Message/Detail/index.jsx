import React, { Component } from 'react'
import qs from 'qs'
const DetailData=[
        {id:'1',content:"这是消息1"},
        {id:'2',content:"这是消息2"},
        {id:'3',content:"这是消息3"},
    ]

export default class index extends Component {
    

  render() {
    const {search}=this.props.location
    const {id,title}=qs.parse(search.substring(1))
    const detail=DetailData.find((detailObj)=>{
        return detailObj.id===id
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
