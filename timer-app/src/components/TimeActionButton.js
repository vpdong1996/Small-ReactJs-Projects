import React, { Component } from 'react';

class TimeActionButton extends Component {
    render() {
        if (this.props.timeIsRunning) {
            return (
                <div
                    className='ui bottom attached red basic button'
                    onClick={this.props.handleStopClick}
                >
                    Stop
            </div>
            );
        } else {
            return (
                <div
                    className='ui bottom attached green basic button'
                    onClick={this.props.handleStartClick}
                >
                    Start
                </div>
            )
        }
    }
}
export default TimeActionButton;