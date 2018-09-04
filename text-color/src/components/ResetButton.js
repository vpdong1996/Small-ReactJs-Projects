import React,{Component} from 'react';

class ResetButton extends Component{
    constructor(props){
        super(props);
        this.resetButton = this.resetButton.bind(this)
    }
    resetButton(){
        this.props.resetToDefault();
    }
    render(){
        return(
            <div>   
            <button className="btn-sm btn-danger btn-reset" onClick={this.resetButton}>Reset</button>
            
            </div>
        )
    }
}
export default ResetButton;