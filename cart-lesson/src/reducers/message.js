import * as Types from '../constans/ActionTypes';
import * as Message from '../constans/Message';

// const data = JSON.parse(localStorage.getItem('CART'));
const initialState = Message.MSG_WELCOME;



const message = (state = initialState, action) => {
    switch (action.type) {  
        case Types.CHANGE_MESSAGE:
            return action.message
        default: return state;
        
    }
}

export default message;