import React , {Component} from 'react';

class Status extends Component {
    render(){
        return(
            <div>
                <label>Set your status :</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" name="cBox" onChange={this.handleChange}  checked={this.props.cBox === true}/>
                      Active
                    </label>
                  </div>
            </div>
        )
    }
}
export default Status;