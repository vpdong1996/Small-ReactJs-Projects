import React, { Component } from 'react';
import './App.css';
import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/TimerFormToggle';
import randomstring from 'randomstring';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers : [
        {
          title:'Practice Squat',
          project :'OrangeTheory Fitness',
          id : randomstring.generate(9),
          elapsed : 5456099,
          runningSince : Date.now()
        },
        {
          title:'Bake Bread',
          project :'BreadTalk',
          id : randomstring.generate(9),
          elapsed : 1273998,
          runningSince : null
        }
      ]
    };
  }
  onSubmitForm = (timer) =>{
    if(this.state.timers.find(time => time.id === timer.id)){
      this.setState({
        timers : this.state.timers.map((time)=>{
          if(time.id === timer.id){
            return Object.assign({},time,{
              title : timer.title,
              project : timer.project
            })
          }else{
            return time;
          }
        })
      }) 
    }
    else{
      const addTimer = Object.assign({},timer,{
        elapsed : 0,
      });
      this.setState({
        timers : [...this.state.timers,addTimer]
      })
      
    }
  }
  onDeleteTimer = (id) =>{
    // Solution 1 : Delete by findIndex
    // let index = this.findIndex(this.state.timers,id);
    // this.state.timers.splice(index,1);
    // this.setState({
    //   timers : [...this.state.timers]
    // })
    //Solution 2 : Delete by Filter Arr then check Id in Arr # Id OnDelete
    this.setState({
      timers : this.state.timers.filter(time => time.id !== id)
    });
  }
  handleStartClick = (timeId) =>{
    const now = Date.now();
    this.setState({
      timers:this.state.timers.map(timer =>{
        if(timer.id === timeId){
          return Object.assign({},timer,{
            runningSince: now
          });
        }else{
          return timer
        }
      })
    })
  }
  handleStopClick = (timeId) =>{
    const now = Date.now();
    this.setState({
      timers : this.state.timers.map(timer =>{
        const lastElapsed = now - timer.runningSince;
        if(timer.id === timeId){
          return Object.assign({},timer,{
            elapsed : lastElapsed,
            runningSince :null
          })
        }else{
          return timer;
        }
      })
    })
  }
  findIndex = (timer,id) =>{
    let result = -1;
    timer.forEach((time,index) =>{
      if(time.id === id){
        result = index;
      }
    })
    return result;
  }
  render() {
    return (
      <div className="App">
        <div className="ui three column centered grid" style={{marginTop:"20px"}}>
          <div className="column">
            <EditableTimerList timers={this.state.timers}  onSubmitForm={this.onSubmitForm} onDeleteTimer={this.onDeleteTimer} onStartClick={this.handleStartClick} onStopClick={this.handleStopClick}/>
            <ToggleableTimerForm onSubmitForm={this.onSubmitForm}/>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
