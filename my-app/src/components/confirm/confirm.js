import React from 'react';
import './style.css';
export default class Confirm extends React.Component {
    constructor(){
        super();
        this.state = {
            msg: '',
            btns: [],
        }
        this.div = null;
    }
    setData(msg, btns, div) {
        this.div = div;
        this.setState({msg: msg, btns})
    }
    clickBtns(index) {
        document.body.removeChild(this.div);
        if(this.state.btns[index].onPress) {
            this.state.btns[index].onPress();
        }
    }
    render() {
        return(
            <div className="my-confirm-mask">
                <div className="confirm">
                    <div className="message">{this.state.msg}</div>
                    <div className="handle">
                        {
                            (this.state.btns && this.state.btns.length > 0) && this.state.btns.map((item, index) => {
                                return (
                                    <div className="button" key={index} onClick={this.clickBtns.bind(this, index)}>{item.text}</div>
                                )
                            })   
                        }
                    </div>
                </div>
            </div>
        )
    }
}