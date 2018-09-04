import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'; 

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUserName : '',
      txtPassWord : ''
    }
  }
  onChange = (e) =>{
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }
  onClick = (e) =>{
    e.preventDefault();
    const {txtUserName,txtPassWord} = this.state;
    if(txtUserName === 'admin' && txtPassWord ==='admin'){
      localStorage.setItem('USER',JSON.stringify({
        txtUserName,
        txtPassWord
      }))
    }
  }
  render() {
    const userLogin = localStorage.getItem('USER');
    
    if(userLogin !== null){
      const {location} = this.props;
      return <Redirect to={{
        pathname:'/about',
        state : {
          from : location
        }      
      }}/>
    }
    return (
        <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Login Form</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                {/* form card login */}
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Login</h3>
                  </div>
                  <div className="card-body">
                    <form className="form"  autoComplete="off" id="formLogin" noValidate >
                      <div className="form-group">
                        <label htmlFor="uname1">Username</label>
                        <input onChange={this.onChange}
                         type="text" className="form-control form-control-lg rounded-0" name="txtUserName" id="uname1" required />
                        <div className="invalid-feedback">Oops, you missed this one.</div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.onChange}
                         type="password" className="form-control form-control-lg rounded-0" name="txtPassWord" id="pwd1" required autoComplete="new-password" />
                        <div className="invalid-feedback">Enter your password too!</div>
                      </div>
                      <div>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator" />
                          <span className="custom-control-description small text-dark">Remember me on this computer</span>
                        </label>
                      </div>
                      <button onClick={this.onClick} type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                    </form>
                  </div>
                  {/*/card-block*/}
                </div>
                {/* /form card login */}
              </div>
            </div>
            {/*/row*/}
          </div>
          {/*/col*/}
        </div>
        {/*/row*/}
      </div>
      
    );
  }
}

export default Login;
