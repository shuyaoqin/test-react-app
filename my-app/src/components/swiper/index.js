import React from 'react';
import propTypes from 'prop-types';
import './style.css';
export default class Swiper extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.aData = [];
        this.init = true;
        this.index = 0;
    }
    componentDidMount() {
        this.autoPlay();
    }

    // 自动播放
    autoPlay() {
        this.timer = setInterval(() => {
            if(this.aData && this.aData.length>0) {
                this.init = false;
                for(let i=0;i<this.aData.length;i++) {
                    if(this.aData[i].active) {
                        this.aData[i].active = false;
                        break;
                    }
                }
                if(this.index >= this.aData.length - 1) {
                    this.index = 0;
                } else {
                    this.index++;
                }
                this.aData[this.index].active = true;
                this.setState({});
            }
        }, 3000);
    }

    componentWillUnmount() {
        // 页面离开的时候清除定时器，解决性能问题
        clearInterval(this.timer);
    }

    // 点击切换图片
    changeImg(index) {
        this.init = false;
        this.index = index;
        // console.log(this.index)
        if(this.aData && this.aData.length > 0) {
            for(let i=0; i< this.aData.length;i++) {
                this.aData[i].active = false;
            }
        }
        this.aData[index].active = true;
        this.setState({});
    }

    // 停止自动播放
    stop() {
        clearInterval(this.timer);
    }

    render() {
        this.aData = this.props.data;
        if(this.aData && this.aData.length > 0 && this.init) {
            for(let i=0;i<this.aData.length;i++) {
                if(i===0) {
                    this.aData[i].active = true;
                } else {
                    this.aData[i].active = false;
                }
            }
        }
        return(
            <div className="my-swiper-main" onMouseMove={this.stop.bind(this)} onMouseOut={this.autoPlay.bind(this)}>
                {
                   (this.aData && this.aData.length>0) && this.aData.map((item,index) => {
                        return (
                            <div className={item.active ? "slide show" : "slide"} key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.src} alt="" /></a>
                            </div>
                        )
                    })
                }
                <div className="pagination">
                    {
                        (this.aData && this.aData.length>0)&&this.aData.map((item,index) => {
                            return <div className={item.active ? "dot active" : "dot"} key={index} onClick={this.changeImg.bind(this, index)}></div>
                        })
                    }
                </div>
            </div>
        )
    }
}
Swiper.propTypes = {
    data: propTypes.array.isRequired
}
