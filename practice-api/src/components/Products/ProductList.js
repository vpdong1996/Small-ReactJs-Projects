import React, { Component } from 'react';


class ProductList extends Component {
  render() {
    return (

      <div className="card text-center">
        <div className="card-header text-left">
          Featured
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
            {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
        
    );
  }
}

export default ProductList;
