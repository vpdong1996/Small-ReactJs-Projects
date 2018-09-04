import React,{Component} from 'react';

class SettingContent extends Component{
    setColorText(){
        return{
            color : this.props.colorText,
            fontSize: this.props.fontSize,
            borderColor: this.props.colorText
        }          
    }
    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : #ccc - Fontsize : {this.props.fontSize}px</p>
                <div className="content" >
                    <p style={this.setColorText()} className="content-setting" >Nội dung setting</p>
                </div> 
            </div>
        )
    }
}
export default SettingContent;