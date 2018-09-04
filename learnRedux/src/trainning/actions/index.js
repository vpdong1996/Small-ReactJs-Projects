import * as types from '../constants/ActionTypes'

export const toggleStatus  = () =>{
    return {type : types.TOGGLE_STATUS}
    
}
export const actionSort = (sortByName,sortByValue) =>{
    return {
        type : types.SORT,
        sortByName : sortByName,
        sortByValue : sortByValue
    }
}