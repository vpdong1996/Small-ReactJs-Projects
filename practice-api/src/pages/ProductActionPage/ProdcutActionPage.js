import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actAddProductRequest,actGetProductRequest,actEditProductRequest} from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            checkStatus : ''
        }
    }
    componentDidMount(){
        const {match} = this.props;
        if(match){
            const id = match.params.id;
            this.props.fetchUpdateProduct(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps){
            console.log(nextProps.itemEdit);
            // const {itemEdit} = nextProps;
            this.setState({
                id : nextProps.itemEdit.id,
                txtName : nextProps.itemEdit.name,
                txtPrice : nextProps.itemEdit.price,
                checkStatus : nextProps.itemEdit.status ? true : false
            });
            console.log(this.state)
        }
    }
    onChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (e) =>{
        const {id,txtName,txtPrice,checkStatus}= this.state;
        const {history} = this.props;
        e.preventDefault();
        if(id){
            this.props.fetchEditProduct({id :id,
                name :txtName,
                price : txtPrice,
                status : checkStatus ? true : false
            })
            // // this.props.fetchUpdateProdcut(id);
            // callApi('PUT',`products/${id}`,{
            //     name :txtName,
            //     price : txtPrice,
            //     status : checkStatus ? true : false
            // }).then(res =>{
            //     history.goBack();
            // })
        }else{  
            this.props.fetchAddProduct({
                id :id,
                name :txtName,
                price : txtPrice,
                status : checkStatus ? true : false
            });
        }
        history.goBack();

    }
    render(){
        const {id,txtName,txtPrice,checkStatus} = this.state;
        return (
            
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group text-left" >
                        <label><strong>Product Name:</strong></label>
                        <input name="txtName" value={txtName || ''} type="text" onChange={this.onChange}  className="form-control" aria-describedby="helpId" />                    
                    </div>
                    <div className="form-group text-left">
                        <label><strong>Price:</strong></label>
                        <input name="txtPrice" value={txtPrice  || ''} type="number" onChange={this.onChange} className="form-control" aria-describedby="helpId" />
                    </div>
                    <div className="checkbox text-left">
                        <label><strong>Status:</strong></label><br/>
                        <label><input name="checkStatus" value={checkStatus} onChange={this.onChange} checked={checkStatus} type="checkbox"/> Còn Hàng</label>
                    </div>
                    <div className="text-left">
                    <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Save'}</button>
                    <Link to="/product" style={{marginLeft:'10px'}} className="btn btn-danger" >Back</Link>
                    </div>
                    </form>
                </div>
            </div>
                
                
                
        )
    }
}
const mapStatetoProps = state =>{
    return{
        itemEdit : state.edititem
    }

}
const mapDispatchtoProps = (dispatch,props) =>{
    return {
        fetchAddProduct : (product) =>{
            dispatch(actAddProductRequest(product))
        },
        fetchUpdateProduct : (id) =>{
            dispatch(actGetProductRequest(id));
        },
        fetchEditProduct : (product) =>{
            dispatch(actEditProductRequest(product));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductActionPage);