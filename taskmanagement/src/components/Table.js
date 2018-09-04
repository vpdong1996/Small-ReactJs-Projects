import React, { Component } from 'react';
import Item from './TableItem';

class Table extends Component {
    constructor(props){
        super(props)
        this.state  = {
            filterName : '',
            filterStatus : -1
        }
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.props.onFilter(name === "filterName" ? value : this.state.filterName,
        name === "filterStatus" ? value : this.state.filterStatus
        );
        this.setState({
            [name]: value
        })
        
    }
    render(){
        const {tasks} = this.props;
        const {filterName,filterStatus} = this.state;
        const taskMap = tasks.map((task,index)=>{
            return(
                <Item onUpdateStatus={this.props.onUpdateStatus} key={task.id} index={index} task={task} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            )
        })
        return(
            <div className="row mt-30">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="text-center">
                                <th>POS</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td><input type="text"  className="form-control" name="filterName" onChange={this.onChange} value={filterName}/></td>
                                <td><select className="form-control" name="filterStatus" onChange={this.onChange} value={filterStatus}>
                                <option value={-1}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Hide</option>
                                </select></td>
                                <td></td>
                            </tr>
                            {taskMap}
                            </tbody>
                    </table>
                </div>
          </div>
        )
    }
}
export default Table;