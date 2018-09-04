import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

class ProductItem extends Component {

  onDelete = (id) => {
    //eslint-disable-next-line
    if(confirm('You gonna delete this item. Are you sure?')){
      return this.props.onDelete(id)
    }
    
  }  
  render() {
    const {product,index} = this.props;
    const productStatus = product.status ? "Còn Hàng" : "Hết Hàng";
    const statusClass = product.status ? "success" : "secondary";

     
    
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span className={`badge badge-${statusClass}`}>{productStatus}</span></td>
        <td>
          <Link to={`products/${product.id}/add`} style={{marginRight:'5px'}}  className="btn btn-primary" href="" >Sửa</Link>
          <button  className="btn btn-danger" href="" type="button" onClick={() => this.onDelete(product.id)}>Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
