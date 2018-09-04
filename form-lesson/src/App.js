import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import Sex from './components/sex';
import Desc from './components/desc'
import Lang from './components/languages';
import Status from './components/status';
import Button from './components/button';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password : '',
      gender : 0,
      description: '',
      language: '',
      cBox: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);

  }
  handleChange(event){
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value ;
    this.setState({
      [name] : value
    })
  }
  submitButton(event){
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="card">
              <div className="card-header">
                User information
              </div>
              <form>
                <div className="card-body">
                  <User />
                  <Sex gender={this.state.gender}/>
                  <Desc />
                  <Lang language={this.state.language}/>
                  <br />
                  <Status cBox={this.state.cBox}/>
                  <Button />
                  
                </div>
              </form>
            </div>
          </div>
        </div>
</div>


    );
  }
}

export default App;
