import * as Types from '../constants/ActionTypes';
import callApi from '../apiCalling';

export const fetchData = (products) =>{
    return {
        type : Types.FETCH_DATA,
        products
    }
}
export const apiRequest = () =>{
    return (dispatch) =>{
        callApi('GET','products',null).then((res)=>{
            dispatch(fetchData(res.data));
        })
    }
}
export const deleteData = (id) =>{
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}
export const actDeleteRequest = (id) =>{
    return dispatch =>{
        callApi('DELETE',`products/${id}`,null).then(res =>{
            dispatch(deleteData(id));
        })
    }
}
export const actAddProduct = (product) =>{
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}
export const actAddProductRequest = (product)=>{
    return dispatch =>{
        return  callApi('POST','products',product).then(res =>{
            dispatch(actAddProduct(res.data));
        })
    }
}
export const actGetProduct = (product) =>{
    return {
        type : Types.UPDATE_PRODUCT,
        product 
    }
}
export const actGetProductRequest = (id) =>{
    return dispatch =>{
        return callApi('GET',`products/${id}`,null).then(res =>{
            dispatch(actGetProduct(res.data));
        })
    }
}
export const actEditProduct = (product) =>{
    return{
        type : Types.EDIT_PRODUCT,
        product
    }
}
export const actEditProductRequest = (product) =>{
    return dispatch =>{
        return callApi('PUT',`products/${product.id}`,product).then(res =>{
            dispatch(actEditProduct(res.data));
        })
    }
}