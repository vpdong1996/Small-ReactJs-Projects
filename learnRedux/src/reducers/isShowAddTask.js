import * as types from './../constants/ActionTypes';

const initialState = false;
const myReducer = (state = initialState , action) =>{
    switch(action.type){
        case types.TOGGLE_TASK:
            return !state
        case types.ADD_TASK:
            return true
        case types.CLOSE_TASK:
            return false    
        default: return state;    
    }
}
export default myReducer;