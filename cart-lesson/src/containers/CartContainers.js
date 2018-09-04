import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Message from '../constans/Message';
import {actDeleteProduct,actChangeMessage,actUpdateProduct} from '../actions/index';


class CartContainers extends Component {
    render() {
        const { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        )
    };
    showCartItem = (cart) => {
        const {onDeleteProduct,onChangeMessage,onUpdateProduct} = this.props;
        let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map((item,index) => {
                return (
                    <CartItem key={index} item={item} index={index} onDeleteProduct={onDeleteProduct}  onChangeMessage={onChangeMessage} onUpdateProduct={onUpdateProduct}/>  
                )
            })
        }
        return result;
    }
    showCartResult = (cart) =>{
        let result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart}/>
        }
        return result
    }
}

const mapStatetoProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchtoProps = (dispatch,props) =>{
    return {
        onDeleteProduct : (product) =>{
            dispatch(actDeleteProduct(product));
        },
        onChangeMessage: (message) =>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProduct : (product,quantity) => {
            dispatch(actUpdateProduct(product,quantity));
        }  
     }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CartContainers);
