import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

class MessageContainers extends Component {
    render() {    
        const {message} = this.props;
        return (
            <Message message={message}/>
        )    
    };
    
}
MessageContainers.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStatetoProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStatetoProps,null)(MessageContainers);
