import React,{lazy,Suspense} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import GoodsNav  from '../../components/goodsNav';
const GoodsItems=lazy(()=>import("./items"));
const GoodsDetails=lazy(()=>import("./details"));
const GoodsReview=lazy(()=>import("./review"));

class Goods extends React.Component {
    render(){
        return(
            <div>
                <button type="button" onClick={this.props.history.go.bind(this, -1)}>返回</button>
                <GoodsNav></GoodsNav>
                <div>
                    <Switch>
                        <Suspense fallback={<React.Fragment />}>
                            <Route path="/goods/item" component={GoodsItems}></Route>
                            <Route path="/goods/details" component={GoodsDetails}></Route>
                            <Route path="/goods/review" component={GoodsReview}></Route>
                            <Redirect to="/goods"></Redirect>
                        </Suspense>
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Goods;