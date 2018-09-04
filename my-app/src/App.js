import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hello from './components/hello';
import Course from './components/course';

class App extends Component {
  render() {
    const subjects =  [
      {
        nameSubject: "ReactJS",
        typeSubject : true,
        time: "20 Hours"
      },
      {
        nameSubject: "NodejS",
        typeSubject : false,
        time: "45 Hours"
      },
      {
        nameSubject: "AngularJS",
        typeSubject : true,
        time: "80 Hours"
      },
    ]
    const myCourse  = subjects.map((subject,index) => {
     return <Course key={`subject ${index}` } nameSubject={subject.nameSubject} type={subject.typeSubject} time={subject.time} />
    })

    return (
        <div className="row">
          {myCourse}
        </div>
    );
  }
}

export default App;
