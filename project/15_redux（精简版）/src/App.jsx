//创建“外壳”组件App
import React,{Component} from "react";
import Count from "./components/Count";
class App extends Component {

  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}
//暴露app组件
export default App;