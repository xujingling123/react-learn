import React, { Component } from 'react'

export default class index extends Component {
  componentDidMount() {
    console.log('Home组件挂载完毕',this.props)
  }
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
      </div>
    )
  }
}
