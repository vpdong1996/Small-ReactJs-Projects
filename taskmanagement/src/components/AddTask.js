import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            name: '',
            status : false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
    }
   componentWillMount(){
    if (this.props.taskEdit !== null){
        this.setState({
            id:this.props.taskEdit.id,
            name:this.props.taskEdit.name,
            status:this.props.taskEdit.status
        })
    }
   }
   componentWillReceiveProps(nextProps){
    if (nextProps.taskEdit){
        this.setState({
            id:nextProps.taskEdit.id,
            name:nextProps.taskEdit.name,
            status:nextProps.taskEdit.status
        })
    }else{
        this.setState({
            id:'',
            name: '',
            status : false
        })
    }
   }
    onChange(e){
        const target = e.target;
        const name = target.name;
        let value = target.value;
        if(name === "status"){
            value =  target.value === "true" ? true : false 
        } 
        this.setState({
            [name] : value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    onClear(){
        this.setState({
            name:'',
            status: true
        })
        
    }
    render(){
        const { id } = this.state;
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header" id="addtaskHeader">
                    {id !=='' ? "Edit Tasks" : " Add Tasks "} <span id="addtask" onClick={this.props.closeTask}><span id="hoverClose" className="fas fa-times-circle"></span></span>
                    </div>
                    <form onSubmit={this.onSubmit}>
                    <div className="card-body">
                        <div className="form-group">
                        <label className="weightText" htmlFor="exampleInputPassword1">Name :</label>
                        <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                        <label className="weightText">Status : </label>
                        <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                            <option value={true}>Active</option>
                            <option value={false}>Hide</option>
                        </select>
                        </div>
                        <div className="taskButton text-center">
                        <button type="submit" className="btn btn-warning"><span className="fas fa-plus fa-fw"></span><span>Save</span> </button>&nbsp;
                        <button type="reset" className="btn btn-danger" onClick={this.onClear} ><span className="fas fa-times fa-fw"></span><span>Cancel</span> </button>
                        </div>
                    </div>
                    </form>
                </div>         
          </div>
        )
    }
}
export default AddTask;