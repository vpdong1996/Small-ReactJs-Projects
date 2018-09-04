import * as Types from '../constans/ActionTypes';

export const actAddToCart = (product,quantity) =>{
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message) =>{
    return {
        type : Types.CHANGE_MESSAGE,
        message 
    }
}
export const actDeleteProduct = (product) =>{
    return{
        type : Types.DELETE_PRODUCT,
        product
    }
}
export const actUpdateProduct = (product,quantity) =>{
    return {
        type : Types.UPDATE_PRODCT,
        product,
        quantity
    }
}