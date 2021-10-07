import React , {Component} from 'react'; 
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Main from './Components/Main';
import TotalFeed from './Components/TotalFeed';
import PersonalFeed from './Components/PersonalFeed';
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div className="App">
      <BrowserRouter>
        <div className='Menu-wrapper'>
          <ul id="router-list">
            
          </ul>
        </div>
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/totalFeed' component={TotalFeed}/>
            <Route exact path='/personalFeed' component={PersonalFeed} />
          </Switch>
        </div>
      </BrowserRouter>  
    </div>
    )
  }
}

export default App;