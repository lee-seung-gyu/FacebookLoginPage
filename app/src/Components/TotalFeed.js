import React, {Component} from 'react';
import '../css/TotalFeed.css'

class TotalFeed extends Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }

    moveProfile=()=>{
        alert('개인프로필 이동')
        this.props.history.push('/personalFeed')
    }
    render(){
        return(
            <div id="total-feed">토탈
                <button onClick={this.moveProfile}>프로필</button>
            </div>
        )
    }

}

export default TotalFeed;