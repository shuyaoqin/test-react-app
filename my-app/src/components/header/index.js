import React, {Component} from  'react';
import PropTypes from 'prop-types';
import Css from './style.module.css';
class HeaderComponent extends Component {
    render() {
        return (
            <div id="header" className={Css['app'] + ' ' +  Css['active']} style={this.props.isShow?{display:'block'}:{display: 'none'}}>
                {this.props.title}
                <button type="button" onClick={this.props.sendParent && this.sendParent.bind(this, "我是子组件的值")}>给父组件传值</button>&nbsp;&nbsp;
                <button type="button" onClick={this.props.onClick}>保存</button>
            </div>
        )
    }
}
//检查属性值的类型
HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired, //检查是否必填项
    isShow: PropTypes.bool
};
//默认属性值
HeaderComponent.defaultProps = {
    title: '默认导航'
};
export default HeaderComponent;