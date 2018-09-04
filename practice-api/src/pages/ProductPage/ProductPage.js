import React, { Component } from 'react';
import ProductList from '../../components/Products/ProductList';
import ProductItem from '../../components/Products/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchData,apiRequest,actDeleteRequest} from '../../actions/index';

class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            products : []
        }
    }
    componentDidMount(){
        const {fetchApiResquest} = this.props;
        fetchApiResquest();
    }
    onDelete =(id) =>{
        // const {products} = this.state;
        // console.log(id);
        // callApi('DELETE',`products/${id}`,null).then(res =>{
        //     if(res.status === 200){
        //         let index = this.findIndex(products,id);
        //         if(index !== -1){
        //             products.splice(index,1);
        //             this.setState({
        //             products : products
        //         })
        //         }
                
        //         console.log("delete thành công")
        //     }
        // })
        this.props.fetchDeleteRequest(id);
    }
  render() {
    const {products} = this.props;  
    return (
        
        <div className="text-left">
      <Link to="/products/add" className="btn btn-info" style={{marginBottom:'10px'}}>Thêm Sản Phẩm</Link>
        <ProductList>
            {this.showProductItem(products)}
        </ProductList>
      </div> 
    );
  }
  showProductItem = (products) =>{
    let result = null;
    if(products.length > 0){
        result = products.map((product,index) =>{
            return (
                <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>
            )
        })
    }
    return result;

  }
}
const mapStatetoProps = state =>{
    return{
        products : state.products
    }

}
const mapDispatchtoProps = (dispatch,props) =>{
    return {
        fetchAllData : (products) =>{
            dispatch(fetchData(products));
        },
        fetchApiResquest : () =>{
            dispatch(apiRequest());
        },
        fetchDeleteRequest : (id) =>{
            dispatch(actDeleteRequest(id));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ProductPage);
