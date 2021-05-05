import React from 'react';
import {localParam} from '../../assets/js/utils';
class NewsDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        // console.log("id:"+this.props.match.params.id + ', title:' + this.props.match.params.title);
        console.log(localParam(this.props.location.search).search);
    }
    render(){
        return(
            <div>
            <button type="button" onClick={this.props.history.go.bind(this, -1)}>返回</button>
                ID: {localParam(this.props.location.search).search.id},标题:{decodeURIComponent(localParam(this.props.location.search).search.title)}
            </div>
        )
    }
}
export default NewsDetails;