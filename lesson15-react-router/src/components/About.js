import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChange : false
    }
  }
  onClick = (isChange) =>{
    this.setState({
      isChange
    })
    
  }
  
  render() {
    const {location} = this.props;
    console.log(location);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <button type="button" onClick={()=> this.onClick(true)}  className="btn btn-primary">Cho Phép</button><br/>
            <button type="button" onClick={()=> this.onClick(false)}  className="btn btn-danger">Không Phép</button>
              <img style={{margin:'20px auto'}} src="https://source.unsplash.com/user/erondu/1600x900" className="img-fluid" alt=""></img>
              <Prompt when={this.state.isChange} message={location =>{
                return `Are you sure want to go to ${location.pathname}`
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
