import React from 'react';
class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    doLogin() {
        if(this.state.username.match(/^\s*$/)) {
            alert("请输入用户名");
            return;
        }
        if(this.state.password.match(/^\s*$/)) {
            alert("请输入密码");
            return;
        }
        localStorage['username'] = this.state.username;
        localStorage['isLogin'] = true;
        this.props.history.go(-1);
    }
    componentDidMount() {
        if(this.props.location.state){
            console.log('从'+this.props.location.state.from.pathname + '页面跳转');
        }
    }
    render(){
        return(
            <div>
                用户名：<input type="text" placeholder="请输入用户名" onChange={(e) => {this.setState({username: e.target.value})}} /><br />
                密码：<input type="password" placeholder="请输入密码" onChange={(e) => {this.setState({password: e.target.value})}} /><br />
                <button type="button" onClick={this.doLogin.bind(this)}>登录</button>
            </div>
        )
    }
}
export default Login;