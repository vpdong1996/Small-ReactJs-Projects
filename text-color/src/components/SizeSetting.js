import React,{Component} from 'react';

class SizeSetting extends Component{
    constructor(props){
        super(props);
        this.setDecre = this.setDecre.bind(this);
        this.setIncre = this.setIncre.bind(this);
    }
    setDecre(){
        this.props.setDecre();
    }
    setIncre(){
        this.props.setIncre();
    }
    render(){
        return(
            <div className="card">
            <div className="card-header Size">
            Size : {this.props.fontSize}px
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              <button className="btn btn-success" onClick={this.setDecre}>Giảm</button>
              <button className="btn btn-success" onClick={this.setIncre}>Tăng</button>
              </li>
            </ul>
          </div>
        )
    }
}
export default SizeSetting;