import React , {Component} from 'react';

class User extends Component {
    render(){
        return(
            <div>
                 <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Username :</label>
                    <input name="username" type="text" className="form-control" placeholder="Your Username..." onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password :</label>
                    <input name="password" type="password" className="form-control" placeholder="Your Password..." onChange={this.handleChange} />
                  </div>
            </div>
        )
    }
}
export default User;