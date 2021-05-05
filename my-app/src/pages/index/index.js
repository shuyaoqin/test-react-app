import React from 'react';
import {Link} from 'react-router-dom';
class Index extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/news">新闻首页</Link></li>
                    <li><Link to="/goods">商品页面</Link></li>
                    <li><Link to="/login">会员登录</Link></li>
                    <li><Link to="/user">会员中心</Link></li>
                </ul>
            </div>
        )
    }
}
export default Index;