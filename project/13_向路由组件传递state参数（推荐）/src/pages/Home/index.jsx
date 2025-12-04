import React, { Component } from 'react'
import MyNavLink from "../../components/MyNavLink"
import { Route,Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class index extends Component {
  componentDidMount() {
    console.log('Home组件挂载完毕',this.props)
  }
  render() {
    return (
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavLink className="list-group-item" to="/home/news">News</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink className="list-group-item" to="/home/message">Message</MyNavLink>
                  </li>
                </ul>
                <Route path="/home/news" component={News} />
                <Route path="/home/message" component={Message} />
                <Redirect to="/home/news" />
                
              </div>
            </div>
    )
  }
}
