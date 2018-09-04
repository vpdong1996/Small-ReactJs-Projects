import React , {Component} from 'react';

class Sex extends Component {
    render(){
        return(
            <div className="form-group">
                    <label >Select your sex :</label>
                    <select className="form-control" id="selectGender" name="gender" value={this.props.gender} onChange={this.handleChange} >
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </select>
                  </div>
        )
    }
}
export default Sex;