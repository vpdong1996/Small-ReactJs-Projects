const innitialState = {
    sortByName : 'name',
    sortByValue : 1
}

const myReducer = (state = innitialState,action) =>{
    if(action.type === 'SORT'){
        const { sortByName, sortByValue} = action;
        return {
            sortByName : sortByName,
            sortByValue : sortByValue
        }
    }
    return state
}
export default myReducer ;