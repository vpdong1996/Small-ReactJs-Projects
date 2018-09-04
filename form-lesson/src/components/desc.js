import React , {Component} from 'react';

class Desc extends Component {
    render(){
        return(
            <div className="form-group">
                    <label >Your Description</label>
                    <textarea className="form-control" name="description" onChange={this.handleChange}  rows="3"></textarea>
                  </div>
        )
    }
}
export default Desc;