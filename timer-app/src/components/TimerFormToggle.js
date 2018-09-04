
import React, { Component } from 'react';
import TimerForm from './TimerForm'

class TimerFormToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        }
    }
    OnChangeToggle = () =>{
        this.setState({
            isOpen : true
        })
    }
    onFormClose = () =>{
        this.setState({
            isOpen : false
        })
    }
    onSubmitForm = (timer) =>{
        this.props.onSubmitForm(timer);
        this.setState({
            isOpen : false
        })
    }
  render() {
    if (this.state.isOpen) {
        return (
            <TimerForm onFormClose={this.onFormClose} onSubmitForm={this.onSubmitForm}/>
        );
        }else{
            return (
                <div className='ui basic content center aligned segment'>
                    <button onClick={this.OnChangeToggle} className='ui basic button icon'>
                        <i className='plus icon' />
                    </button>
                </div>
            );
        }
    
  }
}

export default TimerFormToggle;
