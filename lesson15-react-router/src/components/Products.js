import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Product from './Product'

class Products extends Component {  
  render() {
    const products = [
        {
            id : 1,
            slug:'Iphone-X',
            name : 'Iphone X Cực Mạnh',
            price : 5000
        },
        {
            id : 2,
            slug:'Oppo-F1',
            name : 'Oppo F1 Cực Mạnh',
            price : 1000
        },
        {
            id : 3,
            slug:'Samsung-S8',
            name : 'Samsung S8 Cực Mạnh',
            price : 3500
        }
    ];
    const {match} = this.props;
    const url = match.match.url;
    const result = products.map((product, index) =>{
        return(
            <Link key={index} to={`${url}/${product.slug} `}>
                <li className="list-group-item" >
              {product.id} - Sản Phẩm :  {product.name} - Price : {product.price}  
            </li>
            </Link>
            
        )
    })

    return (
      <div className="container">
        <h1>List of Products</h1>
         <div className="list-group">
             {result}
         </div>
         <div className="text-center">
            <Route path="/products/:slug" component={Product}/>
         </div>
      </div>
    );
  }
}

export default Products;
