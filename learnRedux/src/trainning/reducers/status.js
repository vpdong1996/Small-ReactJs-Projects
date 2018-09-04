const innitialState = false;

const myReducer = (state = innitialState,action) =>{
    if(action.type === 'TOGGLE_STATUS'){
        state = ! state;
        return state;
    }
    return state
}
export default myReducer;