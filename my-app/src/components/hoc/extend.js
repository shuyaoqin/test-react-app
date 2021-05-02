// 反向继承
import React from 'react';
export default function Hoc(WithComponent, title) {
    return class HocComponent extends WithComponent {
        render() {
            return (
                <React.Fragment>
                    <div>{title},年龄:{this.state.age}</div>
                    <WithComponent title="我是反向继承高阶组件" name="李四"></WithComponent>
                </React.Fragment>
            )
        }
    }
}