import React from 'react';
import {Link} from 'react-router-dom';
class Index extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/news">新闻首页</Link></li>
                </ul>
            </div>
        )
    }
}
export default Index;