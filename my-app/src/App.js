import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Css from './assets/css/app.css';
import "./assets/css/common/animate.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show:false,
      name: '',
      users: [
        {name: '张三'},
        {name: '李四'},
        {name: '赵五'},
      ]
    };
  }
  componentDidMount(){

  }
  delUser(pIndex){
    // let temUsers = this.state.users;
    // temUsers.splice(index, 1);
    // this.setState({users: temUsers});
    this.setState((state) => ({users: state.users.filter((item, index)=>pIndex!=index)}))
  }
  addUser() {
    if(this.state.name.match(/^\s*$/)) {
      alert("请输入用户名");
      return;
    }
    let tempUsers = this.state.users;
    tempUsers.push({name: this.state.name});
    this.setState({users: tempUsers});
  }
  render() {
    return (
      <div className={Css['app']}>
        <CSSTransition in={this.state.show} timeout={2000} classNames="fade" onEntered={(el) =>{
            console.log("入场动画回调：", el);
          }} onExited={(el) => {
            console.log("出场动画回调：",el);
          }}>
          <div className={Css['box']}>
          </div>
        </CSSTransition>
          <button type="button" onClick={() => {this.setState({show: !this.state.show})}}>显示/隐藏动画效果</button>
          <ul style={{marginTop: '200px' }}>
            <TransitionGroup>
              {
                this.state.users.map((item,index) => {
                  return(
                    <CSSTransition timeout={2000} classNames="name">
                      <li key={index} className={Css['name']}>{item.name} <button type="button" onClick={this.delUser.bind(this, index)}>删除</button></li>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </ul>
          <input type="text" placeholder="请输入用户名"  onChange={(e) => {this.setState({name: e.target.value})}} />
          <button type="button" onClick={this.addUser.bind(this)}>添加用户名</button>
      </div>
    )
  }
}

export default App;