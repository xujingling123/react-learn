//创建“外壳”组件App
import React,{Component} from "react";
import Count from "./containers/Count"
import store from "./redux/store"
class App extends Component {

  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    );
  }
}
//暴露app组件
export default App;