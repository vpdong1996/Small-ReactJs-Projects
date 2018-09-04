

import React, { Component } from 'react';
import randomstring from 'randomstring';

class TimerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title: this.props.title || '',
            project : this.props.project || ''
        }
    }
    onHandleChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        })
    }
    onFormClose = () =>{
        this.props.id ? this.props.onFormCancel()  : this.props.onFormClose();
        
    }
    onSubmitForm = () =>{
        this.props.onSubmitForm({
            id : this.props.id  ? this.props.id : randomstring.generate(9),
            title : this.state.title,
            project : this.state.project
        })
    }
    
    render() {
        return (    
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' onChange={this.onHandleChange}  name="title" value={this.state.title} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text'  onChange={this.onHandleChange} name="project" value={this.state.project} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button' onClick={this.onSubmitForm}>
                                {this.state.title ? 'Update' : 'Create'}
                            </button>
                            <button className='ui basic red button' onClick={this.onFormClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimerForm;