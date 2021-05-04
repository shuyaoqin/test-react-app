import React,{lazy,Suspense} from 'react';
import {withRouter} from 'react-router-dom';

function GoodsNav (props) {
    const goPage = (url) => {
        props.history.replace(url);
    }
    return(
        <div>
            <ul>
                <li onClick={goPage.bind(null, '/goods/item')}>商品</li>
                <li onClick={goPage.bind(null, '/goods/details')}>详情</li>
                <li onClick={goPage.bind(null, '/goods/review')}>评价</li>
            </ul>
        </div>
    )
}
export default withRouter(GoodsNav);