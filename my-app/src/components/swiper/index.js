import React from 'react';
import Hoc from './hoc';
import './style.css';
export default Hoc((props) => {
    let aData = props.data;
    return(
        <div className="my-swiper-main" onMouseOver={props.stop} onMouseOut={props.autoPlay}>
            {
                (aData && aData.length>0) && aData.map((item,index) => {
                    return (
                        <div className={item.active ? "slide show" : "slide"} key={index}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.src} alt="" /></a>
                        </div>
                    )
                })
            }
            <div className="pagination">
                {
                    (aData && aData.length>0)&&aData.map((item,index) => {
                        return <div className={item.active ? "dot active" : "dot"} key={index} onClick={() => {props.changeImg(index)}}></div>
                    })
                }
            </div>
        </div>
    )
})