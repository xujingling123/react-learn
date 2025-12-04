//创建“外壳”组件App
import React,{Component} from "react";
import {NavLink,Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";//路由组件
import Header from "./components/Header"//一般组件
import MyNavLink from "./components/MyNavLink"
class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><Header/></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">             
                  <MyNavLink to="/about" >About</MyNavLink>
                  <MyNavLink to="/home" >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//暴露app组件
export default App;