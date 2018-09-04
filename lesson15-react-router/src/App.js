import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            {this.showRoute(routes)}
          </Switch>        
        </div>
      </BrowserRouter>
    );
  }
  showRoute = (routes) =>{
    let result = null;
    if(routes.length > 0){
      result = routes.map((route,index)=>{
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
        )
      })
    }
    return result;
  }
}

export default App;
