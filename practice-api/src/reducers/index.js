import {combineReducers} from 'redux';
import products from './products';
import edititem from './edititem';


const appReducers = combineReducers({
    products,
    edititem
});
export default appReducers;