import * as Types from '../constans/ActionTypes';

const data = JSON.parse(localStorage.getItem('CART'));
const initialState = data ? data : [];
const cart = (state = initialState, action) => {
    const {product,quantity} = action;
    let  indexProduct = -1;
    switch (action.type) {  
        case Types.ADD_TO_CART:
            indexProduct = findIndexProduct(state,product);
            if(indexProduct !== -1){ 
            state[indexProduct].quantity += quantity;
            }else{
             state.push({
                product,
                quantity
            });
        }
            localStorage.setItem('CART',JSON.stringify(state));
             return [...state];
        case Types.DELETE_PRODUCT:
            console.log(product);
            indexProduct = findIndexProduct(state,product);
            if(indexProduct !== -1){
                state.splice(indexProduct,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        case Types.UPDATE_PRODCT:
            console.log(product);
            indexProduct = findIndexProduct(state,product);
            if(indexProduct !== -1){
                state[indexProduct].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        default: return [...state];
    }
}
const findIndexProduct = (cart,product) =>{
    let indexProduct = -1;
    if(cart.length > 0){
        for(let i = 0;i< cart.length;i++){
            if(cart[i].product.id === product.id){
                 return indexProduct = i;
            }
        }
    }
    return indexProduct;
}   
export default cart;