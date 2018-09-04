import * as Types from '../constants/ActionTypes';

const innititalState = [];

const edititem = (state = innititalState,action)=>{
    switch(action.type){
        case Types.UPDATE_PRODUCT:
            return action.product;
        default : return [...state]
    }
}
export default edititem;