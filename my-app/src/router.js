/*router.js 页面里的代码
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
import React,{lazy,Suspense} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import asyncComponent from './components/async/asyncComponent';
import "./assets/css/common/animate.css";
const IndexPage=lazy(()=>import('./pages/index'));
const NewsPage=lazy(()=>import('./pages/news'));
const NewsDetailsPage=lazy(()=>import('./pages/news/details'));
class RouterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount(){

  }
  
  render() {
    return (
     <React.Fragment>
         <Router>
             <React.Fragment>
              <Suspense fallback={<React.Fragment />}>
                  <Route path="/" exact component={IndexPage}></Route>
                  <Route path="/news" exact component={NewsPage}></Route>
                  {/* <Route path="/news/details/:id/:title" component={NewsDetailsPage}></Route> */}
                  <Route path="/news/details" component={NewsDetailsPage}></Route>
                 </Suspense>
             </React.Fragment>
         </Router>
     </React.Fragment>
    )
  }
}

export default RouterComponent;