import React from 'react';
// import ProxyHoc from './components/hoc/proxy';
import ExtendHoc from './components/hoc/extend';
import './assets/css/app.css';

// 无状态组件
function NoStatusComponent(props) {
  return (
    <div>
      {props.title}
      <button type="button" onClick={props.sendParent.bind(this, "我是无状态组件传过来的值")}>给父组件传值</button>
    </div>
  )
}
// 有状态组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 30
    };
  }
  getNostatus(val) {
    console.log(val);
  }
  render() {
    return (
      <div>
        <NoStatusComponent title="我是无状态组件" sendParent={this.getNostatus.bind(this)}></NoStatusComponent><br />
        {this.props.title}{this.props.name}
      </div>
    )
  }
}

// export default ProxyHoc(App, '我是属性代理高级组件参数');
export default ExtendHoc(App, '我是反向继承高级组件参数');
