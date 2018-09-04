import React, { Component } from 'react';
import Products from '../components/Products';
import {connect} from 'react-redux';
import ProductItem from '../components/ProductItem';
import {actAddToCart,actChangeMessage} from '../actions/index';


class ProductContainers extends Component {
    render() {
        const {products} = this.props;
        return (
            <Products>
            {this.showProduct(products)}
            </Products>
        )    
    };
    showProduct(products){
        const {onAddToCart,onChangeMessage} = this.props;
        let result = null;
        if(products.length !== 0){ 
            result =  products.map((product, index) =>{
                return <ProductItem key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
            })
        }
        return result;
    }
}

const mapStatetoProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        onAddToCart : (product) =>{
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage: (message) =>{
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductContainers);
