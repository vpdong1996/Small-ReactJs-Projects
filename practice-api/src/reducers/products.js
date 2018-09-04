import * as Types from '../constants/ActionTypes';

const innititalState = [];

const findIndex = (products,id) =>{
    let result = -1;
    products.forEach((product,index)=>{
        if(product.id === id){
            result = index;
        }
    })
    return result;
}

const products = (state = innititalState,action) =>{
    let index = -1;
    switch(action.type){
        case Types.FETCH_DATA :
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state,action.id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.concat(action.product);
            return [...state];    
        case Types.EDIT_PRODUCT:    
            index = findIndex(state,action.product.id);
            state[index] = action.product;
            return [...state];
        default : return [...state]
    }
}
export default products;