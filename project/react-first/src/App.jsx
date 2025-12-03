//创建“外壳”组件App
import React,{Component} from "react";
import Search from "./components/Search"
import List from "./components/List"
import axios from "axios";
class App extends Component {
  state = {
        users:[],//保存用户搜索结果
        isFirst:true,//判断是否是第一次加载数据
        isLoading:false,//判断是否正在加载数据
        err:''//保存错误信息
    }
    saveUsers=(users) => {
      this.setState({
        users
      })
    }
    updateAppState=(stateObj)=>{
      this.setState(stateObj)
    }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />     
      </div>
    );
  }
}
//暴露app组件
export default App;