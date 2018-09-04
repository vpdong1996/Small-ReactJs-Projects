import React,{Component} from 'react';
import EditableTimer  from './EditableTimer';

class EditableTimerList extends Component {
    onSubmitForm = (timer) =>{
        this.props.onSubmitForm(timer);
    }

    render(){
        return(
            <div id="timers">
                {this.showEditableTimer()}
            </div>
        )
    }
    showEditableTimer = () =>{
        let result = null;
        result = this.props.timers.map((time)=>{
            return(
                <EditableTimer 
                    id={time.id}
                    key={time.id}
                    title={time.title}
                    project={time.project}
                    elapsed={time.elapsed}
                    runningSince={time.runningSince}
                    onSubmitForm={this.onSubmitForm}
                    onDeleteTimer={this.props.onDeleteTimer}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            )
        })
        return result;
    }
}
export default EditableTimerList;