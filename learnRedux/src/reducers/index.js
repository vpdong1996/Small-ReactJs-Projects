import {combineReducers} from 'redux';
import tasks from './tasks';
import isShowAddTask from './isShowAddTask';


const myReducer = combineReducers({
    tasks : tasks,
    isShowAddTask : isShowAddTask
});

export default myReducer;
