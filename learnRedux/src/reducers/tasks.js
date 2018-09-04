import * as types from './../constants/ActionTypes';
import randomstring from 'randomstring';


const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];
const randomId = () =>{
    return randomstring.generate(7);
  }

const myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            
            const addNewTask = {
                id : randomId(),
                name: action.task.name,
                status : action.task.status
            }
            state.push(addNewTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            console.log(action)
            return [...state];    
        default: return state;
    }

    
};

export default myReducer;