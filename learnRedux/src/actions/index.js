import * as types from './../constants/ActionTypes';


export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}
export const addTask = (task) =>{
    return {
        type : types.ADD_TASK,
        task : task
    }
}
export const toggleTask = () =>{
    return {
        type : types.TOGGLE_TASK,
        
    }
}
export const closeTask = () =>{
    return {
        type : types.CLOSE_TASK,
        
    }
}
export const openTask = () =>{
    return {
        type : types.OPEN_TASK,
        
    }
}