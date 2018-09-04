import React, {Component} from 'react';
import Lesson from './lesson';
// import Hello from './hello';

class Course extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow : true
        }
        this.handleClick = this.handleClick.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    handleClick(){
        console.log(this.props.nameSubject);
    }
    buttonClick(){
        // return this.refs.username.value;
        // this.state.isShow ? this.setState({
        //     isShow : false
        // }) : this.setState({
        //   isShow : true  
        // })
        this.setState({
            isShow: !this.state.isShow
        })
    }
    showButton(){
        const typeButton = this.props.type;
        if(typeButton){
            return <button className="btn btn-info" onClick={this.handleClick}>Submit</button>
        }else{
            return(
                <div className="input-group mb-4">
                    <input ref="submitcourse" type="text" className="form-control" placeholder="Đăng ký khóa học" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button  className="btn btn-outline-info" type="button">Submit</button>
                    </div>
                </div>
            )
        }
    }
    render(){
        let lesson = null ; 
        if(this.state.isShow){
            lesson = <Lesson />;
        }else{
            lesson = null;
        }
        return(
            <div className="col col-sm-12 col-md-4">
                <div className="card" style={{width: "18rem"}}>
                <div className="card-header">
                    {this.props.nameSubject}
                </div>
                <button className="btn btn-success" onClick={this.buttonClick}>Ẩn/Hiện</button>
                {lesson}
                {this.showButton()}
                </div>
          </div>
        )
    }
}
export default Course;
