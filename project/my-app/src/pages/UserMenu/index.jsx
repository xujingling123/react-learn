import React, { Component } from 'react'
import { Card } from 'antd';
import './index.css'
export default class userMenu extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>
          智慧农场后台管理平台
        </div>
        <div className='menu'>
          <div className='menu-item'>
            <Card title="项目管理" variant="borderless" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className='menu-item'>
            <Card title="人员管理" variant="borderless" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className='menu-item'>
            <Card title="设备管理" variant="borderless" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className='menu-item'>
            <Card title="API管理" variant="borderless" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>


        
      </div>
    )
  }
}
