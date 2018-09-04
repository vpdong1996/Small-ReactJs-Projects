import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import {Route,Switch,BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Menu />
          <div className="container text-center">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {this.showRoutes(routes)}
              </div>
            </div>
          </div>
      </div></BrowserRouter>
    );
  }
  showRoutes = (routes) =>{
    var result = null;
    if(routes.length > 0){
      result = routes.map((route,index)=>{
        return (
        <Route key={index} exact={route.exact} path={route.path} component={route.main} />
      )
      })
    }
    return <Switch>{result}</Switch>;

  }
}

export default App;
