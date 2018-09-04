
import React, { Component } from 'react';
import renderElapsedString from '../helpers/helpers';
import TimeActionButton from './TimeActionButton';

class Timer extends Component {

    componentDidMount(){
            this.forceUpdateInterval = setInterval(()=> this.forceUpdate(), 50);
    }
    componentWillMount(){
        clearInterval(this.forceUpdateInterval);
    }
    onEditForm = () =>{
        this.props.onEditForm();
    }
    onDeleteTimer = () =>{
        this.props.onDeleteTimer(this.props.id);
    }
    handleStartClick = () =>{
        this.props.onStartClick(this.props.id);
        console.log(this.props.id)
    }
    handleStopClick = () =>{
        this.props.onStopClick(this.props.id);
    }
    render() {
        const elapsedString = renderElapsedString(this.props.elapsed,this.props.runningSince);
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon' onClick={this.onEditForm}>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon' onClick={this.onDeleteTimer}>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <TimeActionButton 
                    timeIsRunning={!!this.props.runningSince}
                    handleStartClick={this.handleStartClick}
                    handleStopClick={this.handleStopClick}
                />
            </div>
        );
    }
}

export default Timer;
