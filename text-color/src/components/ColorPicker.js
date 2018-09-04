import React,{Component} from 'react';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state ={
            colors : ['red','green','pink','lightblue']
        }
    }
    setActiveColor(color){
        this.props.onRecieveColor(color);
        
    }
    render(){
        
        const colors = this.state.colors.map((color,index) => {return(
            <span key={index} style={{backgroundColor:color}} className={this.props.color === color ? 'active': ''} onClick={()=> this.setActiveColor(color)}></span>
        )});
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header colorPicker">
                Color Picker
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{colors}
                  <hr /> 
                  </li>

                </ul>
              </div>
            </div>
        )
    }
}
export default ColorPicker;