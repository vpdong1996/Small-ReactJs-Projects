import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import ResetButton from './components/ResetButton';
import SizeSetting from './components/SizeSetting';
import SettingContent from './components/SettingContent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color : 'green',
      fontSize : 12
    }
    this.setColor = this.setColor.bind(this)
    this.setDecre = this.setDecre.bind(this);
    this.setIncre = this.setIncre.bind(this);
    this.resetDefault = this.resetDefault.bind(this);
  }
  setColor(arg){
    this.setState({
      color: arg
    })
  }
  setDecre(){
    if(this.state.fontSize > 8){
      this.setState({
        fontSize : this.state.fontSize -2
      })
    }
    // this.state.fontSize ? (this.state.fontSize >8 ? this.state.fontSize -2 : this.state.fontSize  ) : this.props.fontSize
}
setIncre(){
  if(this.state.fontSize < 36){
    this.setState({
      fontSize : this.state.fontSize +2
    })
  }
  // this.state.fontSize ? (this.state.fontSize >8 ? this.state.fontSize -2 : this.state.fontSize  ) : this.props.fontSize
}
resetDefault(){
  this.setState({
    color : 'green',
    fontSize : 12
  })
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker color={this.state.color} onRecieveColor={this.setColor}/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontSize={this.state.fontSize} setDecre={this.setDecre} setIncre={this.setIncre}/>
              <ResetButton resetToDefault={this.resetDefault}/>
            </div>
            <SettingContent colorText={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
