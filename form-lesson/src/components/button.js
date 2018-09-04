import React , {Component} from 'react';

class Button extends Component {
    render(){
        return(
            <div>
                <button type="submit" className="btn btn-primary" onClick={this.submitButton}>Save</button>&nbsp;
                  <button type="reset" className="btn btn-outline-danger">Reset</button>
            </div>
        )
    }
}
export default Button;