import React,{Component} from 'react';
import TimerForm from './TimerForm'
import Timer from './Timer'

class EditableTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFormOpen : false
        }
    }
    onEditForm = () =>{
        this.setState({
            editFormOpen : !this.state.editFormOpen
        })
    }
    onFormCancel = () => {
        this.setState({
            editFormOpen : false
        })
    }
    onSubmitForm = (timer) => {
        this.props.onSubmitForm(timer);
        this.setState({
            editFormOpen : false
        })
    }
    render(){
        const {title,project,elapsed,runningSince,id} = this.props;
        const {editFormOpen} = this.state;
        if(editFormOpen){
            return(
                <TimerForm id={id} title={title} project={project} onFormCancel={this.onFormCancel} onSubmitForm={this.onSubmitForm}/>
            )
        }else{
            return(
                <Timer 
                id={id}
                title={title}
                project={project} 
                elapsed={elapsed} 
                runningSince={runningSince} 
                onEditForm={this.onEditForm} 
                onDeleteTimer={this.props.onDeleteTimer}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
                />
            )
        }
        
    }
}
export default EditableTimer;