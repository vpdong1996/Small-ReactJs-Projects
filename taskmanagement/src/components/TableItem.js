import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
    }
    onUpdateStatus(){
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () =>{
        this.props.onDelete(this.props.task.id);
    }
    onEdit = () =>{
        this.props.onEdit(this.props.task.id)
    }
    render(){
        const {task,index} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center"><span onClick={this.onUpdateStatus} className={task.status === true ? "badge badge-success" : "badge badge-danger"}>{task.status === true ? "Active" : "Hide"}</span></td>
                <td><div className="taskButton text-center">
                <button type="submit" className="btn btn-warning" onClick={this.onEdit}><span className="fas fa-pen fa-fw"></span><span>Edit</span> </button>&nbsp;
                <button type="submit" className="btn btn-danger" onClick={this.onDelete}><span className="fas fa-trash-alt fa-fw"></span><span>Delete</span> </button>
                    </div>
                </td>
            </tr>
        )
    }
}
export default Item;