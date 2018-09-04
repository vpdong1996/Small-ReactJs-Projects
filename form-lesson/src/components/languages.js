import React , {Component} from 'react';

class Lang extends Component {
    render(){
        return(
            <div>
                <label>Select your language :</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="language" value="en" onChange={this.handleChange}  defaultChecked/>
                      English
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="language" value="vi"  onChange={this.handleChange} checked={this.props.language === "vi"}/>
                      Vietnameses
                    </label>
                  </div>
            </div>
        )
    }
}
export default Lang;