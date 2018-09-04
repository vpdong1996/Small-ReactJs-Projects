
import React, { Component } from 'react';
import * as Message from '../constans/Message'
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : 1
        }
    }
    render() {
        
        const { item } = this.props;
        const {quantity} = item.quantity > 0 ? item : this.state
        return (
            <tr>
            <th scope="row">
            <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
            <span className="qty">{quantity}</span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label onClick={() => this.onUpdateProduct(item.product,quantity - 1)} className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light">
                <a>—</a>
                </label>
                <label onClick={() => this.onUpdateProduct(item.product,quantity + 1)} className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light">
                <a>+</a>
                </label>
            </div>
            </td>
            <td>{this.subTotal(item.quantity,item.product.price)}$</td>
            <td>
            <button onClick={() => this.onDelete(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="true" data-original-title="Remove item">
                X
            </button>
            </td>
        </tr>
        )}
        
        onUpdateProduct = (product,quantity) =>{  
            const {onChangeMessage} = this.props 
            if(quantity > 0){
                console.log('Hi');
                this.setState({
                    quantity : quantity
                });
                this.props.onUpdateProduct(product,quantity);
                onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);

            }
        }
        subTotal = (quantity,price) =>{
            return quantity * price;
        }
        onDelete = (product) =>{
            const {onDeleteProduct,onChangeMessage} = this.props;
            onDeleteProduct(product);
            onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);

        }
    }
export default CartItem