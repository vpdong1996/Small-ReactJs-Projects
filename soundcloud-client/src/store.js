import {createStore,applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';

const logger = createLogger();

const createStoreMiddleware = applyMiddleware(logger)(createStore);

export function configureStore(innitialState){
    return createStoreMiddleware(rootReducer, innitialState);
}