import React, {Component} from 'react';

class NotFound extends Component {
    render(){
        return(
            <div class="container">
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Không Tìm Thấy Trang !</h4>
                  <p>Có lỗi đã xảy ra</p>
                </div>
            </div>
        )
    }
}
export default NotFound;