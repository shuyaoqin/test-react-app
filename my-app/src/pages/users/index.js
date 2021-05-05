import React from 'react';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    loginOut() {
        localStorage.clear();
        this.props.history.replace('/login');
    }
    render(){
        return(
            <div>
                欢迎回来{localStorage['username']} ！<br />
                <button type="button" onClick={this.loginOut.bind(this)}>安全退出</button>
            </div>
        )
    }
}
export default Index;