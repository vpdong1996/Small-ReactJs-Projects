import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/TrackList';
import {configureStore} from './store';
import * as actions from './actions';
import {Provider} from 'react-redux';



const tracks = [
    {
      id: 1,
      title: 'Bohemian Rhapshody'
    },
    {
      id: 2,
      title: 'Cơn mưa ngang qua'
    },
    {
        id: 3,
        title: "Don't Stop Me Now"
      }
    
  ];
  const store = configureStore();
  store.dispatch(actions.setTracks(tracks));



ReactDOM.render(<Provider store={store}><TrackList /></Provider>,document.getElementById('app'));

