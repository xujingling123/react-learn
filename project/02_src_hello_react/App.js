//创建“外壳”组件App
import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello React</h2>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
//暴露app组件
export default App;